import { Link } from 'react-router-dom'
import potencial from '../../public/img/potencial.svg'
import '../assets/css/servico5.css'


export function Servico5() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <section className='primeira-section-sobre'>

                <img src="/img/imgSobre.svg" alt="" />

                <div className="back-arrow">
                    <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/backArrow.svg" alt="Back" /></Link>
                </div>

                <div className="conheca-servico5">
                    <h1>Serviços de Cadeiraria e Solda na Indústria</h1>
                    <div className="linhaConheca-servico5"></div>
                    <h3>Excelência e inovação em cada detalhe</h3>
                </div>

            </section>

            <section className="segunda-section-servico">

                <div className='info-servico'>

                    <p>
                        Os serviços de cadeiraria e solda são fundamentais na indústria, desempenhando papéis essenciais na manutenção,
                        reparo e fabricação de equipamentos e estruturas. A cadeiraria envolve a restauração e personalização de assentos
                        e móveis industriais, garantindo conforto e durabilidade. A solda, por sua vez, une metais e materiais termoplásticos,
                        sendo crucial na construção e reparo de estruturas metálicas e equipamentos. Esses serviços são vitais para a 
                        segurança, funcionalidade e eficiência das operações industriais, contribuindo para a longevidade e adaptabilidade 
                        dos componentes industriais.
                    </p>

                </div>

                <div className="topicos-servico">

                    <div className='topico'>
                        <span className="dot-servico"></span>
                        <h4>Qualidade e Precisão</h4>
                    </div>

                    <div className='topico'>
                        <span className="dot-servico"></span>
                        <h4>Segurança e Conformidade</h4>
                    </div>

                    <div className='topico'>
                        <span className="dot-servico"></span>
                        <h4>Inovação Tecnológica</h4>
                    </div>

                    <div className='topico'>
                        <span className="dot-servico"></span>
                        <h4>Compromisso com Prazos</h4>
                    </div>

                    <div className='topico'>
                        <span className="dot-servico"></span>
                        <h4>Parceria com o Cliente</h4>
                    </div>

                </div>
            </section>

            <section className='terceira-section-servico'>

                <div className='imgs-servico'>

                    <img src="/img/soldador1.webp" alt="" />

                    <img src="/img/soldador2.png" alt="" />

                    <img src="/img/soldador3.webp" alt="" />
                </div>

                <div className="botao-servico">
                    <Link to="/contato" onClick={scrollToTop}><button>Faça seu orçamento</button></Link>
                </div>
            </section>


        </>
    )
}