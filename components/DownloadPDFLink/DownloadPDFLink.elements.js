import styled from 'styled-components';
import { device } from '../../device';

export const PDFLinkWrapper = styled.div`
    text-align: center;
    margin: 1em auto 2em auto;

`;

export const DownloadPDF = styled.a`
    font-family: 'Nunito', 'Source Sans Pro',sans-serif;
    color: ${({ textWhite }) => (textWhite ? '#fafafa' : '#6600CC')};
    border: 3px solid #6600CC;
    background-color: #fafafa;
    padding: 0.4rem;
    border-radius: 15px;
    box-shadow: 2px 2px 4px 1px rgba(0,0,0,0.35);
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