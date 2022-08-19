import { useRouter } from 'next/router';
import { forwardRef } from 'react';
import { useInView } from "react-intersection-observer";

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

const ProjectsCardCO = ({ id, imgSrc, imgAlt, imgWidth, imgHeight, title, textCopy, url, opacity }) => {
    const router = useRouter();
    const { ref: projectCardRef, inView: projectCardVisible } = useInView();

    function showProjectDetailHandler() {
        router.push(`/${id}`)
    }
    // console.log({opacity})
    return (
        <>
            {projectCardVisible
                ?
                <ProjectsCardWrapper ref={projectCardRef} key={id} onClick={showProjectDetailHandler} isVisible="isVisible">
                    <ProjectsCard>
                        <ProjectsImage src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} objectFit='cover' layout='responsive' priority={false} />
                    </ProjectsCard>
                </ProjectsCardWrapper>

                :
                <ProjectsCardWrapper ref={projectCardRef} key={id} onClick={showProjectDetailHandler}>
                    <ProjectsCard>
                        <ProjectsImage src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} objectFit='cover' layout='responsive' priority={false} />
                    </ProjectsCard>
                </ProjectsCardWrapper>

            }
        </>
    )
};

ProjectsCardCO.displayName = 'ProjectsCardCO';
export default ProjectsCardCO;
