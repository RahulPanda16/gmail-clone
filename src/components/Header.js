import React from "react";
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AppIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ArrowDropDown } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "./firebase";

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signout = ()=>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
    }
    return(
        <div className="header">
            <div className="header__left">
                <IconButton>
                   <MenuIcon />
                </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="gmail-logo" />
                {/* <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="" /> */}
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="Search mail" />
                <ArrowDropDown className="header__inputCaret"/>
            </div>
            <div className="header__right">
                <IconButton>
                    <AppIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signout} src={user?.photo}/>
            </div>
        </div>
    )
}

export default Header;

