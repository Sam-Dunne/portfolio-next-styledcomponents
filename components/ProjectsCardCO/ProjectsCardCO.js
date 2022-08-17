import {useRouter} from 'next/router'
import { ProjectsCardWrapper, ProjectsCard, ProjectsImage } from './ProjectCardCO.elements';

// Props 
// {
    // imgSrc,
    // imgAlt,
    // imgWidth,
    // imgHeight,
    // title,
    // textCopy,
    // url,
// }

const ProjectsCardCO = ({id, imgSrc, imgAlt, imgWidth, imgHeight, title, textCopy, url}) => {
    const router = useRouter();
    function showProjectDetailHandler() {
        router.push(`/${id}`)
    }
    return (
        <ProjectsCardWrapper key={id} onClick={showProjectDetailHandler}>
            <ProjectsCard>
                    <ProjectsImage src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} objectFit='cover' layout='responsive' priority={false} />               
            </ProjectsCard>
        </ProjectsCardWrapper>
    )
}

export default ProjectsCardCO
