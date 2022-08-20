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
    /* width: 90%; */
    min-height: fit-content;
    padding: 1rem 1.3rem ;
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
     opacity 600ms ease-in 150ms;

    @media ${device.tablet} {
        width: 30em;

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
    top: -10vh;
    left: 0;
    display: flex;
    justify-content: center;
    /* align-items: top; */
    height: 100vh;
    width: 100vw;
    /* background-color: #cccccc; */
    z-index: ${props => props.show ? '100' : '-100'};
    opacity: ${props => props.show ? '1' : '0'};
    backdrop-filter: blur(6px) grayscale(80%);
    transition:
       opacity 500ms ease-in-out,
       z-index 100ms ease-in;
`;

export const ContactModal = styled.div`
    
    position: fixed;
    z-index: 900;
    background: linear-gradient(45deg, rgba(140,26,255,1) 30%, rgba(152,26,255,0.9587185215883228) 71%);
    top: ${props => props.isOpen ? '15vh' : '-20vh'};

    /* width: 35%; */
    width: ${props => props.isOpen ? '36%' : '0px'};
    padding: ${props => props.isOpen ? '4rem' : '0px'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 12vh auto 0 auto;
    /* margin-right: 5px; */
    border-radius: 30px; 
    color: #fafafa;
    opacity: ${props => props.isOpen ? '1' : '0'};
    
    transition:
       opacity 50ms ease-in-out,
       top 400ms ease-in-out 50ms;
       /* width 800ms ease-in; */
`;