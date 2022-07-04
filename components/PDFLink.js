import styled from 'styled-components';
import { device } from '../device';

const PDFLinkWrapper = styled.div`
    text-align: center;
    margin: 1em auto 2em auto;

`;

const DownloadPDF = styled.a`
    /* margin: 0 auto; */
    font-family: 'Nunito', 'Source Sans Pro',sans-serif;
    /* color: #6600CC; */
    color: ${({ textWhite }) => (textWhite ? '#fafafa' : '#6600CC')};
    background-color: #fafafa;
    padding: 0.8rem;
    border-radius: 15px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.35);
    text-decoration: none;
    font-size: 0.6em;
    line-height: 1.2;
    transition:
     background-color 200ms ease-in,
     transform 200ms ease-in;

     &:hover {
    transform: scale(1.06);
    background-color: #26AD18;
    }

    &:active {
    transform: scale(0.8);
    background-color: green;
    }

    @media ${device.tablet} {
        font-size: 1em;
    }
    @media ${device.laptop} {
        font-size: 1.2em;
    }
`;

// background-color: #8c1aff;
// text-align: center;
// padding: 1rem;
// border-radius: 15px;
// box-shadow: 3px 3px px 0px rgba(0,0,0,0.75);
// text-decoration: none;
// font-weight: 600;
// font-size: 1rem;
// color: #fafafa;
// transition:
//     background-color 200ms ease-in,
//     transform 200ms ease-in;

// @media ${device.laptopL} {
//     font-size: 1rem;
// }

// &:hover {
//     transform: scale(1.06);
//     background-color: #26AD18;
// }

// &:active {
//     transform: scale(0.8);
//     background-color: green;
// }

const PDFLink = ({ }) => {
    return (
        <PDFLinkWrapper>
            <DownloadPDF href="/2022-07-04 SD Resume.pdf" download="Sam Dunne Resume">Download Resume</DownloadPDF>
        </PDFLinkWrapper>
    )
}

export default PDFLink