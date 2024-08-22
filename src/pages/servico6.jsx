import { Link } from 'react-router-dom'
import potencial from '../../public/img/potencial.svg'
import '../assets/css/servico6.css'


export function Servico6() {

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
                    <h1>Alocação de Mão de Obra Especializada</h1>
                    <div className="linhaConheca-servico5"></div>
                    <h3>Excelência e inovação em cada detalhe</h3>
                </div>

            </section>

            <section className="segunda-section-servico">

                <div className='info-servico'>

                    <p>
                        A alocação de mão de obra especializada consiste em direcionar profissionais com habilidades específicas para
                        tarefas ou projetos que exigem alta expertise. Esse processo otimiza a eficiência, garante qualidade no trabalho,
                        e permite que as empresas respondam rapidamente às demandas do mercado, mantendo a competitividade e atendendo 
                        às exigências técnicas dos clientes.
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