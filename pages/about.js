import Head from "next/head";
import styled from 'styled-components';
import AboutContent from "../components/AboutContent";

const Header = styled.h1`
  color: blue;
`

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
     
      </Head>
     
      <AboutContent />

    </>
  );
}
