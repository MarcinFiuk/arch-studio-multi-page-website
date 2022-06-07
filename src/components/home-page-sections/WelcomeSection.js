import styled from 'styled-components';

import { HeadingXL, HeadingM, Paragraph } from '../../styles/style-template';

function WelcomeSection() {
    return (
        <Wrapper>
            <HeadingXLUpdated>Welcome</HeadingXLUpdated>
            <Description>
                <HeadingMUpdated as='h2' color='var(--veryDarkBlue)'>
                    Welcome to
                    <br />
                    Arch Studio
                </HeadingMUpdated>
                <ParagraphUpdated>
                    We have a unique network and skillset to help bring your
                    projects to life. Our small team of highly skilled
                    individuals combined with our large network put us in a
                    strong position to deliver exceptional results.
                </ParagraphUpdated>
                <ParagraphUpdated>
                    Over the past 10 years, we have worked on all kinds of
                    projects. From stations to high-rise buildings, we create
                    spaces that inspire and delight.
                </ParagraphUpdated>
                <ParagraphUpdated>
                    We work closely with our clients so that we understand the
                    intricacies of each project. This allows us to work in
                    harmony the surrounding area to create truly stunning
                    projects that will stand the test of time.
                </ParagraphUpdated>
            </Description>
            <PhotoWrapper>
                <img
                    src='/assets/home/desktop/image-welcome.jpg'
                    alt='tiled wall'
                />
            </PhotoWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    gap: clamp(3.5rem, -7.1rem + 16.5vw, 7.8rem);
    position: relative;
`;

const HeadingXLUpdated = styled(HeadingXL)`
    position: absolute;
    left: 0;
    top: -102px;
`;

const Description = styled.div`
    padding: 4.25rem 0 2.5rem;
    flex: 1;

    p:last-of-type {
        margin-bottom: 0;
    }

    @media (min-width: 48rem) {
        padding: 3rem 0 2rem;
    }
    @media (min-width: 64rem) {
        margin-left: clamp(3.5rem, -17.4rem + 32.7vw, 12rem);
        padding: 4.3125rem 0 0.6875rem;
    }
`;

const HeadingMUpdated = styled(HeadingM)`
    margin-bottom: 1.375rem;

    @media (min-width: 48rem) {
        margin-bottom: 2.75rem;
    }
`;

const ParagraphUpdated = styled(Paragraph)`
    margin-bottom: 1rem;
`;

const PhotoWrapper = styled.div`
    display: none;

    img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 64rem) {
        width: 350px;
        max-height: 568px;
        display: block;
    }
`;
export default WelcomeSection;
