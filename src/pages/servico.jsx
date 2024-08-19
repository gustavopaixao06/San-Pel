import { Link } from 'react-router-dom'
import potencial from '../../public/img/potencial.svg'
import '../assets/css/servico.css'


export function Servico() {

    const scrollToTop= () => {
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

                <div className="conheca-servico">
                    <h1>Serviços de Caldeiraria Leve, Médio e Grande Porte</h1>
                    <div className="linhaConheca-servico"></div>
                    <h3>Excelência e inovação em cada detalhe</h3>
                </div>

            </section>

            <section className="segunda-section-servico">

                <div className='info-servico'>

                    <p>
                    Na nossa empresa, oferecemos serviços de caldeiraria de alta qualidade, abrangendo projetos de leve,
                     médio e grande porte. Com uma abordagem personalizada, atendemos uma ampla gama de indústrias,
                      garantindo que cada projeto seja realizado com precisão, segurança e eficiência.
                      Independente do porte do seu projeto, estamos prontos para oferecer soluções que combinam expertise técnica,
                       inovação e compromisso com a qualidade. Trabalhamos lado a lado com nossos clientes, assegurando que cada serviço
                        de caldeiraria seja concluído com precisão e dentro dos prazos estipulados.
                    </p>

                </div>

                <div className="topicos-servico">

                    <div className='topico'>
                        <span className="dot-servico"></span>
                        <h4>Tópicos importantes a respeito do serviço;</h4>
                    </div>

                    <div className='topico'>
                        <span className="dot-servico"></span>
                        <h4>Tópicos importantes a respeito do serviço;</h4>
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