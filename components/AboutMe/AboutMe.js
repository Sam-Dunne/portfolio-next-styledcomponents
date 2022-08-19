import { HeroH1, H2 } from '../../globalstyle';
import { ArticleWrapper, PARA } from './AboutMe.elements'

export default function AboutMe() {
    return (
        <>
            <HeroH1 centered>Dev Journey</HeroH1>
            <ArticleWrapper>
                <H2>Pre-Dev Background</H2>
                <PARA>Prior to Covid, I worked as a Sound Engineer for concerts, events, churches. In addition to &quot;day of show&quot; duties, I also provided technical training, consultation, system design/installation, and planning/logistics.</PARA>
            </ArticleWrapper>
            <ArticleWrapper>
                <H2>Unplanned Transition</H2>
                <PARA>Covid destroyed event production for ~18 months. In the midst of that hardship, I elected to define a new life path and attended the <strong>Covalence Full Stack Bootcamp</strong>. There I was challenged in fulfilling ways and discovered my passion for Front End Development.</PARA>
            </ArticleWrapper>
            <ArticleWrapper>
                <H2>Stint at CAVU</H2>
                <PARA>Here I worked as an e-Learning Developer. During my brief time there, I decreased course production time by 4x, learned much about the creative development process, and earned <strong>Scrum Master and Product Owner</strong> certifications. I left by choice, on good terms, to refocus on my goal of becoming a Front End Developer.</PARA>
            </ArticleWrapper>
        </>
    )
}
