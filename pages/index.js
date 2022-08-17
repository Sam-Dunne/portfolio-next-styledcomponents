import { useEffect, useRef, useState } from "react";
import { projectsData } from '../projectsData'
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import styled from 'styled-components';
import { keyframes } from 'styled-components'
import { Container, HeroH1, H2, TopSection, MidPageSection } from "../globalstyle";
import { device } from "../device";
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
  margin: 0 auto 1em auto;
  width: 200px;
  height: 200px;
  filter: drop-shadow(3px 6px 4px #7a797a);

  @media ${device.tablet} {
      margin: 1em auto 1.2em auto;
      width: 200px;
      height: 200px;
    }
    @media ${device.laptopL} {
      width: 250px;
      height: 250px;
    }
`;

const ArticleWrapper = styled.article`

  @media ${device.tablet} {
     padding: 2em 6em 0 6em;
    }
    @media ${device.laptopL} {
    padding: 1em 28em 0 28em;     
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

export function getStaticProps() {
  return {
    props: {
      data: projectsData
    }
  }
}


export default function Home(props) {
  // console.log(projectsData)
  // const emailContactRef = useRef(null)
  const { ref: emailContactRef, inView: emailContactVisible } = useInView();
  // const [emailContactVisible, setEmailContactVisible] = useState();

  const scrollTop = useRef();
  const scrollAboutRef = useRef();
  const scrollProjectsRef = useRef();
  const scrollContactRef = useRef(null);
  // console.log(emailContactVisible)

  const handleScrollAbout = () => {
    scrollAboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
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
          <HeroH1 centered>Front End Developer</HeroH1>
          <H2>
            React  |  JS  |  TS  |  Redux
          </H2>
          <H2>
            Thanks for visiting!
          </H2>
          <DownloadPDFLink></DownloadPDFLink>
          <DblChevWrapper>
            <DoubleChevBtn onClick={handleScrollAbout}>
              <DblDownChev ></DblDownChev>
            </DoubleChevBtn>
          </DblChevWrapper>
        </TopSection>

        <MidPageSection ref={scrollAboutRef}>
          <HeroH1 centered>Dev Journey</HeroH1>
          <ArticleWrapper>
            <H2>Pre-Dev Background</H2>
            <p>Prior to Covid, I worked as a Sound Engineer for concerts, events, churches. In addition to &quot;day of show&quot; duties, I also provided technical training, consultation, system design/installation, and planning/logistics.</p>
          </ArticleWrapper>
          <ArticleWrapper>
            <H2>Unplanned Transition</H2>
            <p>Covid destroyed event production for ~18 months. In the midst of that hardship, I elected to define a new life path and attended the <strong>Covalence Full Stack Bootcamp</strong>. There I was challenged in fulfilling ways and discovered my passion for Front End Development.</p>
          </ArticleWrapper>
          <ArticleWrapper>
            <H2>Stint at CAVU</H2>
            <p>Here I worked as an e-Learning Developer. During my brief time there, I decreased course production time by 4x, learned much about the creative development process, and earned <strong>Scrum Master and Product Owner</strong> certifications. I left by choice, on good terms, to refocus on my goal of becoming a Front End Developer.</p>
          </ArticleWrapper>
          <DblChevWrapper>
            <DoubleChevBtn onClick={handleScrollProjects}>
              <DblDownChev ></DblDownChev>
            </DoubleChevBtn>
          </DblChevWrapper>
        </MidPageSection>

        <MidPageSection ref={scrollProjectsRef}>
          <ProjectsList data={props.data}></ProjectsList>
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