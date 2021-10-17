import React, { useState } from 'react'
import { device } from '../device';
import { Container, HeaderTitle, LinkGrid } from '../globalstyle';
import Head from 'next/head';
import InPageLink from '../components/InPageLink';
import styled from 'styled-components';

const ContactContainer = styled.div`
    padding: 0 30px 0 30px;
    margin-bottom: 60px;
    
    @media ${device.tablet} {
        padding: 0 50px 0 50px;
    } 

    @media ${device.laptopL} {
        padding: 0 400px 0 400px;
    } 
`;

const contact = ({ small }) => {

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Container>
                <HeaderTitle>Contact</HeaderTitle>
                <ContactContainer>
                    <HeaderTitle small>Proper contact form coming soon...</HeaderTitle>
                    <HeaderTitle small>In the meantime, I can be reached at: <br /> cras.sdunne@gmail.com,
                        <br />
                        at my <a href='https://recipe-registry.herokuapp.com/' rel='noopener noreferrer' target='_blank'>RecipeRegistryApp,</a> <br /> or via <a href='https://www.linkedin.com/in/samdunnewebdev/' rel='noopener noreferrer' target='_blank'>LinkedIn.</a>
                    </HeaderTitle>
                    <HeaderTitle small>20 hour days in Event Production don&apos;t leave much time at the keys, but proves I&apos;m not lazy... I have to recoup 1.5 years income now that shows are back, so don&apos;t judge me by my github activity please. <br />Thanks for visiting! </HeaderTitle>
                </ContactContainer>
                <LinkGrid>
                    <InPageLink href='/about' >About</InPageLink>
                    <InPageLink href='/projects' >Projects</InPageLink>
                    <InPageLink href='/cv' >CV</InPageLink>
                    <InPageLink href='/' >Home</InPageLink>
                </LinkGrid>
            </Container>





        </>
    )
}

export default contact
