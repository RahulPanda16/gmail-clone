import React from 'react'
import "./EmailRow.css"
import { Checkbox, IconButton } from '@mui/material'
import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectMail } from '../features/mailSlice'

function EmailRow({id, title, subject, description, time}) {
    const dispatch = useDispatch()

    const openMail = () => {
        dispatch(selectMail({
            id, title, subject, description, time
        }))
    }

  return (
    <div>
        <Link className="link" to="/mail">
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton><StarBorderOutlined /></IconButton>
                <IconButton><LabelImportantOutlined /></IconButton>
            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <div className="emailRow__message">
                <h4>{subject}{" "}
                    <span className="emailRow__description">
                         - {description}
                    </span>
                </h4>
            </div>
            <p className="emailRow__time">
                {time}
            </p>
        </div>
        </Link>
    </div>
    
  )
}

export default EmailRow