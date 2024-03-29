import styled from 'styled-components';

export const HeadingL = styled.h2`
    font-weight: var(--fontWeight-700);
    font-size: clamp(3rem, 0.1rem + 12vw, 6rem);
    letter-spacing: -1.2px;
    line-height: 48px;
    color: ${({ color }) => (color ? color : 'var(--white)')};

    @media screen and (min-width: 48rem) {
        line-height: 80px;
        letter-spacing: -2px;
    }
`;

export const HeadingM = styled.h3`
    font-weight: var(--fontWeight-700);
    color: ${({ color }) => (color ? color : 'var(--white)')};
    letter-spacing: -1.7px;
    line-height: 52px;
    font-size: clamp(3rem, 1.6rem + 6.1vw, 4.5rem);

    @media screen and (min-width: 48rem) {
        line-height: 64px;
        letter-spacing: -2px;
    }
`;

export const HeadingS = styled.h4`
    font-weight: var(--fontWeight-700);
    font-size: 2rem;
    line-height: 40px;
    color: ${({ color }) => (color ? color : 'var(--white)')};
    text-decoration: none;
`;

export const Paragraph = styled.p`
    font-weight: ${({ fontWeight }) => fontWeight || 'var(--fontWeight-500)'};
    font-size: 1.125rem;
    line-height: ${({ lineHeight }) => lineHeight || '24px'};
    color: ${({ color }) => (color ? color : 'var(--darkGrey)')};
    text-decoration: none;
`;

export const ButtonTemplate = styled.button`
    background-color: var(--veryDarkBlue);
    color: var(--white);
    font-weight: var(--fontWeight-700);
    font-size: 1.125rem;
    line-height: 1.5625rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in;

    &:hover {
        background-color: var(--darkGrey);
    }
`;

export const WrapperWithoutMobilePadding = styled.section`
    position: relative;
    width: calc(100% + 2 * var(--mainPaddingMobile));
    margin-inline: calc(-1 * var(--mainPaddingMobile));

    @media (min-width: 48rem) {
        margin-inline: 0;
        width: 100%;
    }
`;

export const PortfolioPhotosWrapper = styled.div`
    grid-area: photo;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;
    width: 100%;

    @media (min-width: 48rem) {
        margin-bottom: 0;
    }

    @media (min-width: 64rem) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--gapPortfolioProjectDesktop);
    }
`;

export const WrapperWithDecorativeText = styled.div`
    @media screen and (min-width: 48rem) {
        &:before {
            content: ${({ content }) => content && `"${content}"`};
            position: absolute;
            top: 0;
            right: ${({ right }) => (right ? right : '')};
            left: ${({ left }) => (left ? left : '')};
            transform: translateY(-45%);
            font-weight: var(--fontWeight-700);
            font-size: clamp(7.5rem, -1.8rem + 19.3vw, 15.625rem);
            line-height: 200px;
            letter-spacing: 10px;
            color: var(--veryLightGrey);
        }
    }

    @media screen and (min-width: 64rem) {
        &:before {
            letter-spacing: -5px;
        }
    }
`;

export const DecorativeLine = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 65px;
    height: 1px;
    background-color: var(--lightGrey);
`;

export const VisuallyHidden = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /* added line */
    border: 0;
`;
