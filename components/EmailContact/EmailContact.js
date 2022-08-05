import React, { useState, useEffect, forwardRef } from 'react'
import { device } from '../../device';
import { Container, HeaderTitle, LinkGrid, Input, Label, TextArea } from '../../globalstyle';
import Head from 'next/head';
// import InPageLink from '../components/InPageLink/InPageLink';
import styled from 'styled-components';
import 'isomorphic-fetch';

const FormItem = styled.div`
    margin: 0px auto 10px auto;
    
    @media ${device.tablet} {
    } 
    @media ${device.laptopL} {
    } 
`;

const ContactForm = styled.form`  
    margin: 20px auto;
    width: 18em;
    min-height: fit-content;
    padding: 1rem 2rem ;
    border: 2px solid gray;
    border-radius:15px;
    outline:none;
    box-shadow: 4px 5px 8px 0px rgba(0,0,0,0.6);
-webkit-box-shadow: 4px 5px 8px 0px rgba(0,0,0,0.6);
-moz-box-shadow: 4px 5px 8px 0px rgba(0,0,0,0.6);
    background: rgb(140,26,255);
    background: linear-gradient(45deg, rgba(140,26,255,1) 30%, rgba(152,26,255,0.9587185215883228) 71%);
    opacity: ${props => props.isVisible ? '1' : '0'};
    transition:
     opacity 800ms ease-in 300ms;

    @media ${device.tablet} {
        width: 24em;

    } 
    @media ${device.laptopL} {
        width: 36em;
        /* height: 30em; */
    } 
`;

const Submit = styled.button`
    display: block;
    margin: 0 auto 0 auto;
    box-sizing: border-box;
    background-color: #f3ecfa;
    text-align: center;
    outline: none;
    border: none;
    padding: 1rem 1.2rem;
    border-radius: 15px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    color: #6600CC;
    box-shadow: 1px 2px 2px 3px rgba(0,0,0,0.28);
-webkit-box-shadow: 1px 2px 2px 3px rgba(0,0,0,0.28);
-moz-box-shadow: 1px 2px 2px 3px rgba(0,0,0,0.28);

    transition:
        background-color 100ms ease-in,
        transform 100ms ease-in;
    &:active {
        transform: scale(0.9);
    }
    &:focus {
        box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.75);
        transform: scale(1.04);
    }
    &:hover {
        box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.75);
        transform: scale(1.04);
    }
    
    @media ${device.tablet} {
    } 
    @media ${device.laptopL} {
    } 
`;

const BlurContainer = styled.div`
    /* height: 100vh; */
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    /* background-color: #cccccc; */
    z-index: 100;
    opacity: 1;
    backdrop-filter: blur(6px) grayscale(98%);
`

// const ContactModal = styled.div`
//     position: ${props => props.isOpen ? 'sticky' : 'relative'};
//     position: -webkit-sticky;
//     z-index: 900;
//     background-color: #6600CC;
//     width: 30%;
//     min-width: fit-content;
//     padding: ${props => props.isOpen ? '1rem' : '0px'};
//     top: 200px;
//     left: 1000px;

//     display: ${props => props.isOpen ? 'inline' : 'none'};
//     margin-right: 5px;
//     border-radius: 30px; 
//     color: #fafafa;
//     opacity: ${props => props.isOpen ? '1' : '0'};

//     transition:
//        opacity 500ms ease;

// `
const ContactModal = styled.div`
    /* position: ${props => props.isOpen ? 'sticky' : 'relative'}; */
    /* position: -webkit-sticky; */
    position: fixed;
    z-index: 900;
    background-color: #6600CC;
    width: 30%;
    min-width: fit-content;
    padding: ${props => props.isOpen ? '1rem' : '0px'};
    top: 200px;
    left: 100px;
    
    display: ${props => props.isOpen ? 'inline' : 'none'};
    margin-right: 5px;
    border-radius: 30px; 
    color: #fafafa;
    opacity: ${props => props.isOpen ? '1' : '0'};

    transition:
       opacity 500ms ease;
      
`

const ContactEmail = forwardRef((props, ref) => {
    const [from, setFrom] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [displayModal, setDisplayModal] = useState(false)

    // useEffect(() => {
    //     setDisplayModal(!displayModal)
    // }, [modalMsg])

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayModal(!displayModal)
        // if (!from || !subject || !message) {
        //     alert('All fields required')
        //     return
        // }
        // try {
        //     fetch('/api/Email', {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({ from, subject, message })
        //     })
        //         .then(res => {
        //             if (res.status === 200) {
        //                 setModalMsg(`Thanks for contacting me ${from}`)
        //             }
        //             // alert('Thanks for the Message!', `${res.newEmail.from}`)
        //             console.log(res)
        //             // setFrom('');
        //             setSubject('');
        //             setMessage('')
        //         })

        // } catch (error) {
        //     console.log(error);
        //     res.status(400);
        // }
    }

    return (

        
            <ContactForm ref={ref} isVisible={props.show}>
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
                    <Submit primary type='submit' onClick={(e) => {handleSubmit(e) }}>Send</Submit>
                </FormItem>
            </ContactForm >
    )
})

export default ContactEmail