import { Link } from 'react-router-dom'
import potencial from '../../public/img/potencial.svg'
import dexco from '../../public/img/dexco.svg'
import uniarea from '../../public/img/uniarea.svg'
import imgSoldador from '../../public/img/imgSoldador.svg'
import bekaert from '../../public/img/bekaert.svg'
import castrolandia from '../../public/img/castrolandia.svg'
import silvicultura from '../../public/img/silvicultura.svg'
import '../assets/css/home.css'
import whatsapp from "/img/whatsapp-icon.png";
import instagram from "/img/instagram-icon.svg";




export function Home() {

    const imageStyle = {
        opacity: 0.9 // Ajuste o valor conforme necessário
    };

    const scrollToTop = () => {
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
                    <h1>Excelência em qualidade e pont <img src={imgSoldador} alt="" id='imgSoldador' /></h1>
                    <div className="linha-home"></div>
                    <p>Na <span style={{ color: '#FDC204' }}>SAN PEL</span>, somos especialistas em caldeiraria e solda, oferecendo soluções de alta qualidade e precisão para atender às necessidades dos nossos clientes.</p>
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
                        <Link to="/nossosServicos" onClick={scrollToTop}>
                            <div className="card1">
                                <img className='imgServico1' src="/img/calderaria.jpg" alt="" style={imageStyle} />
                                <p>Serviços de Caldeiraria Leve, Médio e Grande Porte </p>
                                <div className="saibaMais1">
                                    <Link to="/nossosServicos" onClick={scrollToTop}>Saiba mais</Link>
                                    <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/seta.svg" alt="" /></Link>
                                </div>
                            </div>
                        </Link>

                        <Link to="/nossosServicos" onClick={scrollToTop}>
                            <div className="card1">
                                <img className='imgServico' src="/img/tubulacao.svg" alt="" style={imageStyle} />
                                <p>Tanques e Tubulação de Diversas Finalidades</p>
                                <div className="saibaMais">
                                    <Link to="/nossosServicos" onClick={scrollToTop}>Saiba mais</Link>
                                    <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/seta.svg" alt="" /></Link>
                                </div>
                            </div>
                        </Link>

                        <Link to="/nossosServicos" onClick={scrollToTop}>
                            <div className="card1">
                                <img className='imgServico' src="/img/estrutura.svg" alt="" style={imageStyle} />
                                <p>Estruturas Metalicas em Geral</p>
                                <div className="saibaMais">
                                    <Link to="/nossosServicos" onClick={scrollToTop}>Saiba mais</Link>
                                    <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/seta.svg" alt="" /></Link>
                                </div>
                            </div>
                        </Link>

                        <Link to="/nossosServicos" onClick={scrollToTop}>
                            <div className="card1">
                                <img className='imgServico' src="/img/equipamentos.svg" alt="" style={imageStyle} />
                                <p>Equipamentos Agrícolas</p>
                                <div className="saibaMais">
                                    <Link to="/nossosServicos" onClick={scrollToTop}>Saiba mais</Link>
                                    <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/seta.svg" alt="" /></Link>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="part1-mobile">

                        <div>
                            <Link to="/nossosServicos" onClick={scrollToTop}>
                                <div className="card1">
                                    <img className='imgServico1' src="/img/calderaria.jpg" alt="" style={imageStyle} />
                                    <p>Serviços de Caldeiraria Leve, Médio e Grande Porte </p>
                                    <div className="saibaMais1">
                                        <Link to="/nossosServicos" onClick={scrollToTop}>Saiba mais</Link>
                                        <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/seta.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/nossosServicos" onClick={scrollToTop}>
                                <div className="card1">
                                    <img className='imgServico' src="/img/tubulacao.svg" alt="" style={imageStyle} />
                                    <p>Tanques e Tubulação de Diversas Finalidades</p>
                                    <div className="saibaMais">
                                        <Link to="/nossosServicos" onClick={scrollToTop}>Saiba mais</Link>
                                        <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/seta.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div>
                            <Link to="/nossosServicos" onClick={scrollToTop}>
                                <div className="card1">
                                    <img className='imgServico' src="/img/estrutura.svg" alt="" style={imageStyle} />
                                    <p>Estruturas Metalicas em Geral</p>
                                    <div className="saibaMais">
                                        <Link to="/nossosServicos" onClick={scrollToTop}>Saiba mais</Link>
                                        <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/seta.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/nossosServicos" onClick={scrollToTop}>
                                <div className="card1">
                                    <img className='imgServico' src="/img/equipamentos.svg" alt="" style={imageStyle} />
                                    <p>Equipamentos Agrícolas</p>
                                    <div className="saibaMais">
                                        <Link to="/nossosServicos" onClick={scrollToTop}>Saiba mais</Link>
                                        <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/seta.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </Link>
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
                            <a href="" target='_blank'><img id='bekaert' src={bekaert} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="" target='_blank'><img src={dexco} alt="" id='dexco' /></a>
                        </div>

                        <div className="samsung">
                            <a href="" target='_blank'><img id='pontencial' src={potencial} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="" target='_blank'><img id='uniarea' src={uniarea} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="" target='_blank'><img id='castrolandia' src={castrolandia} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="" target='_blank'><img id='silvicultura' src={silvicultura} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="" target='_blank'><img id='bekaert' src={potencial} alt="" /></a>
                        </div>

                        <div className="samsung">
                            <a href="" target='_blank'><img id='bekaert' src={potencial} alt="" /></a>
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

            <div className='fixed-bottom'>
                <a id='botaoFixo' href="https://web.whatsapp.com/send?phone=5515981061909" target='_blank' rel='noopener noreferrer'>
                    <img src={whatsapp} className="custom-whatsapp-img" alt="WhatsApp" />

                </a>
                <a id='botaoFixo' href="https://www.instagram.com/sanpel.caldeiraria/" target='blank'>
                    <img src={instagram} className="custom-whatsapp-img" alt="WhatsApp" />
                </a>
            </div>

        </>
    )
}