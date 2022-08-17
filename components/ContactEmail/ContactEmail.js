import React, { useState, forwardRef } from 'react'
import { Input, Label, TextArea } from '../../globalstyle';
import {ContactForm, FormItem, Submit} from './ContactEmail.elements'
import 'isomorphic-fetch';



const ContactEmail = forwardRef(({show}, ref) => {
    const [from, setFrom] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    // const [displayModal, setDisplayModal] = useState(false)

    // useEffect(() => {
    //     setDisplayModal(!displayModal)
    // }, [modalMsg])

    const handleSubmit = (e) => {
        e.preventDefault();
        // setDisplayModal(!displayModal)
        if (!from || !subject || !message) {
            alert('All fields required')
            return
        }
        try {
            fetch('/api/contact', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ from, subject, message })
            })
                .then(res => {
                    // if (res.status === 200) {
                    //     setModalMsg(`Thanks for contacting me ${from}`)
                    // }
                    // alert('Thanks for the Message!', `${res.newEmail.from}`)
                    // console.log(res)
                    setFrom('');
                    setSubject('');
                    setMessage('')
                })

        } catch (error) {
            console.log(error);
            res.status(400);
        }
    }

    return (
        <>
            <ContactForm ref={ref} isVisible={show}>
                <FormItem>
                    <Label htmlFor='Your Email'>Your Email</Label>
                    <Input type='email' value={from} onChange={(e) => { setFrom(e.target.value) }} />
                </FormItem>
                <FormItem>
                    <Label >Subject</Label>
                    <Input name='subject' value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                </FormItem>
                <FormItem>
                    <Label htmlFor='message'>Message</Label>
                    <TextArea rows={6} type='text' name='message' value={message} onChange={(e) => { setMessage(e.target.value) }} />
                </FormItem>
                <FormItem>
                    <Submit primary type='submit' onClick={(e) => { handleSubmit(e) }}>Send</Submit>
                </FormItem>
            </ContactForm>
        </>
    )
})
ContactEmail.displayName = 'ContactEmail';
export default ContactEmail;