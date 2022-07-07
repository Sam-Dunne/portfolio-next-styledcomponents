import Head from "next/head";
import Image from 'next/image';
import styled from 'styled-components';
import InPageLink from "../components/InPageLink/InPageLink";
import { device } from '../device';
import { HeaderTitle, LinkGrid } from "../globalstyle";
import DownloadPDFLink from '../components/DownloadPDFLink/DownloadPDFLink';


const Header = styled.h1`
  color: blue;
`
const CVContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const CVImageWrapper = styled.div`
    background: #8c1aff;
    padding: 10px;
    border-radius: 12px;
    width: 95vw;
    margin-bottom: 26px;
    
    @media ${device.tablet} {
        width: 80vw;
    }
    @media ${device.laptop} {
        width: 40vw;
    }
    `;

const CVImage = styled(Image)`

`;

const PDFLinkWrapper = styled.div`
    text-align: center;
    margin: 1em auto 1em auto;

`;

const DownloadPDF = styled.a`
    font-family: 'Nunito', 'Source Sans Pro',sans-serif;
    color: #6600CC;
    font-size: 0.6em;
    line-height: 1.2;
    @media ${device.tablet} {
        font-size: 1em;
    }
    @media ${device.laptop} {
        font-size: 1.2em;
    }
`;

export default function CV() {
    return (
        <>
            <Head>
                <title>CV</title>
            </Head>
            <HeaderTitle>CV</HeaderTitle>
            
            <DownloadPDFLink></DownloadPDFLink>
            <CVContainer>
                <CVImageWrapper>
                    <CVImage src="/20220702_Resume-538x690.jpg" alt="Resume" width={538} height={690} objectFit="cover" layout='responsive' priority={true} />
                </CVImageWrapper>
            </CVContainer>
            <LinkGrid>
                <InPageLink href='/projects' >Projects</InPageLink>
                <InPageLink href='/contact' >Contact</InPageLink>
                <InPageLink href='/' >Home</InPageLink>
            </LinkGrid>


        </>
    );
}