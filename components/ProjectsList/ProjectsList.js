import Head from 'next/head';
import styled from 'styled-components';
// import React, { useState } from 'react';
// import Image from 'next/image';
import { device } from '../../device';
import { Container, HeaderTitle, LinkGrid } from '../../globalstyle';
import ProjectsCardCO from '../../components/ProjectsCardCO/ProjectsCardCO';



const ProjectsSection = styled.section`
    position: relative;
    padding: 0px 0;
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-wrap: wrap;
    
    @media ${device.tablet} {
        /* padding: 0 10vw; */
    }

    @media ${device.laptopL} {
        /* padding: 0 15vw; */
    }
    `;


// const projects = [
//     {
//         id: "1",
//         imgSrc: "/rtk.jpg",
//         imgAlt: "RTK project mobile view",
//         imgWidth: "224",
//         imgHeight: "400",
//         title: "Redux Toolkit",
//         textCopy: "Learned foundational concepts of Redux. Styled with Bootstrap and Sass.",
//         url: "https://learning-redux.herokuapp.com/"
//     },
//     {
//         id: "2",
//         imgSrc: "/shipt_mobile_224x400.png",
//         imgAlt: "shipt clone mobile view",
//         imgWidth: "224",
//         imgHeight: "400",
//         title: "`Styled Clone",
//         textCopy: "Focused sandbox for applying Styled Components.",
//         url: "https://blooming-wave-03926.herokuapp.com/"
//     },
//     {
//         id: "3",
//         imgSrc: "/recipe_mobile_224x400.png",
//         imgAlt: "recipe registry mobile view",
//         imgWidth: "224",
//         imgHeight: "400",
//         title: "Recipe Registry",
//         textCopy: "Full stack React/TS/ Express/MySQL app with RESTful Api and Auth.",
//         url: "https://recipe-registry.herokuapp.com/"
//     },
//     {
//         id: "4",
//         imgSrc: "/subreddit_mobile_sqooshed1.png",
//         imgAlt: "subreddit client",
//         imgWidth: "350",
//         imgHeight: "625",
//         title: "Subreddit Client",
//         textCopy: "Fetches and paginates data from Subreddit API. Built in NextJS. Styled with Tailwind.",
//         url: "https://sub-reddit-samd.vercel.app"
//     }
// ]

const ProjectsList = ({data}) => {
    return (
        <div>
            {/* <Head>
                <title>Projects</title>
            </Head> */}
                <HeaderTitle>Projects</HeaderTitle>
            <div>
                <ProjectsSection>
                    {data.map(p => (
                        <ProjectsCardCO key={p.id} {...p} />
                    ))}
                </ProjectsSection>
            </div>
            {/* <LinkGrid>
                <InPageLink href='/cv' >CV</InPageLink>
                <InPageLink href='/contact' >Contact</InPageLink>
                <InPageLink href='/' >Home</InPageLink>
            </LinkGrid> */}
        </div>
    )
}

export default ProjectsList


