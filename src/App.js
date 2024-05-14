import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header"
import Sidebar from './components/Sidebar';
import Mail from "./components/Mail"
import EmailList from "./components/EmailList"
import SendMail from "./components/SendMail"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from "./components/LOgin"
import { auth } from './components/firebase';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(function () {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(login({
              displayName: user.displayName,
              email: user.email,
              photo: user.photoURL
        }))
    }})
  },[])

  return (
    <Router>
      {!user ? <Login />: (
        <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/mail" exact component={Mail} />
            <Route path="/" exact component={EmailList} />
          </Switch>

        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
      )}
      
    </Router>
  );
}

export default App;
