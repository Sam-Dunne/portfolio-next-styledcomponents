import { TopSection} from '../../globalstyle';
import {useRouter} from 'next/router'
import Link from 'next/link';
import Image from 'next/image'

function ProjectDetail({data}) {
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
    <TopSection last>
        <h1>{pData.title}</h1>
        <Image src={pData.imgSrc} alt={pData.imgAlt} width={pData.imgWidth} height={pData.imgHeight} objectFit='cover' layout='responsive' priority={false}></Image>
        <Link href='/'>Go Back</Link>
        {projectId != 1 ? 
        <button onClick={prevProjHandler}>previous</button>
        :
        <button disabled>previous</button>
        }
        {projectId < data.length ? 
        <button onClick={nextProjHandler}>next</button>
        :
        <button disabled>next</button>
        }
    </TopSection>
  )
}

export default ProjectDetail