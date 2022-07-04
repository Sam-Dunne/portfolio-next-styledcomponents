import Head from 'next/head';
import Image from 'next/image';
import { device } from '../device';
import { Container, HeaderTitle, LinkGrid } from '../globalstyle';
import InPageLink from '../components/InPageLink';
import styled from 'styled-components';

const ProjectsTitle = styled.h3`
    color: #fafafa;
    width: 90%;
    text-align: center;
    margin: 0px auto 10px auto;
    
    @media ${device.tablet} {
        font-size: 1rem;    
    }

    @media ${device.laptopL} {
       
    }
`;

const ProjectsSection = styled.section`
    position: relative;
    padding: 0px 15px;
    margin: 0 auto 0 auto;

    @media ${device.tablet} {
        display: flex;
        justify-content: center;
        align-items: center;  
        
    }

    @media ${device.laptopL} {
        width: 1000px;
        height: 55vh;
    }
    `;

const ProjectsCardWrapper = styled.div`

    @media ${device.tablet} {        
        
    }

    @media ${device.laptopL} {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;

const ProjectsCard = styled.div`
    background: rgb(140,26,255);
    background: linear-gradient(45deg, rgba(140,26,255,1) 30%, rgba(152,26,255,0.9587185215883228) 71%);
    padding: 20px 40px;
    border-radius: 15px;
    margin: 0px auto 20px auto;
    width: 60vw;
    height: 100%;

    @media ${device.tablet} {
        width: 30%;
    }

    @media ${device.laptopL} {
        margin: 0px 50px 20px 50px;
        height: 65%;

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

const ProjectsImage = styled(Image)`
    display: block;
    border-radius: 10px;
    
    @media ${device.tablet} {
        
    }

    @media ${device.laptopL} {
        display: inline;
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

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>

            </Head>
            <HeaderTitle>Projects</HeaderTitle>
            <Container>
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
                    </ProjectsCard>
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


