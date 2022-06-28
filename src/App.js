import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import About from './pages/About';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
    return (
        <MainStyled>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='about' element={<About />} />
            </Routes>
        </MainStyled>
    );
}

const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;
    padding-inline: var(--mainPaddingMobile);

    @media (min-width: 768px) {
        padding-inline: 97px;
        gap: 12.5rem;
    }
    @media (min-width: 1280px) {
        padding-inline: 165px;
    }
`;

export default App;
