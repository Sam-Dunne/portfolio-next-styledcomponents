import styled from 'styled-components';
import Image from 'next/image';
import { device } from '../../device';


export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* position: absolute;
    bottom: 0;
    left:0; */
    width: 100%;
    z-index: 999;
    background: linear-gradient(45deg, rgba(140,26,255,1) 30%, rgba(152,26,255,0.9587185215883228) 71%);
   height: 10vh;
    color: #fafafa;
    /* margin-top: auto; */
    @media ${device.laptopL} {
    }
    `;

export const FooterImagesContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const FooterImageWrapper = styled.div`
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

export const FooterImage = styled(Image)`
`;

export const FooterCopy = styled.p`
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