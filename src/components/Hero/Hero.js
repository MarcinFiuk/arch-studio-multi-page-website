import styled from 'styled-components';
import { useState } from 'react';

import useInterval from '../../hooks/useInterval';
import { findPhotoSize } from './../../helpers/photoHelpers';
import { data } from './hero-data';
import IconArrow from './../icons/IconArrow';
import {
    WrapperWithoutMobilePadding as Wrapper,
    ButtonTemplate,
    HeadingL,
    Paragraph,
    ImgMask,
} from './../../styles/style-template';

function Hero({ media }) {
    const [actualElement, setActualElement] = useState(0);

    const changeSlide = () => {
        setActualElement((prev) => {
            if (prev === 3) {
                return 0;
            }
            return prev + 1;
        });
    };
    useInterval(changeSlide, 4000, actualElement);
    /* actualElement in useInterval reset the interval when slide is change manually*/

    const movePictureHandler = (index) => {
        setActualElement(index);
    };

    const buttons = data.map((_, index) => {
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

    const slides = data.map((element) => {
        const { id, title, description, photo } = element;

        const photoSize = findPhotoSize(media);

        const photoPath = `/assets/home/${photoSize}/image-hero-${photo}.jpg`;
        return (
            <IndividualElement key={id} howMuchTranslate={actualElement * 100}>
                <img src={photoPath} alt={title} />
                <ImgMask />

                <Info>
                    <HeadingL>{title}</HeadingL>
                    <Paragraph>{description}</Paragraph>
                    <ButtonTemplate>
                        See Our Portfolio
                        <span>
                            <IconArrow />
                        </span>
                    </ButtonTemplate>
                </Info>
            </IndividualElement>
        );
    });
    return (
        <Wrapper>
            <SliderWrapper> {slides}</SliderWrapper>
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
    flex: 0 0 100%;
    position: relative;
    width: 100%;
    height: 560px;
    background-color: var(--mediumGrey);
    transition: transform 0.5s linear;
    transform: ${({ howMuchTranslate }) => `translateX(-${howMuchTranslate}%)`};

    img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 48rem) {
        height: 720px;
    }
`;

const Info = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    color: var(--white);
    transform: translateY(-50%);
    margin-inline: 32px;

    h2 {
        margin-bottom: 0.75rem;
    }

    p {
        color: var(--white);
        margin-bottom: 5.25rem;
    }

    @media (min-width: 48rem) {
        margin-inline: 58px;

        p {
            margin-bottom: 2.5rem;
        }
    }

    @media (min-width: 64rem) {
        width: 50%;
        margin-inline: 190px;

        p {
            width: 80%;
        }
    }
`;

const ButtonsWrapper = styled.div`
    display: none;

    button {
    }

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
