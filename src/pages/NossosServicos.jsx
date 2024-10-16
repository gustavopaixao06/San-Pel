import { Link } from 'react-router-dom'
import '../assets/css/nossosServicos.css'
import whatsapp from "/img/whatsapp-icon.png";
import instagram from "/img/instagram-icon.svg";

export function NossosServicos() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <section className='primeira-section-servicos'>

                <img src="/img/imgSobre.svg" alt="" />
                <div className="conheca-servicos">
                    <h1>DESCUBRA NOSSOS SERVIÇOS</h1>
                    <div className="linhaConheca-servicos"></div>
                    <h3>E desfrute de um trabalho de qualidade</h3>
                </div>

            </section>

            <section className='segunda-section-servicos'>

                <div className='descricao-servicos'>
                    <h1>A SAN PEL oferece tudo que você precisa!!</h1>
                </div>

                <div className='info-servicos'>
                    <p>Alocação de mão de obra especializada  temporária, a fim de atender demandas
                        excepcionais, propondo soluções técnicas
                        para as instalações dos nossos clientes.
                    </p>
                </div>
            </section>

            <section className='terceira-section-servicos'>

                <div className='ns'>

                    <div className='card3'>
                        <Link to="/servico" onClick={scrollToTop}><img className='img-card' src="/img/caldeiraria2.svg" alt="" />
                            <p>Serviços de Caldeiraria Leve, Médio e Grande Porte </p>
                        </Link>
                    </div>

                    <div className='card3'>
                        <Link to="/servico2" onClick={scrollToTop}><img className='img-card' src="/img/tubulacao1.svg" alt="" />
                            <p>Tanques e Tubulação de Diversas Finalidades</p>
                        </Link>
                    </div>

                    <div className='card3'>
                        <Link to="/servico3" onClick={scrollToTop}><img className='img-card' src="/img/estrutura1.svg" alt="" />
                            <p>Estruturas Metalicas em Geral</p>
                        </Link>
                    </div>

                </div>

                <div className='ns1'>

                    <div className='card3'>
                        <Link to="/servico4" onClick={scrollToTop}><img className='img-card' src="/img/equipamentos1.svg" alt="" />
                            <p>Equipamentos Agrícolas</p>
                        </Link>
                    </div>

                    <div className='card3'>
                        <Link to="/servico5" onClick={scrollToTop}><img className='img-card' src="/img/industria1.svg" alt="" />
                            <p>Serviços de Caldeiraria e Solda na Indústria </p>
                        </Link>
                    </div>

                    <div className='card3'>
                        <Link to="/servico6" onClick={scrollToTop}><img className='img-card' src="/img/alocacao1.svg" alt="" />
                            <p>Alocação de Mão de Obra Especializada</p>
                        </Link>
                    </div>

                </div>

            </section>

            <section className='terceira-section-servicos-mobile'>

                <div className='ns-mobile'>

                    <div className='card3'>
                        <Link to="/servico" onClick={scrollToTop}><img className='img-card' src="/img/caldeiraria2.svg" alt="" />
                            <p>Serviços de Caldeiraria Leve, Médio e Grande Porte </p>
                        </Link>
                    </div>

                    <div className='card3'>
                        <Link to="/servico2" onClick={scrollToTop}><img className='img-card' src="/img/tubulacao1.svg" alt="" />
                            <p>Tanques e Tubulação de Diversas Finalidades</p>
                        </Link>
                    </div>

                    <div className='card3'>
                        <Link to="/servico3" onClick={scrollToTop}><img className='img-card' src="/img/estrutura1.svg" alt="" />
                            <p>Estruturas Metalicas em Geral</p>
                        </Link>
                    </div>

                    <div className='card3'>
                        <Link to="/servico4" onClick={scrollToTop}><img className='img-card' src="/img/equipamentos1.svg" alt="" />
                            <p>Equipamentos Agrícolas</p>
                        </Link>
                    </div>

                    <div className='card3'>
                        <Link to="/servico5" onClick={scrollToTop}><img className='img-card' src="/img/industria1.svg" alt="" />
                            <p>Serviços de Caldeiraria e Solda na Indústria </p>
                        </Link>
                    </div>

                    <div className='card3'>
                        <Link to="/servico6" onClick={scrollToTop}><img className='img-card' src="/img/alocacao1.svg" alt="" />
                            <p>Alocação de Mão de Obra Especializada</p>
                        </Link>
                    </div>

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