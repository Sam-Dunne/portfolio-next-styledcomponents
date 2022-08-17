import {useRouter} from 'next/router'
import { ProjectsCardWrapper, ProjectsCard, Anchor, ProjectsImage, Middle, ProjectsTitle, CardOverlayCopy, GoTo } from './ProjectCardCO.elements';

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
                {/* <Anchor href={url}> */}
                    <ProjectsImage src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} objectFit='cover' layout='responsive' priority={false} />
                    {/* <Middle>
                        <ProjectsTitle>{title}</ProjectsTitle>
                        <CardOverlayCopy>{textCopy}
                        </CardOverlayCopy>
                    </Middle> */}
                {/* </Anchor> */}
            </ProjectsCard>
            {/* <Anchor href={url} target="blank">
                <GoTo>Go to Project</GoTo>
            </Anchor> */}
        </ProjectsCardWrapper>
        // <ProjectsCardWrapper>
        //     <ProjectsCard>
        //         <Anchor href="">
        //             <ProjectsImage src='/rtk.jpg' alt='shipt clone mobile view' width={224} height={400} objectFit='cover' layout='responsive' priority={true} />
        //             <Middle>
        //                 <ProjectsTitle>Redux Toolkit</ProjectsTitle>
        //                 <CardOverlayCopy>Learned foundational concepts of Redux. Styled with Bootstrap and Sass.
        //                 </CardOverlayCopy>
        //             </Middle>
        //         </Anchor>
        //     </ProjectsCard>
        //     <Anchor href="https://learning-redux.herokuapp.com/" target="blank">
        //         <GoTo>Go to Project</GoTo>
        //     </Anchor>
        // </ProjectsCardWrapper>
    )
}

export default ProjectsCardCO
