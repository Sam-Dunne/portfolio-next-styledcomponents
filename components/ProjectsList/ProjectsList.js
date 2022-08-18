import { HeaderTitle } from '../../globalstyle';
import { ProjectsSection } from './ProjectsList.elements';
import ProjectsCardCO from '../../components/ProjectsCardCO/ProjectsCardCO';

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


