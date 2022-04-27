import Head from "next/head";
import Image from 'next/image';
import styled from 'styled-components';
import InPageLink from "../components/InPageLink";
import { device } from '../device';
import { HeaderTitle, LinkGrid } from "../globalstyle";


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
    margin-bottom: 100px;
    
    @media ${device.tablet} {
        width: 80vw;
    }
    @media ${device.laptop} {
        width: 40vw;
    }
    `;

const CVImage = styled(Image)`

`;

export default function CV() {
    return (
        <>
            <Head>
                <title>CV</title>
            </Head>
            <HeaderTitle>CV</HeaderTitle>
            <CVContainer>
                <CVImageWrapper>
                    <CVImage src="/202203WebDevResume.png" alt="Resume" width={676} height={876} objectFit="cover" layout='responsive' priority={true} />
                </CVImageWrapper>
            </CVContainer>
            <LinkGrid>
                {/* <InPageLink href='/about' >About</InPageLink> */}
                <InPageLink href='/projects' >Projects</InPageLink>
                <InPageLink href='/contact' >Contact</InPageLink>
                <InPageLink href='/' >Home</InPageLink>
            </LinkGrid>


        </>
    );
}