import styled from 'styled-components';

import {
    WrapperWithoutMobilePadding as Wrapper,
    HeadingXL,
    HeadingM,
    Paragraph,
} from './../styles/style-template';
import { findPhotoSize } from './../helpers/photoHelpers';

function HeroSecondary({ photo, alt, decorationText, title, desc, media }) {
    const photoSize = findPhotoSize(media);
    const photoPath = `/assets/about/${photoSize}/image-${photo}.jpg`;

    return (
        <WrapperStyled>
            <PhotoWrapper>
                <img src={photoPath} alt={alt} />
            </PhotoWrapper>
            <TextWrapper>
                <HeadingXLStyled>{decorationText}</HeadingXLStyled>
                <HeadingM as='h2' color='var(--veryDarkBlue)'>
                    {title}
                </HeadingM>
                <Paragraph>{desc}</Paragraph>
            </TextWrapper>
        </WrapperStyled>
    );
}

const WrapperStyled = styled(Wrapper)`
    min-height: 534px;
    max-height: 720px;
    overflow: hidden;
`;

const PhotoWrapper = styled.div`
    position: relative;
    aspect-ratio: 375/240;

    img {
        width: 100%;
        height: 100%;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: hsla(0, 0%, 0%, 0.35);
    }

    @media (min-width: 48rem) {
        aspect-ratio: 572/720;
    }

    @media (min-width: 64rem) {
        aspect-ratio: unset;

        img {
            width: 635px;
            height: 720px;
        }

        &::after {
            right: calc(100% - 635px);
        }
    }
`;

const TextWrapper = styled.div`
    position: absolute;
    background-color: var(--white);
    bottom: 0;
    left: 0;
    padding-top: 65px;
    padding-bottom: 4px;
    padding-left: var(--mainPaddingMobile);
    margin-left: var(--mainPaddingMobile);
    transform: translateX(calc(-1 * var(--mainPaddingMobile)));

    p {
        margin-top: 21px;
    }

    @media (min-width: 48rem) {
        transform: translateX(0);
        padding-top: 162px;
        padding-left: 60px;

        &::before {
            content: '';
            display: block;
            width: 65px;
            height: 0;
            transform: translateY(-7300%);
            border-bottom: 1px solid var(--lightGrey);
        }

        p {
            margin-top: 38px;
        }
    }

    @media (min-width: 64rem) {
        left: unset;
        right: 0;
        width: clamp(32rem, 13.5rem + 28.8vw, 39.5rem);
        padding-left: clamp(3.75rem, -14.7rem + 28.85vw, 11.25rem);
        margin-left: 0;

        &::before {
            display: none;
        }

        p {
            margin-top: 54px;
        }
    }
`;

const HeadingXLStyled = styled(HeadingXL)`
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-45%);
`;

export default HeroSecondary;
