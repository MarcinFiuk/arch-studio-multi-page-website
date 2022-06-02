import styled from 'styled-components';

import { useState } from 'react';
import { data } from './hero-data';
import {
    ButtonTemplate,
    HeadingL,
    Paragraph,
} from './../../styles/style-template';
import IconArrow from './../icons/IconArrow';

function Hero() {
    const [actualElement, setActualElement] = useState(0);
    const { title, description, photo } = data[actualElement];

    const photoPath = `/assets/home/mobile/image-hero-${photo}.jpg`;

    const buttons = data.map((element, index) => {
        return (
            <NavigationButtons
                data-id={index}
                key={element.id}
                active={actualElement === index}
            >
                {element.id}
            </NavigationButtons>
        );
    });
    return (
        <Wrapper>
            <ContentWrapper>
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
            </ContentWrapper>
            <ButtonsWrapper>{buttons}</ButtonsWrapper>
        </Wrapper>
    );
}

//NOTE: add filter to photo

const parentPaddingToRemove = '32px';

const Wrapper = styled.div`
    position: relative;
    width: calc(100% + 2 * parentPaddingToRemove);
    margin-inline: -${parentPaddingToRemove};

    @media (min-width: 768px) {
        margin-inline: 0;
        width: 100%;
    }
    @media (min-width: 1280px) {
    }
`;

const ContentWrapper = styled.div`
    overflow: hidden;
    height: 560px;
    background-color: var(--mediumGrey);

    img {
        width: 100%;
    }

    @media (min-width: 768px) {
        height: 720px;
    }
`;

const ImgMask = styled.div`
    position: absolute;
    inset: 0;
    background: #000000;
    mix-blend-mode: normal;
    opacity: 0.35;
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
    }

    button {
        display: flex;
        gap: 24px;
        margin-top: 5.25rem;
        padding: 25px 32px 22px 37px;
        transition: background-color 0.2s ease-in;

        &:hover {
            background-color: var(--darkGrey);
        }
    }

    @media (min-width: 768px) {
        margin-inline: 58px;

        button {
            margin-top: 2.5rem;
        }
    }

    @media (min-width: 1024px) {
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

    @media (min-width: 1024px) {
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
