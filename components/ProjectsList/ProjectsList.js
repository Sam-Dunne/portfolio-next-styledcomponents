import { HeaderTitle } from '../../globalstyle';
import { ProjectsSection } from './ProjectsList.elements';
import ProjectsCardCO from '../../components/ProjectsCardCO/ProjectsCardCO';



// const ProjectsSection = styled.section`
//     position: relative;
//     padding: 0px 0;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;  
//     flex-wrap: wrap;
    
//     @media ${device.tablet} {
//         padding: 0 4em;
//     }

//     @media ${device.laptopL} {
//         padding: 0 15vw;
//     }
//     `;




const ProjectsList = ({ data }) => {
    return (
        <div>
            <HeaderTitle>Projects</HeaderTitle>
            <div>
                <ProjectsSection>
                    {data.map(p => (
                        <ProjectsCardCO key={p.id} {...p} />
                    ))}
                </ProjectsSection>
            </div>
        </div>
    )
}

export default ProjectsList


