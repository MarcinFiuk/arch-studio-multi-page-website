import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import IconArrow from './icons/IconArrow';

function LinkButton({ children, to, custom }) {
    return (
        <LinkStyled to={to} custom={custom}>
            {children}
            <span>
                <IconArrow />
            </span>
        </LinkStyled>
    );
}

const LinkStyled = styled(Link)`
    background-color: var(--veryDarkBlue);
    text-decoration: none;
    color: var(--white);
    font-weight: var(--fontWeight-700);
    font-size: 1.125rem;
    line-height: 1.5625rem;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 25px 32px 22px 37px;
    transition: background-color 0.2s ease-in;

    ${({ custom }) =>
        custom &&
        css`
            grid-area: link;
            width: 100%;
            justify-content: center;

            @media (min-width: 48rem) {
                width: fit-content;
                justify-self: end;
            }
        `}

    span {
        display: block;
    }

    &:hover {
        background-color: var(--darkGrey);
    }
`;

export default LinkButton;
