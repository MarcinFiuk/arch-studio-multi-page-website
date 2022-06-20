import styled from 'styled-components';

import { HeadingM, HeadingS, Paragraph } from './../../styles/style-template';
import { leaders } from './../../data/about-leaders';

function Leaders() {
    const thumbnails = leaders.map((leader) => {
        const { id, photo, name, occupation } = leader;
        return (
            <Thumbnail key={id}>
                <PhotoWrapper>
                    <img
                        src={`/assets/about/desktop/${photo}.jpg`}
                        alt={`${name} miniature`}
                    />
                </PhotoWrapper>
                <HeadingS as='h3' color='var(--veryDarkBlue)'>
                    {name}
                </HeadingS>
                <Paragraph>{occupation}</Paragraph>
            </Thumbnail>
        );
    });
    return (
        <Wrapper>
            <HeadingM as='h2' color='var(--veryDarkBlue)'>
                The <br />
                Leaders
            </HeadingM>
            <ThumbnailsWrapper>{thumbnails}</ThumbnailsWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;

    @media (min-width: 48rem) {
        gap: 3rem;
    }

    @media (min-width: 64rem) {
        gap: clamp(1rem, -12rem + 20vw, 2.25rem);
        flex-direction: row;
        justify-content: space-between;
    }
`;

const ThumbnailsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 5rem;

    @media (min-width: 48rem) {
        grid-row-gap: 6.5rem;
        grid-column-gap: 12px;
    }

    @media (min-width: 64rem) {
        grid-row-gap: 4rem;
        grid-column-gap: 30px;
    }
`;

const Thumbnail = styled.div`
    grid-column: span 2;

    @media (min-width: 48rem) {
        grid-column: span 1;
    }
`;

const PhotoWrapper = styled.div`
    aspect-ratio: 311/284;
    max-width: 350px;
    overflow: hidden;
    margin-bottom: 1rem;

    img {
        width: 100%;
        height: 100%;
    }
`;

export default Leaders;
