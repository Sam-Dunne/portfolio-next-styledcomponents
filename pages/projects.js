import Head from 'next/head';
import Image from 'next/image';
import { device } from '../device';
import { Container, HeroH1, HeaderTitle, LinkGrid } from '../globalstyle';
import InPageLink from '../components/InPageLink';
import styled from 'styled-components';

const ProjectsTitle = styled.h3`
    color: #fafafa;
    width: 90%;
    text-align: center;
    margin: 10px auto 10px auto;
    font-family: 'Oswald', sans-serif;
    
    @media ${device.tablet} {
        font-size: 1.3rem;
    
    }

    @media ${device.laptopL} {
       
    }
`;

const ProjectsSection = styled.section`
    position: relative;
    padding: 0px 15px;
    /* margin-bottom: 50px; */
    margin: 0 auto 20px auto;

    @media ${device.tablet} {
        display: flex;
        justify-content: center;
        align-items: center;  
        
    }

    @media ${device.laptopL} {
        display: inline;
    }
    `;

const ProjectsCardWrapper = styled.div`

    @media ${device.tablet} {
        /* display: flex;
        justify-content: space-between;
        align-items: center; */
        
        
    }

    @media ${device.laptopL} {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;

const ProjectsCard = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    background: #8c1aff;
    padding: 20px 40px;
    border-radius: 15px;
    box-shadow: 5px 6px 5px 0px rgba(0,0,0,0.75);
    margin: 0px auto 20px auto;
    width: 80vw;
    height: 100%;

    @media ${device.tablet} {
        width: 40%;
    }

    @media ${device.laptopL} {
        width: 50%;
    }
`;

const ProjectsCardTextWrapper = styled.div`
    background: #fafafa;
    /* width: 70vw; */
    margin: 14px auto;
    padding: 12px;
    border-radius: 8px;
    

    @media ${device.tablet} {
        /* width: 75%; */
        margin: auto;
        /* margin: 20px auto 40px auto;
        padding: 40px; */
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
       font-size: 1.5rem;
    }
`;

const ProjectImageContainer = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* flex-direction: column; */
    /* margin: auto;  */
    
    
    @media ${device.tablet} {
        /* width: 20%; */
        /* width: 90%; */
        margin-bottom: 20px;
    }
    
    @media ${device.laptopL} {
        /* flex-direction: row;
        justify-content: space-around; */
        margin-bottom: 0;

    }
`;

const ProjectImageWrapper = styled.div`
    /* position: relative; */
    /* margin-bottom: 20px; */
    box-shadow: 8px 8px 8px 0px rgba(0,0,0,0.75);
    margin-top: 30px;
    transition:
    transform 150ms ease-in;
    width: 100%;
    
    &:hover {
        transform: scale(1.05);
    }
    
    @media ${device.tablet} {
        /* width: 30%; */
        /* margin-bottom: 40px;
        width: 60vw; */
        
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

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>

            </Head>
            <Container>
                <HeaderTitle>Projects</HeaderTitle>
                <ProjectsSection>
                    <ProjectsCard>
                        <ProjectsTitle>Attack of the Clone</ProjectsTitle>
                        <ProjectsCardWrapper>
                            <ProjectImageContainer>
                                {/* <ProjectImageWrapper>
                                <ProjectsImage src='/shiptCloneMobile.png' alt='shipt clone full view' width={397} height={705} objectFit='cover' priority={true} />
                            </ProjectImageWrapper> */}
                                <a href='https://blooming-wave-03926.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
                                    <ProjectImageWrapper>
                                        <ProjectsImage src='/shipt_mobile_224x400.png' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
                                    </ProjectImageWrapper>
                                </a>
                                {/* <ProjectImageWrapper>
                                <ProjectsImage src='/ShiptCloneMobileNav.png' alt='shipt clone full view' width={393} height={705} objectFit='fill' priority={true} />
                                </ProjectImageWrapper> */}
                            </ProjectImageContainer>
                            <ProjectsCardTextWrapper>
                                <ProjectsCardText>A sandbox for learning Styled-Components, disguised as a mobile responsive partial clone of Shipt&apos;s homepage. Learning to make a mobile nav menu from scratch was good fun!  </ProjectsCardText>
                            </ProjectsCardTextWrapper>
                        </ProjectsCardWrapper>
                    </ProjectsCard>
                    {/* </ProjectsSection>
                <ProjectsSection> */}
                    <ProjectsCard>
                        <ProjectsTitle>
                            Recipe Registry
                        </ProjectsTitle>
                        <ProjectsCardWrapper>
                            <ProjectImageContainer>
                                {/* <ProjectImageWrapper>
                                <ProjectsImage src='/recipeIngredients.png' alt='shipt clone full view' width={512} height={456} objectFit='fill' priority={true} />
                            </ProjectImageWrapper> */}
                                <a href='https://recipe-registry.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
                                    <ProjectImageWrapper>
                                        <ProjectsImage src='/recipe_mobile_224x400.png' alt='recipe registry mobile view' width={224} height={400} objectFit='fill' layout='responsive' priority={true} />
                                    </ProjectImageWrapper>
                                </a>
                                {/* <ProjectImageWrapper>
                                <ProjectsImage src='/addRecipe.png' alt='shipt clone full view' width={1062} height={742} objectFit='cover' priority={true} />
                            </ProjectImageWrapper> */}
                            </ProjectImageContainer>
                            <ProjectsCardTextWrapper>
                                <ProjectsCardText>MERN(ish) Web App. Featuring RESTful API, CRUD operations, Authentication, Authorization, Many-to-Many Relationships, Createable Multi-Select (was a doozy) and more.     </ProjectsCardText>
                            </ProjectsCardTextWrapper>
                        </ProjectsCardWrapper>
                    </ProjectsCard>
                </ProjectsSection>
                <LinkGrid>
                    <InPageLink href='/about' >About</InPageLink>
                    <InPageLink href='/cv' >CV</InPageLink>
                    <InPageLink href='/contact' >Contact</InPageLink>
                    <InPageLink href='/' >Home</InPageLink>
                </LinkGrid>
            </Container>
        </>
    )
}


