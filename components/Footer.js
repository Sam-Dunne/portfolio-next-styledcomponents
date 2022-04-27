import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { device } from '../device';

const FooterContainer = styled.footer`
    background: #6600CC;
    height: fit-content;
    padding: 30px;
    color: #fafafa;
    @media ${device.laptopL} {
        padding: 30px 150px;
    }
    `;

const FooterImagesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* margin-bottom: 15px; */

`;

const FooterImageWrapper = styled.div`
    width: 50px;
    height: 50px;
    background: #fafafa;
    padding: 10px;
    border-radius: 15px;
    transition: 
        transform 200ms ease-in;


    @media ${device.tablet} {
        /* width: 80px;
        height: 80px; */
    }

    &:hover {
        transform: scale(1.05)
    }

    `;

const FooterImage = styled(Image)`
`;

const FooterCopy = styled.h5`
    text-align: center;
    margin: 0 15px 0 15px;

    @media ${device.tablet} {
        font-size: 1.2rem;
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
                <FooterCopy>This site is built with NextJS and Styled-Components</FooterCopy>
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
