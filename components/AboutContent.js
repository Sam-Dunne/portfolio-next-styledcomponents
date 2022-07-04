import { Section, HeroH1, ImageWrapper, SCImage, HeaderTitle } from "../globalstyle";



const AboutContent = ({ }) => {
    return (
        <>
            <HeaderTitle>About</HeaderTitle>
            <Section>
                <HeroH1>Hi, I&apos;m Sam! This is my dog, Goof. <br /> I&apos;m seeking a workplace to grow and be challenged.</HeroH1>
                <ImageWrapper>
                    <SCImage src="/invertedGoof.jpg" alt="Picture of upside down dog" width={600} height={400} objectFit="cover" priority={true} />
                </ImageWrapper>
            </Section>
            <Section picFirst>
                <HeroH1 mrgnLeftLG>I started learning to code during Pandemic, and then attended Covalence&apos;s FullStack Bootcamp.</HeroH1>
                <ImageWrapper>
                    <SCImage src="/goof-in-grass.jpg" alt="dog chewing stick in the grass" width={600} height={400} objectFit="cover" priority={true} />
                </ImageWrapper>
            </Section>
        </>
            )
}

            export default AboutContent;
