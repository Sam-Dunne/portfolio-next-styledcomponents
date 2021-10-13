import { Container, Section, HeroH1, ImageWrapper, SCImage, HeaderTitle } from "../globalstyle";



const AboutContent = ({  }) => {
    return (
        <>
            <Container>
                <HeaderTitle>About</HeaderTitle>
                <Section>
                    <HeroH1>Hi, I&apos;m Sam! This is my dog, Goof. <br /> I am a Junior Dev, who enjoys learning and problem-solving. <br /> I&apos;m seeking a workplace to grow and be challenged.</HeroH1>
                    <ImageWrapper>
                        <SCImage src="/invertedGoof.jpg" alt="Picture of upside down dog" width={600} height={400} objectFit="cover" priority={true} />
                    </ImageWrapper>
                </Section>
                <Section picFirst>
                    <HeroH1 mrgnLeftLG>I started learning to code during Pandemic, and then attended Covalence&apos;s FullStack Bootcamp. It was a great and challenging experience!</HeroH1>
                    <ImageWrapper>
                        <SCImage src="/goof-in-grass.jpg" alt="dog chewing stick in the grass" width={600} height={400} objectFit="cover" priority={true} />
                    </ImageWrapper>
                </Section>
                <Section>
                    <HeroH1>My background in Live Event Production and Food Service give me experience working in dynamic fast paced environments in teams, leading those teams, and getting along with widely diverse peoples and personalities. </HeroH1>
                    <ImageWrapper>
                        <SCImage src="/dliveConsole.png" alt="audio mixing console" width={600} height={400} objectFit="cover" priority={true} />
                    </ImageWrapper>
                </Section>
            </Container>
        </>
    )
}

export default AboutContent;
