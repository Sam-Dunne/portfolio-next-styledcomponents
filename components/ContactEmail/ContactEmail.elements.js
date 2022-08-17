import styled from 'styled-components';
import { device } from '../../device';

export const FormItem = styled.div`
    margin: 0px auto 10px auto;
    
    @media ${device.tablet} {
    } 
    @media ${device.laptopL} {
    } 
`;

export const ContactForm = styled.form`  
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

export const Submit = styled.button`
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

export const BlurContainer = styled.div`
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

export const ContactModal = styled.div`
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
`;