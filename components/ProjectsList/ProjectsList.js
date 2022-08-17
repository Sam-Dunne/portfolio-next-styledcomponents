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




const ProjectsList = ({ data }) => {
    return (
        <div>
            <HeaderTitle>Projects</HeaderTitle>
            <div>
                <ProjectsSection>
                    {data.map(p => (
                        <ProjectsCardCO key={p.id} {...p} />
                    ))}
                </ProjectsSection>
            </div>
        </div>
    )
}

export default ProjectsList


