import styled from 'styled-components';
import {device} from '../../device';
import {SiHtml5, SiCss3, SiReact, SiRedux, SiTailwindcss, SiBootstrap, SiGit, SiJavascript, SiStyledComponents, SiNextDotJs} from 'react-icons/si'
// import {TbBrandNextjs} from 'react-icons/tb'
const fontSize = {
    mobile: '2.1em',
    tablet: '4em',
    laptopL: '3.2em'
};

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
    color: #8c1aff;
    font-size: ${fontSize.mobile};
    margin: 0 auto;
    filter: drop-shadow(4px 3px 3px #9589a1);



    @media ${device.tablet} {
    font-size: ${fontSize.tablet};    
    }

    @media ${device.laptopL} {
    font-size: ${fontSize.laptopL};
    }
`;

export const IconCSS = styled(SiCss3)`
    color: #8c1aff;
    filter: drop-shadow(4px 3px 4px #9589a1);

    font-size: ${fontSize.mobile};
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: ${fontSize.tablet};    
    }

    @media ${device.laptopL} {
    font-size: ${fontSize.laptopL};
    }
`;

export const IconREACT = styled(SiReact)`
    color: #8c1aff;
    filter: drop-shadow(4px 3px 4px #9589a1);

    font-size: ${fontSize.mobile};
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: ${fontSize.tablet};    
    }

    @media ${device.laptopL} {
    font-size: ${fontSize.laptopL};
    }
`;

export const IconREDUX = styled(SiRedux)`
    color: #8c1aff;
    filter: drop-shadow(4px 3px 4px #9589a1);

    font-size: ${fontSize.mobile};
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: ${fontSize.tablet};    
    }

    @media ${device.laptopL} {
    font-size: ${fontSize.laptopL};
    }
`;

export const IconTAILWIND = styled(SiTailwindcss)`
    color: #8c1aff;
    filter: drop-shadow(4px 3px 4px #9589a1);

    font-size: ${fontSize.mobile};
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: ${fontSize.tablet};    
    }

    @media ${device.laptopL} {
    font-size: ${fontSize.laptopL};
    }
`;

export const IconBOOTSTRAP = styled(SiBootstrap)`
    color: #8c1aff;
    filter: drop-shadow(4px 3px 4px #9589a1);

    font-size: ${fontSize.mobile};
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: ${fontSize.tablet};    
    }

    @media ${device.laptopL} {
    font-size: ${fontSize.laptopL};
    }
`;

export const IconGIT = styled(SiGit)`
    color: #8c1aff;
    filter: drop-shadow(4px 3px 4px #9589a1);

    font-size: ${fontSize.mobile};
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: ${fontSize.tablet};    
    }

    @media ${device.laptopL} {
    font-size: ${fontSize.laptopL};
    }
`;

export const IconJS = styled(SiJavascript)`
    color: #8c1aff;
    filter: drop-shadow(4px 3px 4px #9589a1);

    font-size: ${fontSize.mobile};
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: ${fontSize.tablet};    
    }

    @media ${device.laptopL} {
    font-size: ${fontSize.laptopL};
    }
`;

export const IconSTYLED = styled(SiStyledComponents)`
    color: #8c1aff;
    filter: drop-shadow(4px 3px 4px #9589a1);

    font-size: ${fontSize.mobile};
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: ${fontSize.tablet};    
    }

    @media ${device.laptopL} {
    font-size: ${fontSize.laptopL};
    }
`;

export const IconNEXT = styled(SiNextDotJs)`
    color: #8c1aff;
    filter: drop-shadow(4px 3px 4px #9589a1);

    font-size: ${fontSize.mobile};
    margin: 0 auto;

    @media ${device.tablet} {
    font-size: ${fontSize.tablet};    
    }

    @media ${device.laptopL} {
    font-size: ${fontSize.laptopL};
    }
`;

