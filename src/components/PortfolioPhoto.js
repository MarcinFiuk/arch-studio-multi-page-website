import styled from 'styled-components';

import { findPhotoSize } from '../helpers/photoHelpers';
import { HeadingS, Paragraph } from '../styles/style-template';

function PortfolioPhoto({ photoData, media }) {
    const { id, src, title, subTitle } = photoData;
    const photoSize = findPhotoSize(media);
    const photoPath = `/assets/portfolio/${photoSize}/${src}`;

    console.log(photoPath);
    return (
        <Wrapper path={photoPath}>
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
    background-image: ${({ path }) =>
        path &&
        `linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0.01%, hsla(0, 0%, 0%, 0.5) 100%), url(${path})`};
    background-size: cover;
    width: 100%;
    aspect-ratio: 311/240;
    overflow: hidden;

    @media (min-width: 48rem) {
        aspect-ratio: 573/240;
    }

    @media (min-width: 64rem) {
        aspect-ratio: 350/560;
        flex-basis: calc((100% - 2 * var(--gapPortfolioProjectDesktop)) / 3);
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