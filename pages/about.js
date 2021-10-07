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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
     
      <AboutContent />

    </>
  );
}
