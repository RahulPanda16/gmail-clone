import React from 'react';
import { useForm } from 'react-hook-form'; // Corrected import
import { useDispatch } from 'react-redux';
import { Close } from '@mui/icons-material'; // Corrected import
import { Button } from '@mui/material';
import { closeSendMessage } from '../features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

import "./SendMail.css";

function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        db.collection("emails").add({
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        dispatch(closeSendMessage());
    };

    return (
        <div className='sendMail'>
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close className='sendMail__close' onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("to", {required:true})} placeholder='To' type="email" autoComplete='off' />
            {errors.to && <p className='sendMail__error'>To is Required!</p>}
            
            <input {...register('subject',{required:true})} placeholder='Subject' className='sendMail__message' type="text" autoComplete='off'/>
            {errors.subject && <p className='sendMail__error'>Subject is Required!</p>}
            
            <input {...register('message',{required:true})} placeholder='Message...' className='sendMail__message' type="text" autoComplete='off' />
            {errors.message && <p className='sendMail__error'>Message is Required!</p>}

            <div className="sendMail__options">
                <Button className='sendMail__send' variant='contained' color='primary' type='submit'>Send</Button>
            </div>
        </form>
        </div>
    );
}
export default SendMail