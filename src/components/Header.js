import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Logo from './icons/Logo';
import IconHamburger from './icons/IconHamburger';
import IconClose from './icons/IconClose';
import { Paragraph } from './../styles/style-template';
import useMatchMedia from './../hooks/useMatchMedia';

function Header({ blockScroll }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const isMobile = useMatchMedia('(max-width:48rem)');

    useEffect(() => {
        if (!isMobile) {
            setIsNavOpen(false);
            blockScroll(false);
        }
    }, [isMobile, blockScroll]);

    const toggleNavigationHandler = () => {
        if (isMobile) {
            setIsNavOpen((currentState) => {
                const newState = !currentState;
                blockScroll(newState);
                return newState;
            });
        }
    };

    const closeNavIfOpen = () => {
        if (isNavOpen) {
            toggleNavigationHandler();
        }
    };

    return (
        <HeaderStyled>
            <h1>
                <Link to='/' onClick={closeNavIfOpen}>
                    <Logo />
                </Link>
            </h1>
            <Overlay isOpen={isNavOpen} />
            <Navigation isOpen={isNavOpen}>
                <ParagraphAsLink
                    as={Link}
                    to='portfolio'
                    onClick={toggleNavigationHandler}
                >
                    Portfolio
                </ParagraphAsLink>
                <ParagraphAsLink
                    as={Link}
                    to='about'
                    onClick={toggleNavigationHandler}
                >
                    About Us
                </ParagraphAsLink>
                <ParagraphAsLink
                    as={Link}
                    to='contact'
                    onClick={toggleNavigationHandler}
                >
                    Contact
                </ParagraphAsLink>
            </Navigation>
            <button onClick={toggleNavigationHandler}>
                {isNavOpen ? <IconClose /> : <IconHamburger />}
            </button>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 2rem;

    @media (min-width: 48rem) {
        padding-inline: 97px;
        padding-block: 3.5rem;
    }

    @media (min-width: 1280px) {
        padding-inline: 165px;
    }

    h1 {
        flex-shrink: 0;
    }

    h1 > svg {
        width: 77px;
        height: 32px;

        @media (min-width: 48rem) {
            width: 94px;
            height: 40px;
        }
    }

    button {
        display: grid;
        place-items: center;
        flex-grow: 0;
        background-color: transparent;
        border: none;

        @media (min-width: 48rem) {
            display: none;
        }
    }
`;

const Navigation = styled.nav`
    position: fixed;
    right: 0;
    top: 103px;
    width: 80%;
    padding-inline: 3rem;
    padding-block: 2.5rem;
    background-color: var(--veryLightGrey);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    z-index: 101;
    ${({ isOpen }) =>
        isOpen ? 'transform:translateX(0,)' : 'transform:translateX(100%)'};
    transition: all 0.3s ease-in;
    transition-delay: ${({ isOpen }) => (isOpen ? '0.2s' : '0')};

    @media (min-width: 48rem) {
        position: static;
        background-color: transparent;
        transform: translateX(0);
        flex-direction: row;
        gap: 3.5rem;
        align-items: center;
        justify-content: flex-start;
        padding: 0;
        margin-left: 5rem;
    }

    @media (min-width: 64rem) {
        margin-left: 6rem;
    }
`;

const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 103px;
    width: calc(100% + 1px);
    height: 100%;
    background-color: hsl(0 0% 0% /0.5);
    z-index: 100;
    ${({ isOpen }) =>
        isOpen ? 'transform:translateX(0)' : 'transform:translateX(100%)'};
    transition: all 0.3s ease-in;
    transition-delay: ${({ isOpen }) => (isOpen ? '0' : '0.2s')};

    @media (min-width: 48rem) {
        display: none;
    }
`;

const ParagraphAsLink = styled(Paragraph)`
    color: var(--veryDarkBlue);

    @media (min-width: 48rem) {
        color: var(--mediumGrey);
        font-weight: var(--fontWeight-700);
        transition: color 0.15s linear;

        &:hover {
            color: var(--veryDarkBlue);
        }
    }
`;

export default Header;
