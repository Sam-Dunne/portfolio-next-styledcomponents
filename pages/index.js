import Head from "next/head";
import styled from 'styled-components';
import { Container, Section, HeroH1, ImageWrapper, SCImage } from "../globalstyle";

const Header = styled.h1`
  color: blue;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi, I'&apos;m Sam</title>
        
      </Head>
      <Container>
        <Section>
          <HeroH1>Hi I'&apos;m Sam!
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