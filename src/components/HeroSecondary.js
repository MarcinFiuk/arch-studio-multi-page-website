import styled from 'styled-components';

import {
    WrapperWithoutMobilePadding as Wrapper,
    WrapperWithDecorativeText,
    HeadingM,
    Paragraph,
    DecorativeLine,
} from './../styles/style-template';

function HeroSecondary({
    photo,
    photoLocation,
    alt,
    decorationText,
    title,
    desc,
}) {
    return (
        <WrapperStyled>
            <PhotoWrapper>
                <picture>
                    <source
                        srcSet={`/assets/${photoLocation}/desktop/image-${photo}.jpg`}
                        media='(min-width:64rem)'
                    />
                    <source
                        srcSet={`/assets/${photoLocation}/tablet/image-${photo}.jpg`}
                        media='(min-width:48rem)'
                    />

                    <img
                        src={`/assets/${photoLocation}/mobile/image-${photo}.jpg`}
                        alt={alt}
                    />
                </picture>
            </PhotoWrapper>
            <TextWrapper>
                <DecorativeLineUpdated />
                <WrapperWithDecorativeText content={decorationText} right='0'>
                    <HeadingM as='h2' color='var(--veryDarkBlue)'>
                        {title}
                    </HeadingM>
                    <Paragraph>{desc}</Paragraph>
                </WrapperWithDecorativeText>
            </TextWrapper>
        </WrapperStyled>
    );
}

const WrapperStyled = styled(Wrapper)`
    position: relative;
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

        p {
            margin-top: 54px;
        }
    }
`;

const DecorativeLineUpdated = styled(DecorativeLine)`
    display: none;

    @media (min-width: 48rem) {
        display: block;
        left: 60px;
        top: 88px;
    }

    @media (min-width: 64rem) {
        top: 104px;
        left: clamp(3.75rem, -14.7rem + 28.85vw, 11.25rem);
    }
`;

export default HeroSecondary;
