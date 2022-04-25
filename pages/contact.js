import React, { useState } from 'react'
import { device } from '../device';
import { Container, HeaderTitle, LinkGrid, Input, Label, TextArea } from '../globalstyle';
import Head from 'next/head';
import InPageLink from '../components/InPageLink';
import styled from 'styled-components';
import { apiService } from '../utils/apiService';

// import axios from 'axios';

const FormItem = styled.div`
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    margin: 20px auto;
    
    @media ${device.tablet} {
    } 

    @media ${device.laptopL} {
    } 
`;

const ContactForm = styled.form`  
    margin: 20px auto;
    width: 18em;
    padding: 1em 2em;
    border: 2px solid gray;
    border-radius:15px;
    background-color: #8c1aff;
    @media ${device.tablet} {
        width: 24em;
    } 

    @media ${device.laptopL} {
        width: 42em;
    } 
`;

const Submit = styled.button`
    margin: 1em auto 0 auto;
    background-color: #f3ecfa;
    text-align: center;
    outline: none;
    padding: 1rem;
    border-radius: 15px;
    /* box-shadow: 6px 6px 8px 0px rgba(0,0,0,0.75); */
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    color: #6600CC;
    transition:
        background-color 100ms ease-in,
        transform 100ms ease-in;

    &:active {
        transform: scale(0.9);
    }

    &:focus {
        box-shadow: 6px 6px 8px 0px rgba(0,0,0,0.75);
        transform: scale(1.04);
    }

    &:hover {
        box-shadow: 6px 6px 8px 0px rgba(0,0,0,0.75);
        transform: scale(1.04);
    }
    
    @media ${device.tablet} {
    } 

    @media ${device.laptopL} {
    } 
`;

const Contact = ({ small }) => {
    const [from, setFrom] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!from || !subject || !message) {
            // MyModal.fieldValidation(('Oops...'), ('All fields required'));
            alert('All fields required')
            return
        }
        apiService('/api/contact', 'POST', { from, subject, message })
            .then(result => {
                // MyModal.timeoutSuccess('Thanks for the Message!', `${result.newEmail.from}`)
                setFrom('');
                setSubject('');
                setMessage('')
            })
    }

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Container>
                <HeaderTitle>Contact</HeaderTitle>
                {/* <ContactContainer> */}
                {/* <div> */}
                <ContactForm>
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
                </ContactForm >
                {/* </div> */}
                {/* </ContactContainer> */}
                <LinkGrid>
                    <InPageLink href='/projects' >Projects</InPageLink>
                    <InPageLink href='/about' >About</InPageLink>
                    <InPageLink href='/cv' >CV</InPageLink>
                    <InPageLink href='/' >Home</InPageLink>
                </LinkGrid>
            </Container>





        </>
    )
}

export default Contact
