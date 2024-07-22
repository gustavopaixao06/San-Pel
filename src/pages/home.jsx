import { Link } from 'react-router-dom'
import potencial from '../../public/img/potencial.svg'
import '../assets/css/home.css'


export function Home() {
    return (
        <>
            <section className='primeira-secao'>

                <img src="/img/img-1.svg" alt="" />
                <div className='info-home'>
                    <h1>Excelência em qualidade e ponto</h1>
                    <div className="linha-home"></div>
                    <p>Na San Pel, somos especialistas em caldeiraria e solda, oferecendo soluções de alta qualidade e precisão para atender às necessidades dos nossos clientes.</p>
                </div>
            </section>

            <section className='segunda-secao'>

            </section>

            <section className='segunda-secao'>

                <div className="sobreHome">
                    <h1>SOBRE NÓS</h1>
                    <div className="linhaSobre"></div>

                    <div className="descricao">

                        <div className="soldador"><img src="/img/soldador.svg" alt="" /></div>

                        <div className="paragrafo">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                            <div className="botao">
                               <a href="/sobre"><button>Saiba mais!</button></a> 
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className='terceira-secao'>

                <div className="servicos">
                    <h1>NOSSOS SERVIÇOS</h1>
                    <div className="linhaServico"></div>

                    <p>Descubra tudo que a San Pel pode te oferecer</p>
                </div>

                <div className="cardsServicos">
                    <div className="part1">
                        <div className="card1">
                            <img className='imgServico' src="/img/servico1.svg" alt="" />
                            <p>Serviço 1</p>
                            <div className="saibaMais">
                                <a href="">Saiba mais</a>
                                <Link><img src="/img/seta.svg" alt="" /></Link>
                            </div>
                        </div>

                        <div className="card1">
                            <img className='imgServico' src="/img/servico1.svg" alt="" />
                            <p>Serviço 2</p>
                            <div className="saibaMais">
                                <a href="">Saiba mais</a>
                                <Link><img src="/img/seta.svg" alt="" /></Link>
                            </div>
                        </div>

                        <div className="card1">
                            <img className='imgServico' src="/img/servico1.svg" alt="" />
                            <p>Serviço 3</p>
                            <div className="saibaMais">
                                <a href="">Saiba mais</a>
                                <Link><img src="/img/seta.svg" alt="" /></Link>
                            </div>
                        </div>

                        <div className="card1">
                            <img className='imgServico' src="/img/servico1.svg" alt="" />
                            <p>Serviço 4</p>
                            <div className="saibaMais">
                                <a href="">Saiba mais</a>
                                <Link><img src="/img/seta.svg" alt="" /></Link>
                            </div>
                        </div>
                    </div>

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