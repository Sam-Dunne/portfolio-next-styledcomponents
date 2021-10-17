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
          <InPageLink href='/projects' >Projects</InPageLink>
          <InPageLink href='/cv' >CV</InPageLink>
          <InPageLink href='/contact' >Contact</InPageLink>
          <InPageLink href='/' >Home</InPageLink>
        </LinkGrid>
      </Container>


    </>
  );
}
