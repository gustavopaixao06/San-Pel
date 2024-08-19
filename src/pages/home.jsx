import { Link } from 'react-router-dom'
import potencial from '../../public/img/potencial.svg'
import '../assets/css/home.css'


export function Home() {

    const imageStyle = {
        opacity: 0.6 // Ajuste o valor conforme necessário
    };

    const scrollToTop= () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <section className='primeira-secao'>

                <img src="/img/img-1.svg" alt="" />
                <div className='info-home'>
                    <h1>Excelência em qualidade e ponto</h1>
                    <div className="linha-home"></div>
                    <p>Na <span style={{ color: '#FDC204' }}>San Pel</span>, somos especialistas em caldeiraria e solda, oferecendo soluções de alta qualidade e precisão para atender às necessidades dos nossos clientes.</p>
                </div>
            </section>

            <section className='segunda-secao'>

                <div className="sobreHome">
                    <h1>SOBRE NÓS</h1>
                    <div className="linhaSobre"></div>

                    <div className="descricao">

                        <div className="soldador"><img src="/img/img1.jpg" alt="" /></div>

                        <div className="paragrafo">
                            <p>
                            Bem-vindo à nossa empresa de calderaria e solda, onde tradição e inovação se encontram
                             para oferecer soluções robustas e de alta qualidade. Com anos de experiência no mercado,
                              nos especializamos em fornecer serviços personalizados, atendendo às necessidades específicas
                               de cada cliente, desde pequenos projetos até grandes empreendimentos industriais.
                               
                            </p>

                            <div className="botao">
                                <Link to="/sobre" onClick={scrollToTop}><button>Saiba mais!</button></Link>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className='terceira-secao'>

                <div className="servicos">
                    <h1>NOSSOS SERVIÇOS</h1>
                    <div className="linhaServico"></div>

                    <p>Descubra tudo que a <span style={{ color: '#FDC204' }}>San Pel</span> pode te oferecer</p>
                </div>

                <div className="cardsServicos">
                    <div className="part1">
                        <div className="card1">
                            <img className='imgServico' src="/img/caldeiraria.svg" alt="" style={imageStyle} />
                            <p>Serviços de Caldeiraria Leve, Médio e Grande Porte </p>
                            <div className="saibaMais">
                                <Link to="/nossosServicos" onClick={scrollToTop}>Saiba mais</Link>
                                <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/seta.svg" alt="" /></Link>
                            </div>
                        </div>

                        <div className="card1">
                            <img className='imgServico' src="/img/tubulacao.svg" alt="" style={imageStyle} />
                            <p>Tanques e Tubulação de Diversas Finalidades</p>
                            <div className="saibaMais">
                                <Link to="/nossosServicos" onClick={scrollToTop}>Saiba mais</Link>
                                <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/seta.svg" alt="" /></Link>
                            </div>
                        </div>

                        <div className="card1">
                            <img className='imgServico' src="/img/estrutura.svg" alt="" style={imageStyle} />
                            <p>Estruturas Metalicas em Geral</p>
                            <div className="saibaMais">
                                <Link to="/nossosServicos" onClick={scrollToTop}>Saiba mais</Link>
                                <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/seta.svg" alt="" /></Link>
                            </div>
                        </div>

                        <div className="card1">
                            <img className='imgServico' src="/img/equipamentos.svg" alt="" style={imageStyle} />
                            <p>Equipamentos Agrícolas</p>
                            <div className="saibaMais">
                                <Link to="/nossosServicos" onClick={scrollToTop}>Saiba mais</Link>
                                <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/seta.svg" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                    {/* 
                    <div className="part2">
                        <div className="card1">
                            <img className='imgServico' src="/img/servico1.svg" alt="" />
                            <p>Serviço 5</p>
                            <div className="saibaMais">
                                <a href="">Saiba mais</a>
                                <Link><img src="/img/seta.svg" alt="" /></Link>
                            </div>
                        </div>

                        <div className="card1">
                            <img className='imgServico' src="/img/servico1.svg" alt="" />
                            <p>Serviço 6</p>
                            <div className="saibaMais">
                                <a href="">Saiba mais</a>
                                <Link><img src="/img/seta.svg" alt="" /></Link>
                            </div>
                        </div>

                        <div className="card1">
                            <img className='imgServico' src="/img/servico1.svg" alt="" />
                            <p>Serviço 7</p>
                            <div className="saibaMais">
                                <a href="">Saiba mais</a>
                                <Link><img src="/img/seta.svg" alt="" /></Link>
                            </div>
                        </div>

                        <div className="card1">
                            <img className='imgServico' src="/img/servico1.svg" alt="" />
                            <p>Serviço 8</p>
                            <div className="saibaMais">
                                <a href="">Saiba mais</a>
                                <Link><img src="/img/seta.svg" alt="" /></Link>
                            </div>
                        </div>
                    </div>*/}

                    <div className="botao-servico">
                        <Link to="/nossosServicos" onClick={scrollToTop}><button>Ver todos</button></Link>
                    </div>

                </div>

            </section>

            <section className='quarta-secao'>

                <div className="clientes">
                    <h2>NOSSOS CLIENTES</h2>
                    <div className="linhaClientes"></div>
                </div>

                <div className="carrossel">

                    <div className="fornecedores">
                        <div className="samsung">
                            <a href="https://www.samsung.com/br/offer/?utm_source=google&utm_medium=ppc&utm_campaign=br_pd_ppc_google_multi-multi_ecommerce_cad3-a0009-mx-institucional_text_multi-aon_paid-cdm-pfm-ID92363434203-*samsung*&utm_content=text&utm_term=samsung&cid=br_pd_ppc_google_multi-multi_ecommerce_cad3-a0009-mx-institucional_text_multi-aon_paid-cdm-pfm-ID92363434203-*samsung*&keeplink=true&gad_source=1&gclid=CjwKCAjwyJqzBhBaEiwAWDRJVCoXBQeDjeH22CbYO2DIL9nergcvq8ps9E15poJ6SVxGFJyH5TMINxoCJEMQAvD_BwE" target='_blank'><img src={potencial} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://waveone.com.br/" target='_blank'><img src={potencial} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://sonos.com.br/" target='_blank'><img src={potencial} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://www.crestron.com/" target='_blank'><img src={potencial} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://br.yamaha.com/pt/products/audio_visual/index.html" target='_blank'><img src={potencial} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://www.stealthacoustics.com/" target='_blank'><img src={potencial} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://aataudio.com.br/" target='_blank'><img src={potencial} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="https://originacoustics.com/" target='_blank'><img src={potencial} alt="" /></a>
                        </div>
                    </div>

                    <div className="fornecedores">
                        <div className="samsung">
                            <img src={potencial} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={potencial} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={potencial} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={potencial} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={potencial} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={potencial} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={potencial} alt="" />
                        </div>

                        <div className="samsung">
                            <img src={potencial} alt="" />
                        </div>
                    </div>


                </div> {/* fechando div caroucel */}

            </section> {/*  fechando quarta seção */}

            <section className='quinta-secao'>

                <div className="projetos-realizados">
                    <h2>PROJETOS REALIZADOS</h2>
                    <div className="linhaProjetos"></div>
                </div>

                <div className='projetos'>
                    <img src="/img/projetos.png" alt="" />
                </div>

            </section>
        </>
    )
}