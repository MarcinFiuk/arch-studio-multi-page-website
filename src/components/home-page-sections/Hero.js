import styled from 'styled-components';
import { useState } from 'react';

import useInterval from '../../hooks/useInterval';
import { slidesData } from './../../data/home-page-hero-data';
import LinkButton from './../LinkButton';
import {
    WrapperWithoutMobilePadding as Wrapper,
    ButtonTemplate,
    HeadingL,
    Paragraph,
} from '../../styles/style-template';

function Hero() {
    const [actualElement, setActualElement] = useState(0);

    const changeSlide = () => {
        setActualElement((prev) => {
            if (prev === 3) {
                return 0;
            }
            return prev + 1;
        });
    };

    useInterval(changeSlide, 5000, actualElement);
    /* actualElement in useInterval reset the interval when slide is change manually*/

    const movePictureHandler = (index) => {
        setActualElement(index);
    };

    const buttons = slidesData.map((_, index) => {
        const photoNr = index + 1;
        const paddedPhotoNr = photoNr.toString().padStart(2, 0);

        return (
            <NavigationButtons
                data-id={index}
                key={index}
                active={actualElement === index}
                onClick={() => movePictureHandler(index)}
            >
                {paddedPhotoNr}
            </NavigationButtons>
        );
    });

    const slides = slidesData.map((element) => {
        const { id, title, description, photo } = element;

        return (
            <IndividualElement
                key={id}
                howMuchTranslate={actualElement * 100}
                photo={photo}
            >
                <Info>
                    <HeadingL>{title}</HeadingL>
                    <Paragraph color='var(--white)'>{description}</Paragraph>
                    <LinkButton to='portfolio'>See Our Portfolio</LinkButton>
                </Info>
            </IndividualElement>
        );
    });
    return (
        <Wrapper>
            <SliderWrapper>{slides}</SliderWrapper>
            <ButtonsWrapper>{buttons}</ButtonsWrapper>
        </Wrapper>
    );
}

const SliderWrapper = styled.div`
    display: flex;
    overflow: hidden;
    align-items: center;
`;

const IndividualElement = styled.div`
    position: relative;
    background-image: ${({ photo }) =>
        photo && `url(/assets/home/mobile/image-hero-${photo}.jpg)`};
    background-size: cover;
    min-height: 560px;
    overflow: hidden;
    display: flex;
    flex: 0 0 100%;
    transform: ${({ howMuchTranslate }) => `translateX(-${howMuchTranslate}%)`};
    transition: transform 0.5s linear;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: hsla(1, 1%, 1%, 0.35);
    }

    @media (min-width: 48rem) {
        min-height: 720px;
        background-image: ${({ photo }) =>
            photo && `url(/assets/home/tablet/image-hero-${photo}.jpg)`};
    }

    @media (min-width: 64rem) {
        background-image: ${({ photo }) =>
            photo && `url(/assets/home/desktop/image-hero-${photo}.jpg)`};
    }
`;

const Info = styled.div`
    padding-left: 2rem;
    align-self: center;
    z-index: 10;

    h2 {
        margin-bottom: 0.75rem;
    }

    p {
        margin-bottom: 5.25rem;
    }

    @media (min-width: 48rem) {
        padding-left: 3.5rem;

        p {
            margin-bottom: 2.5rem;
        }
    }

    @media (min-width: 64rem) {
        width: 70%;
        padding-left: 12rem;

        p {
            width: 80%;
        }
    }
`;

const ButtonsWrapper = styled.div`
    display: none;

    @media (min-width: 64rem) {
        display: block;
        position: absolute;
        bottom: 0;
        left: -80px;
    }
`;

const NavigationButtons = styled(ButtonTemplate)`
    width: 80px;
    height: 80px;
    background-color: ${({ active }) =>
        active ? 'var(--veryDarkBlue)' : 'var(--white)'};
    color: ${({ active }) => (active ? 'var(--white)' : 'var(--mediumGrey)')};
    transition: background-color 0.1s ease-in;

    &:hover {
        background-color: ${({ active }) => !active && 'var(--veryLightGrey)'};
    }
`;

export default Hero;
