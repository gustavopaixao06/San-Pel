import { Link } from 'react-router-dom'
import potencial from '../../public/img/potencial.svg'
import '../assets/css/servico2.css'


export function Servico2() {

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

                <div className="conheca-servico">
                    <h1>Tanques e Tubulação de Diversas Finalidades</h1>
                    <div className="linhaConheca-servico"></div>
                    <h3>Excelência e inovação em cada detalhe</h3>
                </div>

            </section>

            <section className="segunda-section-servico">

                <div className='info-servico'>

                    <p>
                        Tanto os tanques quanto as tubulações devem ser projetados e fabricados conforme normas técnicas rigorosas, 
                        como ASME, API, e outras que regulam a segurança e a qualidade na engenharia industrial. Além disso, é
                        fundamental que esses componentes sejam submetidos a rigorosos testes e inspeções durante e após a fabricação, 
                        garantindo que estejam aptos a suportar as condições operacionais mais desafiadoras.
                        Em resumo, os tanques e tubulações de diversas finalidades são componentes indispensáveis para o bom 
                        funcionamento de sistemas industriais complexos. A escolha e o desenvolvimento desses equipamentos requerem 
                        uma abordagem técnica detalhada, garantindo que cada projeto atenda às necessidades específicas de armazenamento e
                        transporte, enquanto mantém a segurança, eficiência e durabilidade como prioridades absolutas.
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