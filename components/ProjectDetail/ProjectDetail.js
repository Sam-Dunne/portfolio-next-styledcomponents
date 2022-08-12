import { TopSection} from '../../globalstyle';
import {useRouter} from 'next/router'
import { projectsData } from '../../projectsData';

import Link from 'next/link';
import Image from 'next/image'

function ProjectDetail(props) {
    const router = useRouter();
    const index = router.query.projectId - 1
    // console.log(index)
    const data = props.data[index]
    // console.log(data)
  return (
    <TopSection last>
        <h1>{data.title}</h1>
        {/* <Image src={data.imgSrc} alt={data.imgAlt} width={data.imgWidth} height={data.imgHeight} objectFit='cover' layout='responsive' priority={false}></Image> */}
        <Link href='/'>Go Back</Link>
    </TopSection>
  )
}

export default ProjectDetail