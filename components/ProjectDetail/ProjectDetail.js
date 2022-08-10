import { TopSection} from '../../globalstyle';
import Link from 'next/link';

function ProjectDetail() {
  return (
    <TopSection last>
        <h1>Project Detail</h1>
        <Link href='/'>Go Back</Link>
    </TopSection>
  )
}

export default ProjectDetail