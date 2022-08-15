import { Container, TopSection, HeroH1 } from '../../globalstyle';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import {ProjectsCard, ProjectsImage, DynNavWrapper, ProjDetailSection, DynNavButton, NextIcon, PrevIcon } from './ProjectDetail.elements';

function ProjectDetail({ data }) {
  const router = useRouter();
  const projectId = router.query.projectId;
  const next = Number(projectId) + 1;
  const prev = Number(projectId) - 1;

  const index = projectId - 1
  const pData = data[index]

  function nextProjHandler() {
    router.push(`/${next}`)
  };
  function prevProjHandler() {
    router.push(`/${prev}`)
  };

  return (
    <Container>
      <ProjDetailSection last>
        <DynNavWrapper>
          {projectId != 1 ?
            <DynNavButton onClick={prevProjHandler}><PrevIcon/> Prev</DynNavButton>
            :
            <DynNavButton disabled><PrevIcon/>Prev</DynNavButton>
          }
          <Link href='/'><DynNavButton>Go back to main page</DynNavButton></Link>
          {projectId < data.length ?
            <DynNavButton onClick={nextProjHandler}>Next <NextIcon/></DynNavButton>
            :
            <DynNavButton disabled>Next <NextIcon/></DynNavButton>
          }
        </DynNavWrapper>
        <HeroH1 centered>{pData.title}</HeroH1>
        <ProjectsCard>
          <ProjectsImage src={pData.imgSrc} alt={pData.imgAlt} width={pData.imgWidth} height={pData.imgHeight} objectFit='cover' layout='responsive' priority={false} />
        </ProjectsCard>
      </ProjDetailSection>
    </Container>
  )
}

export default ProjectDetail