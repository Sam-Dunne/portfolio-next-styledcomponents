import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import { device } from '../device';
import { Container, HeaderTitle, LinkGrid } from '../globalstyle';
import InPageLink from '../components/InPageLink/InPageLink';
import styled from 'styled-components';

const ProjectsTitle = styled.h3`
    color: #fafafa;
    /* width: 90%; */
    /* text-align: center;
    margin: 14px auto 10px auto; */
    width: 90%;

    margin: 20px auto 0 auto;
    background-color: black;
  color: white;
  font-size: 16px;
  padding: 24px 32px;
  z-index: 999;
    
    @media ${device.tablet} {
        /* font-size: 1rem;     */
    }

    @media ${device.laptopL} {
       
    }
`;

const CardOverlayCopy = styled.p`
    color: #fafafa;
    width: 90%;
    opacity: 1;
    /* text-align: center;
    margin: 14px auto 10px auto; */

    background-color: #ffffff;
  color: black;
  font-size: 16px;
  padding: 26px 26px;
  margin: 0 auto;
  z-index: 999;
  height: 60%;
    
    @media ${device.tablet} {
        /* font-size: 1rem;     */
    }

    @media ${device.laptopL} {
       
    }
`;

const ProjectsSection = styled.section`
    /* background-color: blue; */
    position: relative;
    padding: 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-wrap: wrap;
    
    
    /* margin: 0 auto 0 auto; */
    
    @media ${device.tablet} {
        /* display: flex;
        justify-content: center;
        align-items: center;  
        */
        padding: 0 10vw;
    }

    @media ${device.laptopL} {
        /* width: 1000px;
        height: 55vh; */
        padding: 0 15vw;
    }
    `;

const ProjectsCardWrapper = styled.div`
    position: relative;
    width: 70%;
    margin: 10px auto 30px auto;

    
    @media ${device.tablet} {        
        width: 35%;
        margin: 2vw 2vw;
    }

    @media ${device.laptopL} {
        width: 20%;

        /* display: flex;
        justify-content: space-around;
        align-items: center; */
    }
`;

const ProjectsCard = styled.div`
    position: relative;
    /* width: 70%; */

    background: rgb(140,26,255);
    background: linear-gradient(45deg, rgba(140,26,255,1) 30%, rgba(152,26,255,0.9587185215883228) 71%);
    padding: 0px 0px;
    border-radius: 15px;
    /* margin: 10px auto 30px auto; */
    /* box-shadow: 4px 7px 8px -3px rgba(0,0,0,0.45);
-webkit-box-shadow: 4px 7px 8px -3px rgba(0,0,0,0.45);
-moz-box-shadow: 4px 7px 8px -3px rgba(0,0,0,0.45); */
    /* height: 100%; */
   

    &:hover {
        opacity: 0.6;
    }
    &:focus {
        opacity: 0.6;
    }

    @media ${device.tablet} {
        /* width: 35%; */
    }

    @media ${device.laptopL} {
        /* margin: 0px 50px 20px 50px;
        height: 65%; */
        /* width: 20%; */

    }
`;

const ProjectsCardTextWrapper = styled.div`
    background: #fafafa;
    margin: 14px auto;
    padding: 12px;
    border-radius: 8px;
    

    @media ${device.tablet} {
        margin: auto;
    }

    @media ${device.laptopL} {
        width: 60%;
        margin: 0; 
    }
`;

const ProjectsCardText = styled.h5`
        font-size: 0.7rem;
    @media ${device.tablet} {
        font-size: 1rem;
    }

    @media ${device.laptopL} {
       font-size: 1.2rem;
    }
`;

const ProjectImageContainer = styled.div`  
    
    @media ${device.tablet} {
        margin-bottom: 20px;
    }
    
    @media ${device.laptopL} {
        margin-bottom: 0;

    }
`;

const ProjectImageWrapper = styled.div`
    box-shadow: 8px 8px 8px 0px rgba(0,0,0,0.75);
    transition:
    transform 150ms ease-in;
    width: 100%;
    
    &:hover {
        transform: scale(1.05);
    }
    
    @media ${device.tablet} {
              
    }
    
    @media ${device.laptopL} {
        width: 150px;
    }
    `;

const Middle = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

  &:hover {
    opacity: 1;
    }
  &:focus {
    opacity: 1;
    }
`

const ProjectsImage = styled(Image)`
    opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
    border-radius: 10px; 
    
    &:hover {
        opacity: 0.3;
    }
    &:focus {
        opacity: 0.3;
    }
    @media ${device.tablet} {
        
    }

    @media ${device.laptopL} {
        /* display: inline; */
    }

`;

const FooterImageWrapper2 = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    background: #fafafa;
    padding: 10px;
    border-radius: 12px;
    transition: 
        transform 200ms ease-in;
    margin: 20px auto 0 auto;


    @media ${device.tablet} {
    }

    &:hover {
        transform: scale(1.07)
    }

    `;

const FooterImage2 = styled(Image)`
`;

const Fudge = styled.br`
  @media ${device.laptop} {
      display: none;
  }
`;
const Anchor = styled.a`
    display: block;
    border-radius: 10px; 
    text-decoration: none;

    box-shadow: 4px 7px 8px -3px rgba(0,0,0,0.45);
-webkit-box-shadow: 4px 7px 8px -3px rgba(0,0,0,0.45);
-moz-box-shadow: 4px 7px 8px -3px rgba(0,0,0,0.45);
    transition:
        transform 200ms ease-in;

    &:focus {
        transform: scale(1.04);
        text-decoration: underline white 3px;     
    }   
    &:hover {
        transform: scale(1.04);
        text-decoration: underline white 3px;     

    }   
`;

const GoTo = styled.h3`
    text-align: center;
    background: rgb(140,26,255);
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-top: 8px;
`;

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>

            </Head>
            <Container>
                <HeaderTitle>Projects</HeaderTitle>
                <ProjectsSection>
                    <ProjectsCardWrapper>
                        <ProjectsCard>
                            <Anchor href="">
                                <ProjectsImage src='/rtk.jpg' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
                                <Middle>
                                    <ProjectsTitle>Redux Toolkit</ProjectsTitle>
                                    <CardOverlayCopy>Learned foundational concepts of Redux. Styled with Bootstrap and Sass.
                                    </CardOverlayCopy>
                                </Middle>
                            </Anchor>
                        </ProjectsCard>
                        <Anchor href="https://learning-redux.herokuapp.com/" target="blank">
                            <GoTo>Go to Project</GoTo>
                        </Anchor>
                    </ProjectsCardWrapper>
           
                    <ProjectsCardWrapper>
                        <ProjectsCard>
                            <Anchor href="">
                                <ProjectsImage src='/rtk.jpg' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
                                <Middle>
                                    <ProjectsTitle>Redux Toolkit</ProjectsTitle>
                                    <CardOverlayCopy>Learned foundational concepts of Redux. Styled with Bootstrap and Sass.
                                    </CardOverlayCopy>
                                </Middle>
                            </Anchor>
                        </ProjectsCard>
                        <Anchor href="https://learning-redux.herokuapp.com/" target="blank">
                            <GoTo>Go to Project</GoTo>
                        </Anchor>
                    </ProjectsCardWrapper>
                    <ProjectsCardWrapper>
                        <ProjectsCard>
                            <Anchor href="">
                                <ProjectsImage src='/rtk.jpg' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
                                <Middle>
                                    <ProjectsTitle>Redux Toolkit</ProjectsTitle>
                                    <CardOverlayCopy>Learned foundational concepts of Redux. Styled with Bootstrap and Sass.
                                    </CardOverlayCopy>
                                </Middle>
                            </Anchor>
                        </ProjectsCard>
                        <Anchor href="https://learning-redux.herokuapp.com/" target="blank">
                            <GoTo>Go to Project</GoTo>
                        </Anchor>
                    </ProjectsCardWrapper>
               
                    <ProjectsCardWrapper>
                        <ProjectsCard>
                            <Anchor href="">
                                <ProjectsImage src='/rtk.jpg' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
                                <Middle>
                                    <ProjectsTitle>Redux Toolkit</ProjectsTitle>
                                    <CardOverlayCopy>Learned foundational concepts of Redux. Styled with Bootstrap and Sass.
                                    </CardOverlayCopy>
                                </Middle>
                            </Anchor>
                        </ProjectsCard>
                        <Anchor href="https://learning-redux.herokuapp.com/" target="blank">
                            <GoTo>Go to Project</GoTo>
                        </Anchor>
                    </ProjectsCardWrapper>

                    {/* <ProjectsCardWrapper>
                        <ProjectsCard>
                            <Anchor href="">
                                <ProjectsImage src='/rtk.jpg' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
                                <Middle>
                                    <ProjectsTitle>Redux Toolkit</ProjectsTitle>
                                    <CardOverlayCopy>Learned foundational concepts of Redux. Styled with Bootstrap and Sass.
                                    </CardOverlayCopy>
                                </Middle>
                            </Anchor>
                        </ProjectsCard>
                        <Anchor href="https://learning-redux.herokuapp.com/">
                            <span>Go to Project</span>
                        </Anchor>
                    </ProjectsCardWrapper>
                    <ProjectsCardWrapper>

                        <ProjectsCard>
                            <Anchor href="">
                                <ProjectsImage src='/rtk.jpg' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
                                <Middle>
                                    <ProjectsTitle>Redux Toolkit</ProjectsTitle>
                                    <CardOverlayCopy>Learned foundational concepts of Redux. Styled with Bootstrap and Sass.
                                    </CardOverlayCopy>
                                </Middle>
                            </Anchor>
                        </ProjectsCard>
                        <Anchor href="https://learning-redux.herokuapp.com/">
                            <span>Go to Project</span>
                        </Anchor>
                    </ProjectsCardWrapper> */}
                    {/* <ProjectsCard>
                        <Anchor href="">
                            <ProjectsImage src='/rtk.jpg' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
                            <Middle>
                                <ProjectsTitle>Redux Toolkit</ProjectsTitle>
                                <CardOverlayCopy>Learned foundational concepts of Redux. Styled with Bootstrap and Sass.
                                </CardOverlayCopy>
                            </Middle>
                        </Anchor>
                    </ProjectsCard>
                    <ProjectsCard>
                        <Anchor href="">
                            <ProjectsImage src='/rtk.jpg' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
                            <Middle>
                                <ProjectsTitle>Redux Toolkit</ProjectsTitle>
                                <CardOverlayCopy>Learned foundational concepts of Redux. Styled with Bootstrap and Sass.
                                </CardOverlayCopy>
                            </Middle>
                        </Anchor>
                    </ProjectsCard>
                    <ProjectsCard>
                        <Anchor href="">
                            <ProjectsImage src='/rtk.jpg' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
                            <Middle>
                                <ProjectsTitle>Redux Toolkit</ProjectsTitle>
                                <CardOverlayCopy>Learned foundational concepts of Redux. Styled with Bootstrap and Sass.
                                </CardOverlayCopy>
                            </Middle>
                        </Anchor>
                    </ProjectsCard> */}
                    {/* <ProjectsCard>
                        <Anchor href="https://learning-redux.herokuapp.com/" target='blank'>
                            <ProjectsImage src='/rtk.jpg' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
                            <Middle>
                                <ProjectsTitle>Redux Toolkit</ProjectsTitle>
                                <CardOverlayCopy>Learned foundational concepts of Redux. Styled with Bootstrap and Sass.
                                </CardOverlayCopy>
                            </Middle>
                        </Anchor>
                    </ProjectsCard> */}
                    {/* <ProjectsCard>
                        <ProjectsTitle>Redux Toolkit</ProjectsTitle>
                        <Fudge></Fudge>
                        <ProjectsCardWrapper>
                            <ProjectImageContainer>
                                <a href='https://blooming-wave-03926.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
                                    <ProjectImageWrapper>
                                        <ProjectsImage src='/rtk.jpg' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
                                    </ProjectImageWrapper>
                                </a>
                            </ProjectImageContainer>
                        </ProjectsCardWrapper>
                    </ProjectsCard>
                </ProjectsSection>
                <ProjectsSection>
                    <ProjectsCard>
                        <ProjectsTitle>`Styled Clone</ProjectsTitle>
                        <Fudge></Fudge>
                        <ProjectsCardWrapper>
                            <ProjectImageContainer>
                                <a href='https://blooming-wave-03926.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
                                    <ProjectImageWrapper>
                                        <ProjectsImage src='/shipt_mobile_224x400.png' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
                                    </ProjectImageWrapper>
                                </a>
                            </ProjectImageContainer>
                        </ProjectsCardWrapper>
                    </ProjectsCard>

                    <ProjectsCard>
                        <ProjectsTitle>
                            Recipe Registry
                        </ProjectsTitle>
                        <ProjectsCardWrapper>
                            <ProjectImageContainer>
                                <a href='https://recipe-registry.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
                                    <ProjectImageWrapper>
                                        <ProjectsImage src='/recipe_mobile_224x400.png' alt='recipe registry mobile view' width={224} height={400} objectFit='fill' layout='responsive' priority={true} />
                                    </ProjectImageWrapper>
                                </a>
                            </ProjectImageContainer>
                        </ProjectsCardWrapper>
                    </ProjectsCard>

                    <ProjectsCard>
                        <ProjectsTitle>
                            Subreddit Client
                        </ProjectsTitle>
                        <ProjectsCardWrapper>
                            <ProjectImageContainer>
                                <a href='https://sub-reddit-samd.vercel.app' rel='noopener noreferrer' target='_blank'>
                                    <ProjectImageWrapper>
                                        <ProjectsImage src='/subreddit_mobile_sqooshed1.png' alt='subreddit client' width={350} height={625} objectFit='fill' layout='responsive' priority={true} />
                                    </ProjectImageWrapper>
                                </a>
                            </ProjectImageContainer>
                        </ProjectsCardWrapper>
                    </ProjectsCard> */}
                </ProjectsSection>
            </Container>
            <LinkGrid>
                <InPageLink href='/cv' >CV</InPageLink>
                <InPageLink href='/contact' >Contact</InPageLink>
                <InPageLink href='/' >Home</InPageLink>
            </LinkGrid>
        </>
    )
}


