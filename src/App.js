import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <MainStyled>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='portfolio' element={<Portfolio />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
            </MainStyled>
            <Footer />
        </>
    );
}

const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;
    padding-inline: var(--mainPaddingMobile);
    padding-block: 4.5rem;

    @media (min-width: 768px) {
        padding-inline: 97px;
        gap: 12.5rem;
        padding-block: 12.5rem;
    }

    @media (min-width: 1280px) {
        padding-inline: 165px;
    }
`;

export default App;
