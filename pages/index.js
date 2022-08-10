import { useEffect, useRef, useState } from "react";
import {projectsData} from '../projectsData'
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import styled from 'styled-components';
import { keyframes } from 'styled-components'
import { Container, HeroH1, LinkGrid, H2, TopSection, MidPageSection } from "../globalstyle";
import { device } from "../device";
import InPageLink from "../components/InPageLink/InPageLink";
import { BsChevronDown, BsChevronDoubleUp } from 'react-icons/bs'
import ProjectsList from '../components/ProjectsList/ProjectsList'
import ContactEmail from "../components/ContactEmail/ContactEmail";
import DownloadPDFLink from "../components/DownloadPDFLink/DownloadPDFLink";

// const LandingWrapper = styled.main`
//     position: relative;
//     padding: 2em 2em;

//     @media ${device.tablet} {
//         padding: 3em 3em;
//         margin-bottom: 130px;
//     }

//     @media ${device.laptopL} {
//        margin-bottom: 80px;

//     }
//     `;

const Header = styled.h1`
  color: blue;
`;

const Headshot = styled.img`
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  filter: drop-shadow(3px 6px 4px #7a797a);

  @media ${device.tablet} {
      margin: 1em auto 1.2em auto;
      width: 200px;
      height: 200px;
    }
    @media ${device.laptopL} {
      width: 200px;
      height: 200px;
    }
`;

const bounceAnim = keyframes`
    
      0% {transform: scale(1.0);}
      50% {transform: scale(1.2);}
      100% {transform: scale(1.0);};
    }
`
const DblChevWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: 20px;
    height: fit-content;
`

const DoubleChevBtn = styled.button`
    /* position: absolute; */
    padding: 1px;
    bottom: 0;
    display: block;
    width: fit-content;
    height: fit-content;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const DblDownChev = styled(BsChevronDown)`
    font-size: 4em;
    color: #6600CC;
    animation-name: ${bounceAnim};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
`
const DblUpChev = styled(BsChevronDoubleUp)`
    font-size: 4em;
    color: #6600CC;
    animation-name: ${bounceAnim};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
`

const TipTop = styled.div`
    position: absolute;
    top: -10vh;
`;



export default function Home() {
  console.log(projectsData)
  // const emailContactRef = useRef(null)
  const { ref: emailContactRef, inView: emailContactVisible } = useInView();
  // const [emailContactVisible, setEmailContactVisible] = useState();

  const scrollTop = useRef()
  const scrollProjectsRef = useRef()
  const scrollContactRef = useRef(null);
  // console.log(emailContactVisible)

  const handleScrollProjects = () => {
    scrollProjectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollContact = () => {
    scrollContactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollTop = () => {
    scrollTop.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // useEffect(() => {
  //   fetch('https://recipe-registry.herokuapp.com', { mode: 'no-cors' })
  //   fetch('https://blooming-wave-03926.herokuapp.com/', { mode: 'no-cors' })
  //   fetch('https://learning-redux.herokuapp.com/', { mode: 'no-cors' })
  // }, [])

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

        <TopSection dark>
          <TipTop ref={scrollTop}></TipTop>
          <Headshot src="/sd_headshot_350.png" alt="Resume" width={350} height={350} objectFit="cover" layout='responsive' priority={true}></Headshot>
          <H2>
            A developer seeking opportunities to learn and grow in a professional environment.
          </H2>
          <H2>
            Thanks for visiting this site!
          </H2>
          <DownloadPDFLink></DownloadPDFLink>
          <DblChevWrapper>
            <DoubleChevBtn onClick={handleScrollProjects}>
              <DblDownChev ></DblDownChev>
            </DoubleChevBtn>
          </DblChevWrapper>
        </TopSection>

        <MidPageSection ref={scrollProjectsRef}>
          <ProjectsList data={projectsData}></ProjectsList>
          <DblChevWrapper>
            <DoubleChevBtn onClick={handleScrollContact}>
              <DblDownChev ></DblDownChev>
            </DoubleChevBtn>
          </DblChevWrapper>
        </MidPageSection>

        <TopSection dark last ref={scrollContactRef}>
          {emailContactVisible
            ?
            <ContactEmail ref={emailContactRef} show="isVisible"></ContactEmail>
            :
            <ContactEmail ref={emailContactRef} ></ContactEmail>
          }
          <DblChevWrapper>
            <DoubleChevBtn onClick={handleScrollTop}>
              <DblUpChev></DblUpChev>
            </DoubleChevBtn>
          </DblChevWrapper>
        </TopSection>

      </Container>

      {/* <Container dark ref={scrollProjectsRef}>
        <DblChevWrapper>
          <DblDownChev onClick={handleScrollContact}></DblDownChev>
        </DblChevWrapper> */}

      {/* <ProjectsList></ProjectsList> */}
      {/* {linksVisible ?
          <LinkGrid show ref={myRef}>
          <InPageLink href='/projects' >Projects</InPageLink>
            <InPageLink href='/contact' >Contact</InPageLink>
            <InPageLink href='/cv' >CV</InPageLink>
            </LinkGrid>
            :
            <LinkGrid ref={myRef}>
            <InPageLink href='/projects' >Project</InPageLink>
            <InPageLink href='/contact' >Contact</InPageLink>
            <InPageLink href='/cv' >CV</InPageLink>
            </LinkGrid>
          } */}
      {/* </Container>
      <Container last ref={scrollContactRef}>
        <ContactEmail ref={myRef}></ContactEmail>
      </Container> */}

    </>
  );
}