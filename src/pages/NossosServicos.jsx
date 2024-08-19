import { Link } from 'react-router-dom'
import '../assets/css/nossosServicos.css'

export function NossosServicos() {

    const scrollToTop= () => {
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
                    <h1>A San Pel oferece tudo que você precisa!!</h1>
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
                        <Link to="/servico" onClick={scrollToTop}><img className='img-card' src="/img/caldeiraria1.svg" alt="" />
                            <p>Serviços de Caldeiraria Leve, Médio e Grande Porte </p>
                        </Link>
                    </div>

                    <div className='card3'>
                        <Link to="/servico" onClick={scrollToTop}><img className='img-card' src="/img/tubulacao1.svg" alt="" />
                            <p>Tanques e Tubulação de Diversas Finalidades</p>
                        </Link>
                    </div>

                    <div className='card3'>
                        <Link to="/servico" onClick={scrollToTop}><img className='img-card' src="/img/estrutura1.svg" alt="" />
                            <p>Estruturas Metalicas em Geral</p>
                        </Link>
                    </div>

                </div>

                <div className='ns1'>

                    <div className='card3'>
                        <Link to="/servico" onClick={scrollToTop}><img className='img-card' src="/img/equipamentos1.svg" alt="" />
                            <p>Equipamentos Agrícolas</p>
                        </Link>
                    </div>

                    <div className='card3'>
                        <Link to="/servico" onClick={scrollToTop}><img className='img-card' src="/img/industria1.svg" alt="" />
                            <p>Serviços de Caldeiraria e Solda na Indústria </p>
                        </Link>
                    </div>

                    <div className='card3'>
                        <Link to="/servico" onClick={scrollToTop}><img className='img-card' src="/img/alocacao1.svg" alt="" />
                            <p>Alocação de Mão de Obra Especializada</p>
                        </Link>
                    </div>

                </div>

            </section>
        </>
    )
}