import Head from 'next/head';
import Image from 'next/image';
import { device } from '../device';
import { Container, HeroH1, HeaderTitle } from '../globalstyle';
import styled from 'styled-components';

const ProjectsTitle = styled.h1`
    color: #fafafa;
    width: 90%;
    text-align: center;
    margin: 20px auto 15px auto;
    font-family: 'Oswald', sans-serif;
    
    @media ${device.tablet} {
        font-size: 2.6rem;
    
    }

    @media ${device.laptopL} {
       
    }
`;

const ProjectsSection = styled.section`
    padding: 20px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    `;

const ProjectsCard = styled.div`
    background: #8c1aff;
    padding: 20px 0 20px 0;
    border-radius: 15px;
    box-shadow: 5px 6px 5px 0px rgba(0,0,0,0.75);
    width: 90vw;

    @media ${device.tablet} {
        width: 80vw;
    }

    @media ${device.laptopL} {
        width: 60vw;
    }
`;

const ProjectsCardTextWrapper = styled.div`
    background: #fafafa;
    width: 80%;
    margin: 20px auto;
    padding: 25px;
    border-radius: 8px;

    @media ${device.tablet} {
        width: 65%;
        margin: 20px auto 40px auto;
        padding: 40px;
    }

    @media ${device.laptopL} {
        width: 512px;
        margin: 20px auto 40px auto;
    }
`;

const ProjectsCardText = styled.h5`

    @media ${device.tablet} {
        font-size: 1.3rem;
    }

    @media ${device.laptopL} {
       font-size: 1.5rem;
    }
`;

const ProjectImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    
    @media ${device.tablet} {
        width: 90%;
    }
    
    @media ${device.laptopL} {
        flex-direction: row;
        justify-content: space-around;
    }
`;

const ProjectImageWrapper = styled.div`
    position: relative;
    width: 80%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.tablet} {
        margin-bottom: 40px;
        width: 90%;

    }

    @media ${device.laptopL} {
        width: 512px;
    }
    `;

const ProjectsImage = styled(Image)`
    border-radius: 10px;
    display: block;
    

    @media ${device.tablet} {
        
        
    }

    @media ${device.laptopL} {
        
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
                        <ProjectsCardTextWrapper>
                            <ProjectsCardText>A sandbox for learning Styled-Components, disguised as a mobile responsive partial clone of Shipt's homepage. Learning to make a mobile nav menu and custom alert modal from scratch was good fun!  </ProjectsCardText>
                        </ProjectsCardTextWrapper>
                        <ProjectImageContainer>
                            {/* <ProjectImageWrapper>
                                <ProjectsImage src='/shiptCloneMobile.png' alt='shipt clone full view' width={397} height={705} objectFit='cover' priority={true} />
                            </ProjectImageWrapper> */}
                            <ProjectImageWrapper>
                                <ProjectsImage src='/shiptCloneFull.png' alt='shipt clone full view' width={758} height={670} objectFit='cover' priority={true} />
                            </ProjectImageWrapper>
                            {/* <ProjectImageWrapper>
                                <ProjectsImage src='/ShiptCloneMobileNav.png' alt='shipt clone full view' width={393} height={705} objectFit='fill' priority={true} />
                            </ProjectImageWrapper> */}
                        </ProjectImageContainer>
                    </ProjectsCard>
                </ProjectsSection>
                <ProjectsSection>
                    <ProjectsCard>
                        <ProjectsTitle>
                            Recipe Registry <br /> Full Stack App
                        </ProjectsTitle>
                        <ProjectsCardTextWrapper>
                            <ProjectsCardText>MERN(ish) Web App. Featuring RESTful API, CRUD operations, Authentication, Authorization, Many-to-Many Relationships, Createable Multi-Select (was a doozy) and more.     </ProjectsCardText>
                        </ProjectsCardTextWrapper>
                        <ProjectImageContainer>
                            {/* <ProjectImageWrapper>
                                <ProjectsImage src='/recipeIngredients.png' alt='shipt clone full view' width={512} height={456} objectFit='fill' priority={true} />
                            </ProjectImageWrapper> */}
                            <ProjectImageWrapper>
                                <ProjectsImage src='/recipeOverview.png' alt='shipt clone full view' width={512} height={723} objectFit='fill' priority={true} />
                            </ProjectImageWrapper>
                            {/* <ProjectImageWrapper>
                                <ProjectsImage src='/addRecipe.png' alt='shipt clone full view' width={1062} height={742} objectFit='cover' priority={true} />
                            </ProjectImageWrapper> */}
                        </ProjectImageContainer>
                    </ProjectsCard>
                </ProjectsSection>
            </Container>
        </>
    )
}


