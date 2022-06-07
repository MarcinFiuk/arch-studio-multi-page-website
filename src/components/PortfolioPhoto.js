import styled from 'styled-components';

import { findPhotoSize } from '../helpers/photoHelpers';
import { HeadingS, Paragraph, ImgMask } from '../styles/style-template';

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
    background-color: var(--veryDarkBlue);
    background-image: ${({ path }) =>
        path &&
        `linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0.01%, hsla(0, 0%, 0%, 0.5) 100%), url(${path})`};
    background-size: cover;
    width: 100%;
    aspect-ratio: 311/240;

    @media (min-width: 48rem) {
        aspect-ratio: 573/240;
    }

    @media (min-width: 64rem) {
        aspect-ratio: 350/560;
        flex-basis: calc((100% - 2 * var(--gapPortfolioProjectDesktop)) / 3);
    }
`;

const TextWrapper = styled.div`
    height: 100%;
    transform: translate(10%, 64%);
`;

export default PortfolioPhoto;
