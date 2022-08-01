import styled from 'styled-components';

import { HeadingS, Paragraph } from '../styles/style-template';

function PortfolioPhoto({ photoData, decoration }) {
    const { src, title, subTitle } = photoData;

    return (
        <Wrapper photo={src} decoration={decoration}>
            <TextWrapper>
                <HeadingS as='h3'>{title}</HeadingS>
                <Paragraph color='var(--white)'>{subTitle}</Paragraph>
            </TextWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    background-color: var(--veryDarkBlue);
    background-image: ${({ photo }) =>
        photo &&
        `linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0.01%, hsla(0, 0%, 0%, 0.5) 100%), url(/assets/portfolio/mobile/${photo})`};
    background-size: cover;
    width: 100%;
    aspect-ratio: 311/240;
    overflow: hidden;

    @media (min-width: 48rem) {
        aspect-ratio: 573/240;
        background-image: ${({ photo }) =>
            photo &&
            `linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0.01%, hsla(0, 0%, 0%, 0.5) 100%), url(/assets/portfolio/tablet/${photo})`};

        &::before {
            content: ${({ decoration }) =>
                decoration ? `"${decoration}"` : null};
            position: absolute;
            top: 0;
            right: 3%;
            font-size: 15.5rem;
            line-height: 200px;
            font-weight: var(--fontWeight-700);
            margin-top: 2rem;
            color: var(--white);
            opacity: 0.5;
        }
    }

    @media (min-width: 64rem) {
        aspect-ratio: 350/560;
        flex-basis: calc((100% - 2 * var(--gapPortfolioProjectDesktop)) / 3);
        background-image: ${({ photo }) =>
            photo &&
            `linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0.01%, hsla(0, 0%, 0%, 0.5) 100%), url(/assets/portfolio/desktop/${photo})`};

        &::before {
            right: -4.5%;
        }
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    padding-left: 1.5rem;
    padding-bottom: 1.5rem;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;

    background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 0%, 0) 0.01%,
        hsla(0, 0%, 0%, 0.5) 100%
    );

    @media (min-width: 48rem) {
        padding-left: 2.5rem;
        padding-bottom: 2.5rem;
    }

    @media (min-width: 64rem) {
        min-height: 50%;
        height: unset;
    }
`;

export default PortfolioPhoto;
