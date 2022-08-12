import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import { projectsData } from '../../projectsData';


export default function ProjectId() {
  return (
    <ProjectDetail data={projectsData}/>
  )
}
