import React, { useState, forwardRef, useEffect } from 'react'
import { Input, Label, TextArea, H2 } from '../../globalstyle';
import { ContactForm, FormItem, Submit, BlurContainer, ContactModal } from './ContactEmail.elements'
import 'isomorphic-fetch';



const ContactEmail = forwardRef(({ show }, ref) => {
    const [from, setFrom] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [displayModal, setDisplayModal] = useState(false)
    const [modalMsg, setModalMsg] = useState('')

    // useEffect(() => {
    //     setDisplayModal(!displayModal)
    // }, [modalMsg])

    const handleCloseModal = (e) => {
        e.preventDefault();
        setDisplayModal(!displayModal)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setDisplayModal(!displayModal)
        if (!from || !subject || !message) {
            setModalMsg('All fields are required.')
            setDisplayModal(!displayModal)
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
                    if (res.status === 200) {
                        setModalMsg(`Thanks for contacting me ${from}.`)
                        setDisplayModal(!displayModal)
                    }
                    setFrom('');
                    setSubject('');
                    setMessage('')
                })

        } catch (error) {
            setModalMsg(`An error occured...Message not delivered.`)
            setDisplayModal(!displayModal)
            res.status(400);
        }
    }

    return (
        <>
            {/* {displayModal
                ?
                <BlurContainer show onClick={(e) => { handleCloseModal(e) }}>
                    <ContactModal isOpen>
                        <H2 light center>
                            {modalMsg}
                        </H2>
                        <br></br>
                        <Label>Click anywhere to resume.</Label>
                    </ContactModal>
                </BlurContainer>
                :
                <BlurContainer>
                    <ContactModal></ContactModal>
                </BlurContainer>
            } */}
            <ContactForm ref={ref} isVisible={show}>
                <FormItem>
                    <Label htmlFor='Your Email'>Your Email Address</Label>
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