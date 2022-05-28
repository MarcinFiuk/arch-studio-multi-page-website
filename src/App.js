import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

function App() {
    return (
        <mine>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </mine>
    );
}

export default App;
