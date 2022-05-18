import styled, { createGlobalStyle } from "styled-components";
import { device } from './device';
import { layout } from './layoutSize';
import Image from 'next/image'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* font-family: 'Source Sans Pro', sans-serif; */
    } 
    
    html, body {
        max-width: 100%;
        overflow-x: hidden;
        background: #F4EDFA;
    }
    
    a, h3, h5 {
        font-family: 'Nunito','Source Sans Pro', sans-serif;
    }
`;


export const Container = styled.main`
    z-index: 1;
    width: 100%;
    padding: 10px 20px;
    min-height: 75vh;
    position: relative;
    /* height: fit-content; */
    /* margin-bottom: 20px; */
    /*display: flex;
    justify-content: center; */
    /* flex-wrap:wrap; */
    /* align-items: center; */

    @media ${device.tablet} {
    min-height: 77vh;
        padding: 1em 3em;
    }
    @media ${device.laptopL} {
    
    }
    
`;

export const Section = styled.section`
    position: relative;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* flex-wrap: wrap;  */
    padding: 2em 2em;
    /* width: 100%; */
    /* margin: 20px auto; */
    @media ${device.tablet} {
        padding: 3em 3em;
        /* width: 70vw;
        justify-content: space-around;
        padding: 30px 30px;
        margin: 40px auto 80px auto; */
    }
    @media ${device.laptopL} {
        /* justify-content: space-evenly; */
        /* margin: 40px auto 0px auto; */

        /* padding: 30px 0;
        width: 60vw; */
    }
    `;

export const ImageWrapper = styled.div`
    margin: 0 0;
    @media ${device.tablet} {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25vw;
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
    /* font-family: arial, sans-serif; */
    font-family: 'Nunito', 'Source Sans Pro',sans-serif;
    color: #6600CC;
    font-weight: 600;
    /* font-size: 1.2em;     */
    /* margin: 20px 0 30px 0; */
    text-align: ${props => props.centered ? 'center' : 'start'};
    
    @media ${device.tablet} {
        /* font-size: 1rem;
        max-width: 192px;
        padding-right: 0; */
    }
    @media ${device.laptopL} {
        /* max-width: 357px;
        margin: ${props => props.mrgnLeftLG ? "0 0 0 80px" : "0 80px 0 0"}; */
    }
`;
export const Input = styled.input`
    font-family: 'Nunito', 'Source Sans Pro',sans-serif;
    border-radius: 10px;
    outline: none;
    width: 100%;
    padding: 1em 2em;
    transition:
        background-color 250ms ease-in,
        transform 100ms ease-in;
    
    &:focus {
        box-shadow: inset 0px 1px 8px 2px #8c1aff;
        transform: scale(1.02);
    }
    
    
    @media ${device.tablet} {
      
    }
    @media ${device.laptopL} {
    }
`;
       
export const Label = styled.label`
    font-family: 'Nunito', 'Source Sans Pro',sans-serif;
    color: #fafafa;
    display: block;
    margin-bottom: 0.5em;
    
    
    @media ${device.tablet} {
      
    }
    @media ${device.laptopL} {
       
    }
`;

export const TextArea = styled.textarea`
   font-family: 'Nunito', 'Source Sans Pro',sans-serif;
    border-radius: 10px;
    outline: none;
    width: 100%;
    padding: 1em 2em;
    transition:
        background-color 250ms ease-in,
        transform 100ms ease-in;
    
    &:focus {
        box-shadow: inset 0px 1px 8px 2px #8c1aff;
        transform: scale(1.02);
    }
    
    
    @media ${device.tablet} {
      
    }
    @media ${device.laptopL} {
    }
`;

export const HeaderTitle = styled.h1`
    /* font-family: Arial, Helvetica, sans-serif; */
    font-family: 'Nunito', 'Source Sans Pro',sans-serif;
    font-weight: 600;
    font-size: 0.5rem;   
    color: #6600CC;
    font-size: ${props => props.small ? '1.3rem' : '1.5rem'}; 
    margin: 20px 0 10px 0;
    text-align: center;
    
    @media ${device.tablet} {
        font-size: ${props => props.small ? '1.5rem' : '1.5rem'} ;
    }
    @media ${device.laptopL} {
    }
`;

export const H2 = styled.h2`
    font-family: 'Nunito', 'Source Sans Pro',sans-serif;
    color: #6600CC;
    font-size: 1em;
    /* font-weight: 200; */
    line-height: 1.2;
    margin-top: 1em;
    /* max-width: 311px; */
    /* margin: 25px auto; */
    @media ${device.tablet} {
        /* max-width: 450px;
        margin: 25px 0; */
    }
`;

export const LinkGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr;
grid-gap: 35px;
/* width: 18em; */
height: fit-content;
min-width: fit-content;
margin: 0 auto 0 auto;
@media ${device.tablet} {
    width: 50vw;
    grid-gap: 45px;
    width: 24em;
}
@media ${device.laptopL} {
    display: none;
    /* grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    width: 42em;
    grid-gap: 45px; */
}
`;

export default GlobalStyle;