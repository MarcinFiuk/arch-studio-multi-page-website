import styled from 'styled-components';

import {
    HeadingXL,
    HeadingM,
    Paragraph,
    DecorativeLine,
} from '../styles/style-template';

function SectionWithOnePhotoDisplayedAtDesktop({
    photo,
    alt,
    decorationText,
    changeDecorationElement,
    marginLeft,
    title,
    desc1,
    desc2,
    desc3,
    photoWidth,
    photoHeight,
}) {
    const decorationElement = changeDecorationElement ? (
        <DecorativeLine />
    ) : (
        <HeadingXLUpdated>{decorationText}</HeadingXLUpdated>
    );
    return (
        <Wrapper>
            {decorationElement}
            <Description marginLeft={marginLeft}>
                <HeadingMUpdated as='h2' color='var(--veryDarkBlue)'>
                    {title}
                </HeadingMUpdated>
                <ParagraphUpdated>{desc1}</ParagraphUpdated>
                <ParagraphUpdated>{desc2}</ParagraphUpdated>
                <ParagraphUpdated>{desc3}</ParagraphUpdated>
            </Description>
            <PhotoWrapper width={photoWidth} height={photoHeight}>
                <img src={photo} alt={alt} />
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
        margin-left: ${({ marginLeft }) =>
            marginLeft ? 'clamp(3.5rem, -17.4rem + 32.7vw, 12rem)' : '0'};
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
        display: block;
        width: ${({ width }) => width || '350px'};
        height: ${({ height }) => height || '560px'};
    }
`;

export default SectionWithOnePhotoDisplayedAtDesktop;
