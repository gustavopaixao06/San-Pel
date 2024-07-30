import { Link } from 'react-router-dom'
import potencial from '../../public/img/potencial.svg'
import '../assets/css/servico.css'


export function Servico() {
    return (
        <>
            <section className='primeira-section-sobre'>

                <img src="/img/imgSobre.svg" alt="" />

                <div className="back-arrow">
                    <a href="/nossosServicos"><img src="/img/backArrow.svg" alt="Back" /></a>
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
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                        combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
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
                    <a href="/contato"><button>Faça seu orçamento</button></a>
                </div>
            </section>


        </>
    )
}