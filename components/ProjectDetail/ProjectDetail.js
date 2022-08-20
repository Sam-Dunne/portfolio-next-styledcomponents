import { Container, TopSection, HeroH1 } from '../../globalstyle';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import { ProjectsCard, ProjectsImage, DynNavWrapper, ProjDetailSection, DynNavButton, NextIcon, PrevIcon, DetailsWrapper, Article, StackUL, Anchor } from './ProjectDetail.elements';
import { PARA } from '../../globalstyle';

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

        

        <HeroH1 centered>{pData.title}</HeroH1>
        <DetailsWrapper>
          <ProjectsCard>
            <Anchor href={pData.url} target="blank">
              <ProjectsImage src={pData.imgSrc} alt={pData.imgAlt} width={pData.imgWidth} height={pData.imgHeight} objectFit='cover' layout='responsive' priority={false} />
            </Anchor>
          </ProjectsCard>
          <Article>
            <PARA><strong>Purpose: </strong>{pData.textCopy}</PARA>
            <StackUL>
              {pData.stack.map(s => <li key={s}>{s}</li>)}
            </StackUL>
          </Article>
        </DetailsWrapper>

        <DynNavWrapper>
          {projectId != 1 ?
            <DynNavButton onClick={prevProjHandler}><PrevIcon /> Prev</DynNavButton>
            :
            <DynNavButton disabled><PrevIcon />Prev</DynNavButton>
          }
          <Link href='/'><DynNavButton>To main page</DynNavButton></Link>
          {projectId < data.length ?
            <DynNavButton onClick={nextProjHandler}>Next <NextIcon /></DynNavButton>
            :
            <DynNavButton disabled>Next <NextIcon /></DynNavButton>
          }
        </DynNavWrapper>
      </ProjDetailSection>
    </Container>
  )
}

export default ProjectDetail