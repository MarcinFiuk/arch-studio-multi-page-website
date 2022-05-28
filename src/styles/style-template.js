import styled from 'styled-components';

export const HeadingXL = styled.span`
    display: none;

    @media screen and (min-width: 48rem) {
        display: block;
        font-weight: var(--fontWeight-700);
        font-size: clamp(7.5rem, -1.8rem + 19.3vw, 15.625rem);
        line-height: 200px;
        letter-spacing: -3px;
        color: var(--veryLightGrey);
    }

    @media screen and (min-width: 64rem) {
        letter-spacing: -5px;
    }
`;

export const HeadingL = styled.h2`
    font-weight: var(--fontWeight-700);
    /* font-size: clamp(3rem, 1.9rem + 4.5vw, 6rem); */ //font grows between mobile view and desktop view
    font-size: clamp(
        3rem,
        0.1rem + 12.2vw,
        6rem
    ); // font grows between mobile and tablet
    letter-spacing: -1.2px;
    line-height: 48px;
    color: var(--white);

    @media screen and (min-width: 48rem) {
        line-height: 80px;
        letter-spacing: -2px;
    }
`;

export const HeadingM = styled.h3`
    font-weight: var(--fontWeight-700);
    color: var(--veryDarkBlue);
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
    color: var(--white);
`;

export const Paragraph = styled.p`
    font-weight: var(--fontWeight-500);
    font-size: 1.125rem;
    line-height: 24px;
    color: var(--darkGrey);
`;
