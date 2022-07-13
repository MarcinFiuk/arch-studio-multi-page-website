import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { HeadingM, ButtonTemplate } from './../styles/style-template';

function NoMatch() {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <HeadingM as='h2' color='var(--veryDarkBlue)'>
                Sorry - we haven't been able to serve the page you asked for.
            </HeadingM>
            <ButtonTemplate onClick={() => navigate(-1)}>Return</ButtonTemplate>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    text-align: center;
    padding-top: 3.5rem;

    button {
        font-size: 2rem;
        margin-top: 2rem;
        padding: 2rem 4rem;
    }
`;

export default NoMatch;
