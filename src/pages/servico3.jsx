import { Link } from 'react-router-dom'
import potencial from '../../public/img/potencial.svg'
import '../assets/css/servico3.css'


export function Servico3() {

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

                <div className="conheca-servico3">
                    <h1>Estruturas Metalicas em Geral</h1>
                    <div className="linhaConheca-servico3"></div>
                    <h3>Excelência e inovação em cada detalhe</h3>
                </div>

            </section>

            <section className="segunda-section-servico">

                <div className='info-servico'>

                    <p>
                        As estruturas metálicas são essenciais na construção civil e na indústria devido
                        à sua versatilidade, durabilidade e eficiência. Utilizadas em projetos como edifícios,
                        pontes e galpões, elas permitem designs complexos e rápidos de construir, sem comprometer
                        a resistência. O aço, principal material usado, é altamente resistente, durável e 100% reciclável,
                        contribuindo para a sustentabilidade. Além disso, a construção com estruturas metálicas é rápida e econômica,
                        tornando-as ideais para uma ampla gama de aplicações, desde projetos industriais até grandes obras arquitetônicas.
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