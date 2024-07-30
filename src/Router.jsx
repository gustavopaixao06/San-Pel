import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/home';
import { Sobre } from './pages/sobre';
import { Contato } from './pages/contato';
import { Servico } from './pages/servico';
import { NossosServicos } from './pages/NossosServicos';




const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />}/>
                <Route path="/servico" element={<Servico />}/>
                <Route path="/nossosServicos" element={<NossosServicos />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;