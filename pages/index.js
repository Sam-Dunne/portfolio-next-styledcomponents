import Head from "next/head";
import styled from 'styled-components';
import { Container, Section, HeroH1, ImageWrapper, SCImage } from "../globalstyle";


const Header = styled.h1`
  color: blue;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi, I'm Sam</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      <Container>
        <Section>
          <HeroH1>Hi I'm Sam!
            <br />
            Thank you for vistiting my site.
          </HeroH1>
          <ImageWrapper>
            <SCImage src="/samDataObject.png" alt="Picture of upside down dog" width={400} height={300} objectFit='cover' priority={true} />
          </ImageWrapper>
        </Section>
      </Container>

    </>
  );
}