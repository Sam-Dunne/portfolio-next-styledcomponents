import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background: #6600CC;
    height: fit-content;
    padding: 80px;
    color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Footer = () => {
    return (
        <FooterContainer>
            <h1>This site is built with NextJS and Styled-Components</h1>
        </FooterContainer>
    )
}

export default Footer
