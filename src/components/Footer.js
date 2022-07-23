import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LinkButton from './LinkButton';
import Logo from './icons/Logo';
import { Paragraph } from './../styles/style-template';
import { navigationData } from './../data/navigation-data';

function Footer() {
    // const navigation = navigationData.map((link) => {
    //     const { id, path, text } = link;

    //     return (
    //         <li key={id}>
    //             <Paragraph
    //                 as={Link}
    //                 to={path}
    //                 onClick={() => window.scrollTo(0, 0)}
    //             >
    //                 {text}
    //             </Paragraph>
    //         </li>
    //     );
    // });

    return (
        <FooterStyled>
            <Wrapper>
                <SquareLink to='/' onClick={() => window.scrollTo(0, 0)}>
                    <Logo fill='var(--white)' />
                </SquareLink>
                <NavStyled>{/* <ul>{navigation}</ul> */}</NavStyled>
                <LinkButton
                    to='portfolio'
                    onClick={() => window.scrollTo(0, 0)}
                >
                    See Our Portfolio
                </LinkButton>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 86%;
        background-color: var(--veryLightGrey);
        z-index: -1;
    }

    @media (min-width: 48rem) {
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 0;

        &:before {
            width: 79%;
            height: 120px;
        }
    }

    @media (min-width: 64rem) {
        &:before {
            height: 200px;
            width: 88%;
        }
    }
`;

const NavStyled = styled.nav`
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
        padding-left: 0;
        gap: 2rem;
    }

    a {
        font-weight: var(--fontWeight-700);
        color: var(--mediumGrey);

        &:hover {
            color: var(--veryDarkBlue);
        }
    }

    @media (min-width: 48rem) {
        flex-grow: 2;

        ul {
            flex-direction: row;
            justify-content: space-between;
        }
    }

    @media (min-width: 64rem) {
        ul {
            max-width: 25rem;
            padding-left: 5.25rem;
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
