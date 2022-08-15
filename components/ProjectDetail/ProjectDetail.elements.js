import Image from 'next/image';
import styled from 'styled-components';
import { device } from '../../device';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'


export const ProjDetailSection = styled.section`
   z-index: 1;
    width: 100%;
    min-height: ${props => props.last ? '80vh' : "90vh"};
    position: relative;
    padding: 1rem 2rem;
    background-color: ${props => props.dark ? '#e9e6ed' : '#fafafa'};
    
    @media ${device.tablet} {
        padding: 2rem 6rem;
    }
    
    @media ${device.laptopL} {
        padding: 3rem 18rem;
    
    }
`

export const GoTo = styled.h3`
    text-align: center;
    background: rgb(140,26,255);
    color: white;
    padding: 1vw;
    border-radius: 10px;
    margin-top: 8px;
    letter-spacing: 1px;
`;

export const Middle = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;

  &:hover {
    opacity: 1;
    }
  &:focus {
    opacity: 1;
    }
`

export const ProjectsImage = styled(Image)`
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
    border-radius: 10px; 
    
    &:hover {
        /* opacity: 0.3; */
    }
    &:focus {
        /* opacity: 0.3; */
    }
    @media ${device.tablet} {
        
    }

    @media ${device.laptopL} {
        /* display: inline; */
    }
`;

export const ProjectsTitle = styled.h3`
    color: #fafafa;
    width: 90%;
    margin: 20px auto 0 auto;
    background-color: black;
    color: white;
    font-size: 16px;
    padding: 24px 32px;
    z-index: 999;
    
    @media ${device.tablet} {
    }

    @media ${device.laptopL} {
    }
`;

export const CardOverlayCopy = styled.p`
    color: #fafafa;
    width: 90%;
    opacity: 1;
    background-color: #ffffff;
    color: black;
    font-size: 13px;
    padding: 26px 26px;
    margin: 0 auto;
    z-index: 999;
    height: 60%;
    
    @media ${device.tablet} {
    }

    @media ${device.laptopL} {
    }
`;

export const ProjectsSection = styled.section`
    position: relative;
    padding: 0px 10%;
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-wrap: wrap;
    
    @media ${device.tablet} {
        padding: 0 10vw;
    }

    @media ${device.laptopL} {
        padding: 0 15vw;
    }
    `;

export const ProjectsCardWrapper = styled.button`
    position: relative;
    border: none;
    width: 40%;
    margin: 10px auto 10px auto;
    box-shadow: 4px 7px 8px -3px rgba(0,0,0,0.45);
-webkit-box-shadow: 4px 7px 8px -3px rgba(0,0,0,0.45);
-moz-box-shadow: 4px 7px 8px -3px rgba(0,0,0,0.45);
    transition:
    transform 200ms ease-in;

    &:focus {
        transform: scale(1.04);
    }   
    &:hover {
        transform: scale(1.04);
    }  
   
    @media ${device.tablet} {        
        width: 30%;
        margin: 2vw 2vw;
    }

    @media ${device.laptopL} {
        width: 10%;
    }
`;

export const ProjectsCard = styled.div`
    position: relative;
    width: 40%;

    /* background: rgb(140,26,255);
    background: linear-gradient(45deg, rgba(140,26,255,1) 30%, rgba(152,26,255,0.9587185215883228) 71%); */
    padding: 0px 0px;
    border-radius: 15px;

    &:hover {
        /* opacity: 0.6; */
    }
    &:focus {
        /* opacity: 0.6; */
    }

    @media ${device.tablet} {
        width: 30%;
    }

    @media ${device.laptopL} {
        width: 10%;
    }
`;

export const DynNavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 2em 0;
    
    @media ${device.tablet} {
    }

    @media ${device.laptopL} {
      
    }
`;

export const DynNavButton = styled.button`          
    padding: 0.5em 0.5em;
    border-radius: 10px;
    color: #fafafa;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #6600CC;
    transition:
    transform 200ms ease-in;

    &:hover {
        transform: scale(1.04);
        background-color: green;

    }
    &:focus {
        transform: scale(1.04);
        background-color: green;
    }
    &:disabled {
        color: #ccc;
        background-color: #fafafa;
        transform: none;
        cursor: default;
    }

    @media ${device.tablet} {
    }

    @media ${device.laptopL} {
      
    }
`;

export const NextIcon = styled(MdNavigateNext)` 
    font-size: 1.5em;
`
export const PrevIcon = styled(MdNavigateBefore)` 
    font-size: 1.5em;
`