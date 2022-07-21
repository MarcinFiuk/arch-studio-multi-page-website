import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LinkButton from './LinkButton';
import Logo from './icons/Logo';
import { Paragraph } from './../styles/style-template';

function Footer() {
    return (
        <FooterStyled>
            <Wrapper>
                <NavStyled>
                    <SquareLink to='/' onClick={() => window.scrollTo(0, 0)}>
                        <Logo fill='var(--white)' />
                    </SquareLink>
                    <Paragraph
                        as={Link}
                        to='portfolio'
                        // color='var(--mediumGrey)'
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Portfolio
                    </Paragraph>
                    <Paragraph
                        as={Link}
                        to='about'
                        color='var(--mediumGrey)'
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        About Us
                    </Paragraph>
                    <Paragraph
                        as={Link}
                        to='contact'
                        color='var(--mediumGrey)'
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Contact
                    </Paragraph>
                    <LinkButton
                        to='portfolio'
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        See Our Portfolio
                    </LinkButton>
                </NavStyled>
            </Wrapper>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`
    position: relative;
    isolation: isolate;

    @media (min-width: 64rem) {
        margin-inline: 97px;
    }

    @media (min-width: 80rem) {
        margin-inline: 165px;
    }
`;

const Wrapper = styled.div`
    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 86%;
        background-color: var(--veryLightGrey);
        z-index: -1;

        @media (min-width: 48rem) {
            width: 79%;
            height: 120px;
        }

        @media (min-width: 64rem) {
            height: 200px;
            width: 88%;
        }
    }
`;

const NavStyled = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;

    @media (min-width: 48rem) {
        flex-direction: row;
        padding-bottom: 0;
        justify-content: space-between;
    }

    a {
        color: var(--mediumGrey);
        font-weight: var(--fontWeight-700);

        &:hover {
            color: var(--veryDarkBlue);
        }

        &:last-child {
            color: var(--white);
        }
    }
`;

const SquareLink = styled(Link)`
    display: grid;
    place-items: center;
    width: 120px;
    height: 120px;
    background-color: var(--veryDarkBlue);

    svg {
        width: 58;
        height: 24;
    }

    @media (min-width: 64rem) {
        width: 200px;
        height: 200px;

        svg {
            width: 80px;
            height: 52px;
        }
    }
`;

export default Footer;
