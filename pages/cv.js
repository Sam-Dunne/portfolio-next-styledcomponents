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
        width: 60vw;
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
                    <CVImage src="/resume2021-10-12.png" alt="Picture of upside down dog" width={647} height={687} objectFit="cover" layout='responsive' priority={true} />
                </CVImageWrapper>
            </CVContainer>
            <LinkGrid>
                <InPageLink href='/about' children='About'></InPageLink>
                <InPageLink href='/projects' children='Projects'></InPageLink>
                <InPageLink href='/contact' children='Contact'></InPageLink>
                <InPageLink href='/' children='Home'></InPageLink>
            </LinkGrid>


        </>
    );
}