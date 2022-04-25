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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Container>
        <Section>
          <HeroH1 centered>Hi, I&apos;m Sam!
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
          <InPageLink href='/projects' >Projects</InPageLink>
          <InPageLink href='/contact' Cont >Contact</InPageLink>
          <InPageLink href='/about' >About</InPageLink>
          <InPageLink href='/cv' > CV</InPageLink>
        </LinkGrid>
      </Container>

    </>
  );
}