import styled, { createGlobalStyle } from "styled-components";
import { device } from './device';
import Image from 'next/image'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    } 
    
    html, body {
    max-width: 100%;
    overflow-x: hidden;
    background: #f3ecfa;
    }
`;


export const Container = styled.div`
    z-index: 1;
    width: 100%;
    padding-bottom: 10px 50px;
    min-height: 70vh;
    max-height: fit-content;
    position: relative;
    
`;

export const Section = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 30px 12px;
    width: 90vw;
    margin: 40px auto;
    @media ${device.laptopL} {
        margin: 80px auto;
        flex-direction: ${props => props.picFirst ? 'row-reverse' : 'row'};
    }
    `;

export const ImageWrapper = styled.div`
    margin: 0 auto;

    @media ${device.tablet} {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50vw;
    }

    @media ${device.laptopL} {
      margin: 0;
      max-width: 30vw;
    }

  
`;

export const SCImage = styled(Image)`
    display: block;
    object-fit: cover;
    margin: 0 auto;
    border-radius: 15px; 
`;

export const Button = styled.button`
    align-self: center;
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#4B59f7' : 'transparent')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '0.1rem 2.8rem')};
    color: rgb(56, 47, 64);
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '0.8rem')};
    font-weight: 800;
    outline: none;
    border: solid;
    height: 2.5rem;
    border-color: rgb(56, 47, 64);
    border-radius: 10px;
    border-width: 1px;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({ primary }) => (primary ? '#0467FB' : 'rgb(36, 18, 57)')};
        color: #fff
    }

    @media screen and (max-width: 768px) {
        color: #fff;
        border-color: #fafafa;
        padding: 0 2rem;
        margin-bottom: 15px;
    }
`;

export const HeroH1 = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;    
    margin: 0 0 30px 0;
    
    @media ${device.tablet} {
        font-size: 2rem;
        max-width: 50vw;
        padding-right: 0;
    }

    @media ${device.laptopL} {
        max-width: 50vw;
        margin: ${props => props.mrgnLeftLG ? "0 0 0 80px" : "0 80px 0 0"};
    }
`;

export const HeaderTitle = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
    font-size: 2.5rem;    
    margin: 40px 0 30px 0;
    text-align: center;
    
    @media ${device.tablet} {
        font-size: 4rem;
    }

    @media ${device.laptopL} {
    }
`;

export const HeroH3 = styled.h6`
    font-size: 16px;
    font-weight: 200;
    line-height: 1.1;
    margin-top: 30px;
    max-width: 311px;
    margin: 25px auto;

    @media ${device.tablet} {
        max-width: 450px;
        margin: 25px 0;
    }
`;

export default GlobalStyle;