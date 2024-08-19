import { Link } from 'react-router-dom'
import '../assets/css/sobre.css'

export function Sobre() {
    return (
        <>
            <section className='primeira-section-sobre'>

                <img src="/img/imgSobre.svg" alt="" />
                <div className="conheca-sobre">
                    <h1>CONHEÇA A <span style={{ color: '#FDC204' }}>SAN PEL</span></h1>
                    <div className="linhaConheca"></div>
                    <h3>E faça parte da nossa empresa!</h3>
                </div>

            </section>

            <section className='segunda-section-sobre'>

                <div className="descricao-sobre">
                    <p>
                        Bem-vindo à nossa empresa de calderaria e solda, onde tradição e inovação se
                        encontram para oferecer soluções robustas e de alta qualidade. Com anos de
                        experiência no mercado, nos especializamos em fornecer serviços personalizados,
                        atendendo às necessidades específicas de cada cliente, desde pequenos projetos
                        até grandes empreendimentos industriais.
                        Nossa equipe é formada por profissionais altamente capacitados, comprometidos
                         com a excelência em cada etapa do processo, desde o planejamento até a entrega 
                         final. Utilizamos as mais avançadas técnicas de soldagem e calderaria, garantindo
                          produtos duráveis, seguros e dentro das normas de qualidade mais rigorosas.
                    </p>
                </div>

                <div className='descricao-sobre-img'>
                    <img src="/img/img3.jpg" alt="" />
                </div>
            </section>

            <section className='terceira-section-sobre'>

                <div className="img-terceira">
                    <img src="/img/img2.jpg" alt="" />
                </div>

                <div className="descricao-oferece">
                    <h2>A San Pel oferece :</h2>
                    <div className="linhaClientes-sobre"></div>

                    <div className='oferece'>
                        <span className="dot"></span>
                        <h4>Experiência</h4>
                    </div>

                    <div className='oferece1'>
                        <span className="dot"></span>
                        <h4>Segurança</h4>
                    </div>

                    <div className='oferece1'>
                        <span className="dot"></span>
                        <h4>Atendimento de qualidade</h4>
                    </div>

                    <div className='oferece1'>
                        <span className="dot"></span>
                        <h4>Comunicação</h4>
                    </div>

                    <div className='oferece1'>
                        <span className="dot"></span>
                        <h4>Equipe qualificada</h4>
                    </div>

                </div>
            </section>
        </>
    )
}