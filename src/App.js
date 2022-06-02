import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';

function App() {
    return (
        <MainStyled>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </MainStyled>
    );
}

const MainStyled = styled.main`
    padding-inline: 32px;

    @media (min-width: 768px) {
        padding-inline: 97px;
    }
    @media (min-width: 1280px) {
        padding-inline: 165px;
    }
`;

export default App;
