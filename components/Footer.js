import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { device } from '../device';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #6600CC;
    height: 10vh;
    color: #fafafa;
    @media ${device.laptopL} {
    }
    `;

const FooterImagesContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const FooterImageWrapper = styled.div`
    width: 40px;
    height: 40px;
    background: #fafafa;
    padding: 5px;
    border-radius: 10px;
    transition: 
        transform 200ms ease-in;


    @media ${device.tablet} {
       
    }

    &:hover {
        transform: scale(1.05)
    }

    `;

const FooterImage = styled(Image)`
`;

const FooterCopy = styled.p`
    text-align: center;
    font-size: 0.6em;
    margin: 0 3em 0 3em;
    
    @media ${device.tablet} {
        font-size: 0.9em;
        margin: 0 10em 0 10em;
    }
    @media ${device.laptop} {
        font-size: 0.9em;
        margin: 0 10em 0 10em;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterImagesContainer>
                <a href='https://www.linkedin.com/in/samdunnewebdev/' rel='noopener noreferrer' target='_blank'>
                    <FooterImageWrapper>
                        <FooterImage src="/LI-In-Bug.png" alt="linkedIn logo" width={635} height={540} objectFit="cover" layout='responsive' />
                    </FooterImageWrapper>
                </a>
                <FooterCopy>This site is built with NextJS<br></br> and Styled-Components</FooterCopy>
                <a href='https://github.com/Sam-Dunne/portfolio-next-styledcomponents' rel='noopener noreferrer' target='_blank'>
                    <FooterImageWrapper>
                        <FooterImage src="/GitHub-Mark-120px-plus.png" alt="github logo" width={120} height={120} objectFit="cover" layout='responsive' />
                    </FooterImageWrapper>
                </a>
            </FooterImagesContainer>
        </FooterContainer>
    )
}

export default Footer
