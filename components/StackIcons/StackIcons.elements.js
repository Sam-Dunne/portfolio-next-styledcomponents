import styled from 'styled-components';
import {device} from '../../device';
import {SiHtml5, SiCss3, SiReact, SiRedux, SiTailwindcss, SiBootstrap, SiGit, SiJavascript, SiStyledComponents, SiNextDotJs} from 'react-icons/si'
// import {TbBrandNextjs} from 'react-icons/tb'

export const IconGrid = styled.div`
    display: grid;
    grid-gap: 3vh 3vw;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin: 2em auto;
    width: fit-content;

    @media ${device.tablet} {
    }

    @media ${device.laptopL} {
    }
`;

export const IconHTML = styled(SiHtml5)`
    color: #6600CC;
    font-size: 2.4em;
    margin: 0 auto;


    @media ${device.tablet} {
    font-size: 4em;    
    }

    @media ${device.laptopL} {
    font-size: 4.5em;
    }
`;

export const IconCSS = styled(SiCss3)`
    color: #6600CC;
    font-size: 2.4em;
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: 4em;    
    }

    @media ${device.laptopL} {
    font-size: 4.5em;
    }
`;

export const IconREACT = styled(SiReact)`
    color: #6600CC;
    font-size: 2.4em;
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: 4em;    
    }

    @media ${device.laptopL} {
    font-size: 4.5em;
    }
`;

export const IconREDUX = styled(SiRedux)`
    color: #6600CC;
    font-size: 2.4em;
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: 4em;    
    }

    @media ${device.laptopL} {
    font-size: 4.5em;
    }
`;

export const IconTAILWIND = styled(SiTailwindcss)`
    color: #6600CC;
    font-size: 2.4em;
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: 4em;    
    }

    @media ${device.laptopL} {
    font-size: 4.5em;
    }
`;

export const IconBOOTSTRAP = styled(SiBootstrap)`
    color: #6600CC;
    font-size: 2.4em;
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: 4em;    
    }

    @media ${device.laptopL} {
    font-size: 4.5em;
    }
`;

export const IconGIT = styled(SiGit)`
    color: #6600CC;
    font-size: 2.4em;
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: 4em;    
    }

    @media ${device.laptopL} {
    font-size: 4.5em;
    }
`;

export const IconJS = styled(SiJavascript)`
    color: #6600CC;
    font-size: 2.4em;
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: 4em;    
    }

    @media ${device.laptopL} {
    font-size: 4.5em;
    }
`;

export const IconSTYLED = styled(SiStyledComponents)`
    color: #6600CC;
    font-size: 2.4em;
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: 4em;    
    }

    @media ${device.laptopL} {
    font-size: 4.5em;
    }
`;
export const IconNEXT = styled(SiNextDotJs)`
    color: #6600CC;
    font-size: 2.4em;
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: 4em;    
    }

    @media ${device.laptopL} {
    font-size: 4.5em;
    }
`;

