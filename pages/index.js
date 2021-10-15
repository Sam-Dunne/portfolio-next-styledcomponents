import { useEffect } from "react";
import Head from "next/head";
import styled from 'styled-components';
import { Container, Section, HeroH1, ImageWrapper, SCImage, LinkGrid } from "../globalstyle";
import InPageLink from "../components/InPageLink";

const Header = styled.h1`
  color: blue;
`;

export default function Home() {

  useEffect(() => {
    fetch('https://recipe-registry.herokuapp.com', { mode: 'no-cors' })
    fetch('https://blooming-wave-03926.herokuapp.com/', { mode: 'no-cors' })
  }, [])

  return (
    <>
      <Head>
        <title>Hi, I&apos;m Sam</title>

      </Head>
      <Container>
        <Section>
          <HeroH1>Hi, I&apos;m Sam!
            <br />
            Thank you for visiting my site.
            <br />
            <strong>
              #OPENTOWORK
            </strong>

          </HeroH1>
          <ImageWrapper>
            <SCImage src="/samDataObject.png" alt="Picture of upside down dog" width={400} height={300} objectFit='cover' priority={true} />
          </ImageWrapper>
        </Section>
        <LinkGrid>
          <InPageLink href='/about' children='About'></InPageLink>
          <InPageLink href='/projects' children='Projects'></InPageLink>
          <InPageLink href='/cv' children='CV'></InPageLink>
          <InPageLink href='/contact' children='Contact'></InPageLink>
        </LinkGrid>
      </Container>

    </>
  );
}