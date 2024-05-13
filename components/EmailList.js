import React, { useEffect, useState } from 'react'
import Section from "./Section"
import EmailRow from "./EmailRow"
import "./EmailList.css"
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RedoIcon from '@mui/icons-material/Redo'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide'
import SettingsIcon from '@mui/icons-material/Settings'
import { db } from './firebase';

function EmailList() {
    const [emails, setEmail] = useState([])

    useEffect(function(){
        db.collection('emails')
          .orderBy('timestamp','desc')
          .onSnapshot(snapshot => setEmail(snapshot.docs.map((doc) => 
            ({
            id:doc.id,
            data:doc.data()
            }) 
        )))
    },[])

  return (
    <div className='emailList'>
        <div className="emailList__settings">
            <div className="emailList__settingsLeft">
                <Checkbox />
                <IconButton><ArrowDropDownIcon /></IconButton>
                <IconButton><RedoIcon /></IconButton>
                <IconButton><MoreVertIcon /></IconButton>
            </div>
            <div className="emailList__settingsRight">
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>
        </div>
        <div className="emailList__sections">
            <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
            <Section Icon={PeopleIcon} title="Social" color="#1A73e8" />
            <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
        </div>

        <div className="emailList__list">
          {emails.map(({id, data}) => (
            <EmailRow key={id} id={id} title={data.to} subject={data.subject} description={data.message} time={new Date(data.timestamp?.seconds * 1000).toUTCString()}/>
           ))}
        </div>
    </div>
  )
}

export default EmailList