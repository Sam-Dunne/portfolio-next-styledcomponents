import { useEffect } from "react";
import Head from "next/head";
import styled from 'styled-components';
import { Container, Section, HeroH1, ImageWrapper, SCImage, LinkGrid, H2 } from "../globalstyle";
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
        {/* <LinkGrid>
          <InPageLink href='/projects' >Projects</InPageLink>
          <InPageLink href='/cv' > CV</InPageLink>
          <InPageLink href='/contact' Cont >Contact</InPageLink>
        </LinkGrid> */}

        <Section>

          <HeroH1 centered>
            Hi, I&apos;m Sam Dunne
          </HeroH1>
          <H2>
            A developer seeking opportunities to learn and grow in a professional environment.
          </H2>
          <H2>
            Thanks for visiting the site!
          </H2>
          <H2>
            I&apos;'d love to see some production code.
          </H2>
          <H2>
            I&apos;'d love to learn how to build well, not just get stuff to work.
          </H2>
          <H2>
            I&apos;'d love to contribute to a team, and not just code in a vaccuum.
          </H2>
          <H2>
            I&apos;'d love the chance to interview. Even if I fail, I will learn something along the way. 
          </H2>


          {/* <ImageWrapper>
            <SCImage src="/samDataObject.png" alt="Picture of upside down dog" width={400} height={300} objectFit='cover' priority={true} />
          </ImageWrapper> */}
        </Section>
      </Container>

    </>
  );
}