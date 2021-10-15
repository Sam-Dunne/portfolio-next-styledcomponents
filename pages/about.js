import Head from "next/head";
import styled from 'styled-components';
import AboutContent from "../components/AboutContent";
import { Container, LinkGrid } from "../globalstyle";
import InPageLink from "../components/InPageLink";



export default function About() {
  return (
    <>
      <Head>
        <title>About</title>

      </Head>
      <Container>
        <AboutContent />
        <LinkGrid>
          <InPageLink href='/projects' children='Projects'></InPageLink>
          <InPageLink href='/cv' children='CV'></InPageLink>
          <InPageLink href='/contact' children='Contact'></InPageLink>
          <InPageLink href='/' children='Home'></InPageLink>
        </LinkGrid>
      </Container>


    </>
  );
}
