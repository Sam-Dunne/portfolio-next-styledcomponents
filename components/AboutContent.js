import { Container, Section, HeroH1, ImageWrapper, SCImage } from "../globalstyle";



const AboutContent = ({ picFirst, mrgnLeftLG }) => {
    return (
        <>
            <Container>
                <Section>
                    <HeroH1>Hi, I'm Sam! This is my dog, Goof. <br /> I am a Junior Dev, who enjoys learning and problem-solving. <br /> I'm seeking a workplace to grow and be challenged.</HeroH1>
                    <ImageWrapper>
                        <SCImage src="/invertedGoof.jpg" alt="Picture of upside down dog" width={600} height={400} objectFit='cover' priority={true} />
                    </ImageWrapper>
                </Section>
                <Section picFirst>
                    <HeroH1 mrgnLeftLG>I started learning to code during Pandemic, and then attended Covalence's FullStack Bootcamp. It was a great and challenging experience!</HeroH1>
                    <ImageWrapper>
                        <SCImage src="/goof-in-grass.jpg" alt="dog chewing stick in the grass" width={600} height={400} objectFit='cover' priority={true} />
                    </ImageWrapper>
                </Section>
                <Section>
                    <HeroH1>Prior to Pandemic, I worked in Audio for Live Events and Concerts. So I have experience working in dynamic fast paced environments in teams, leading those teams, and getting along with widely diverse people. </HeroH1>
                    <ImageWrapper>
                        <SCImage src="/dliveConsole.png" alt="audio mixing console" width={600} height={400} objectFit='cover' priority={true} />
                    </ImageWrapper>
                </Section>
            </Container>
        </>
    )
}

export default AboutContent
