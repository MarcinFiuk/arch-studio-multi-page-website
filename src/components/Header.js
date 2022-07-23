import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Logo from './icons/Logo';
import IconHamburger from './icons/IconHamburger';
import IconClose from './icons/IconClose';
import { navigationData } from '../data/navigation-data';
import { Paragraph, VisuallyHidden } from '../styles/style-template';
import useMatchMedia from '../hooks/useMatchMedia';

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
        setIsNavOpen((prev) => {
            const newState = !prev;
            blockScroll(newState);
            return newState;
        });
    };

    const navigation = navigationData.map((link) => {
        const { id, path, text } = link;

        return (
            <li key={id}>
                <ParagraphAsLink
                    as={Link}
                    to={path}
                    onClick={() => {
                        setIsNavOpen(false);
                        blockScroll(false);
                    }}
                >
                    {text}
                </ParagraphAsLink>
            </li>
        );
    });

    return (
        <HeaderStyled>
            <h1
                onClick={() => {
                    setIsNavOpen(false);
                    blockScroll(false);
                }}
            >
                <VisuallyHidden>Arch Logo</VisuallyHidden>
                <Link to='/'>
                    <Logo />
                </Link>
            </h1>
            <ToggleNavButton onClick={toggleNavigationHandler}>
                <VisuallyHidden>
                    {isNavOpen ? 'close nav' : 'open nav'}
                </VisuallyHidden>
                {isNavOpen ? <IconClose /> : <IconHamburger />}
            </ToggleNavButton>
            <Overlay isOpen={isNavOpen} />
            <Navigation isOpen={isNavOpen}>
                <List>{navigation}</List>
            </Navigation>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    padding-inline: 165px;
    padding-block: 3.5rem;

    @media (max-width: 1280px) {
        padding-inline: 97px;
        justify-content: flex-start;
    }

    @media (max-width: 48rem) {
        justify-content: space-between;
        padding: 2rem;
    }
`;

const ToggleNavButton = styled.button`
    display: none;

    @media (max-width: 48rem) {
        display: grid;
        place-items: center;
        background-color: transparent;
        border: none;
    }
`;

const Navigation = styled.nav`
    @media (max-width: 48rem) {
        position: fixed;
        inset: 6.5rem 0 auto 10%;
        background-color: var(--veryLightGrey);
        z-index: 101;
        padding-inline: 3rem;
        padding-block: 2.5rem;
        transition: all 0.2s ease-in;
        ${({ isOpen }) =>
            isOpen ? 'transform:translateX(0)' : 'transform:translateX(100%)'};
        transition-delay: ${({ isOpen }) => (isOpen ? '0.2s' : '0')};
    }
`;

const List = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 94px;
    gap: 3.5rem;

    @media (max-width: 64rem) {
        padding-left: 78px;
    }

    @media (max-width: 48rem) {
        flex-direction: column;
        gap: 1rem;
        z-index: 100;
    }
`;

const ParagraphAsLink = styled(Paragraph)`
    font-weight: var(--fontWeight-700);
    color: var(--mediumGrey);
    transition: color 0.15s linear;

    &:hover {
        color: var(--veryDarkBlue);
    }

    @media (max-width: 48rem) {
        font-size: 2rem;
        color: var(--veryDarkBlue);
    }
`;

const Overlay = styled.div`
    display: none;
    @media (max-width: 48rem) {
        display: block;
        position: fixed;
        left: 0;
        top: 6.5rem;
        width: 100%;
        height: 100%;
        background-color: hsl(0 0% 0% /0.5);
        z-index: 100;
        ${({ isOpen }) =>
            isOpen ? 'transform:translateX(0)' : 'transform:translateX(100%)'};
        transition: all 0.2s ease-in;
        transition-delay: ${({ isOpen }) => (isOpen ? '0' : '0.2s')};
    }
`;

export default Header;
