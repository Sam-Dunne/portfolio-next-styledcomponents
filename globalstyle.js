import styled, { createGlobalStyle } from "styled-components";
import { device } from './device';
import { layout } from './layoutSize';
import Image from 'next/image'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    } 
    
    html {
    max-width: 100%;
    }

    body {
        height: 100%;
        max-width: 100%;
        overflow-x: hidden;
        background: #f4f0f8;
        overflow-y: scroll;

    }

    /* 
    body {
    height: 100%;
    position: fixed;
    -webkit-overflow-scrolling: touch;
    } */

    
    a, h3, h5, p {
        font-family: 'Nunito','Source Sans Pro', sans-serif;
    }

    p, li {
        font-size: 0.8em;

        @media ${device.tablet} {
        font-size: 1.2em;
        }
        @media ${device.laptopL} {
        font-size: 1.3em;
        }
    }
`;


export const Container = styled.main`
    z-index: 1;
    width: 100%;
    background-color: ${props => props.dark ? '#e9e6ed' : '#f4f0f8'};
    position: relative;
    
    @media ${device.tablet} {  
    }
  
    @media ${device.laptopL} {
    }
    
`;

export const TopSection = styled.section`
   z-index: 1;
    width: 100%;
    min-height: ${props => props.last ? '80vh' : "90vh"};
    position: relative;
    padding: 3rem 2rem;
    background-color: ${props => props.dark ? '#e9e6ed' : '#f9f7fc'};
    
    @media ${device.tablet} {
        padding: 6rem 2rem;
    }
    
    @media ${device.laptopL} {
        padding: 3rem 2rem;
    }
`
export const MidPageSection = styled.section`
   z-index: 1;
    width: 100%;
    background-color: ${props => props.dark ? '#e9e6ed' : '#f9f7fc'};
    min-height: 100vh;
    position: relative;
    padding: 6rem 2rem;
    
    @media ${device.tablet} {
        padding: 9rem 3rem;  
    }
  
    @media ${device.laptopL} {
        padding: 9rem 3rem;  
    }
`

export const Section = styled.section`
    position: relative;
    padding: 2em 2em;

    @media ${device.tablet} {
        padding: 3em 3em;
    }

    @media ${device.laptopL} {
        
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
    font-family: 'Nunito', 'Source Sans Pro',sans-serif;
    color: #382c43;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-align: ${props => props.centered ? 'center' : 'start'};
    
    @media ${device.tablet} {
       
    }
    @media ${device.laptop} {
        font-size: 1.4em;
    }
`;

export const Input = styled.input`
    font-family: 'Nunito', 'Source Sans Pro',sans-serif;
    border-radius: 10px;
    outline: none;
    width: 100%;
    padding: 0.5em 2em;
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
    margin-bottom: 0.2em;
    
    
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
    padding: 1rem 2rem;
    height: 4rem;
    transition:
        background-color 250ms ease-in,
        transform 100ms ease-in;
    
    &:focus {
        box-shadow: inset 0px 1px 8px 2px #8c1aff;
        transform: scale(1.02);
    }
    
    
    @media ${device.tablet} {
    height: 8rem;
      
    }
    @media ${device.laptopL} {
        font-size: 1.2rem;
    }
`;

export const HeaderTitle = styled.h1`
    font-family: 'Nunito', 'Source Sans Pro',sans-serif;
    font-weight: 600;
    font-size: 0.5rem;   
    color: #382c43;
    font-size: ${props => props.small ? '1.3rem' : '1.5rem'}; 
    margin: 0px 0 10px 0;
    text-align: center;
    
    @media ${device.tablet} {
        font-size: ${props => props.small ? '1.5rem' : '1.5rem'} ;
    }
    @media ${device.laptopL} {
    }
`;

export const H2 = styled.h2`
    font-family: 'Nunito', 'Source Sans Pro',sans-serif;
    color: ${props => props.light ? '#f9f7fc' : '#382c43'};
    font-size: 1em;
    line-height: 1.2;
    margin: 1em auto 0.5em auto;
    text-align: center;
    @media ${device.tablet} {
        font-size: 1.2em;
        /* width: 60%; */
    }
    @media ${device.laptop} {
        font-size: 1.2em;
        margin: 1em auto 0 auto;
        /* width: 30%; */
    }
`;

export const PARA = styled.p`
    letter-spacing: 0.01em;
  @media ${device.tablet} {
    }

    @media ${device.laptopL} {
    font-size: 1em;
    }
`;

export const LinkGrid = styled.div`
display: grid;
opacity: ${props => props.show ? '1' : '0'};
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr;
grid-gap: 35px;
height: fit-content;
width: 90%;
min-width: fit-content;
margin: 1em auto 1em auto;

transition:
       opacity 1500ms ease;
       
@media ${device.tablet} {
    width: 50vw;
    grid-gap: 45px;
    width: 24em;
    margin: 3em auto 6.4em auto;
}
@media ${device.laptopL} {
    display: none;

}
`;

export default GlobalStyle;