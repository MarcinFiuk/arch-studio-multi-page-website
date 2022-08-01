import styled from 'styled-components';

function Error({ errorMessage }) {
    return (
        <Wrapper>
            <p>{errorMessage}</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: var(--white);
    transform: translateY(100%);

    p {
        font-weight: var(--fontWeight-700);
        font-size: 1.125rem;
        line-height: 22px;
        letter-spacing: -0.3px;
        color: var(--red);
    }
`;
export default Error;
