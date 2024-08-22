import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/home';
import { Sobre } from './pages/sobre';
import { Contato } from './pages/contato';
import { Servico } from './pages/servico';
import { NossosServicos } from './pages/NossosServicos';
import { Servico2 } from './pages/servico2';
import { Servico3 } from './pages/servico3';
import { Servico4 } from './pages/servico4';
import { Servico5 } from './pages/servico5';
import { Servico6 } from './pages/servico6';




const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />}/>
                <Route path="/servico" element={<Servico />}/>
                <Route path="/servico2" element={<Servico2/>}/>
                <Route path="/servico3" element={<Servico3/>}/>
                <Route path="/servico4" element={<Servico4/>}/>
                <Route path="/servico5" element={<Servico5/>}/>
                <Route path="/servico6" element={<Servico6/>}/>
                <Route path="/nossosServicos" element={<NossosServicos />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;