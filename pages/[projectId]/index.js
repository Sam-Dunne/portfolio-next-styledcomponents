import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import { projectsData } from '../../projectsData';

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {params: {
        projectId: '1'
      },
    },
      {params: {
        projectId: '2'
      },
    },
      {params: {
        projectId: '3'
      },
    },
      {params: {
        projectId: '4'
      },
    },
    ]
  }
}

export function getStaticProps(context) {
  const projectId = context.params.projectId;
  console.log({key: projectId})
  return {
    props: {
      data: projectsData
    }
  }
}

export default function ProjectId(props) {
  return (
    <ProjectDetail data={props.data}/>
  )
}
