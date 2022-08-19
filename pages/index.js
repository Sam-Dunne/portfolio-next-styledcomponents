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
import StackIcons from "../components/StackIcons/StackIcons";
import AboutMe from "../components/AboutMe/AboutMe";
// import {SiHtml5, SiCss3, SiReact, SiRedux, SiTailwindcss, SiBootstrap, SiGit, SiGithub} from 'react-icons/si'
// import {TbBrandNextjs} from 'react-icons/tb'

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
  width: 140px;
  height: 140px;
  filter: drop-shadow(3px 6px 4px #7a797a);

  @media ${device.tablet} {
      margin: 1em auto 1.2em auto;
      width: 200px;
      height: 200px;
    }
    @media ${device.laptopL} {
      /* width: 250px;
      height: 250px; */
    }
`;

const ArticleWrapper = styled.article`

  @media ${device.tablet} {
     padding: 2em 6em 0 6em;
    }
    @media ${device.laptopL} {
    padding: 0;     
    width: 540px;
    margin: 0 auto;
    }
`;

const bounceAnim = keyframes`
    
      0% {transform: scale(1.0);}
      50% {transform: scale(1.2);}
      100% {transform: scale(1.0);};
    }
`
const ChevronContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: 12px;
    height: fit-content;
`
const ChevronButtonWrapper = styled.button`
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

const DownChevron = styled(BsChevronDown)`
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
  const { ref: aboutMeRef, inView:aboutMeVisible } = useInView();
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
          <StackIcons />
          <DownloadPDFLink></DownloadPDFLink>
          <H2>Thanks for visiting!</H2>
          <ChevronContainer>
            <ChevronButtonWrapper onClick={handleScrollAbout}>
              <DownChevron />
            </ChevronButtonWrapper>
          </ChevronContainer>
        </TopSection>

        <MidPageSection ref={scrollAboutRef}>
          {aboutMeVisible ?
          <AboutMe ref={aboutMeRef} show="isVisible"/>
          
          :
          <AboutMe ref={aboutMeRef}/>
        
        }
          <ChevronContainer>
            <ChevronButtonWrapper onClick={handleScrollProjects}>
              <DownChevron />
            </ChevronButtonWrapper>
          </ChevronContainer>
        </MidPageSection>

        <MidPageSection dark ref={scrollProjectsRef}>
          <ProjectsList data={props.data}></ProjectsList>
          <ChevronContainer>
            <ChevronButtonWrapper onClick={handleScrollContact}>
              <DownChevron />
            </ChevronButtonWrapper>
          </ChevronContainer>
        </MidPageSection>

        <TopSection last ref={scrollContactRef}>
          {emailContactVisible
            ?
            <ContactEmail ref={emailContactRef} show="isVisible"></ContactEmail>
            :
            <ContactEmail ref={emailContactRef} ></ContactEmail>
          }
          <ChevronContainer>
            <ChevronButtonWrapper onClick={handleScrollTop}>
              <DblUpChev></DblUpChev>
            </ChevronButtonWrapper>
          </ChevronContainer>
        </TopSection>

      </Container>
    </>
  );
}