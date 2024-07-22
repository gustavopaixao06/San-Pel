import { Link } from 'react-router-dom'
import '../assets/css/sobre.css'

export function Sobre() {
    return (
        <>
            <section className='primeira-section-sobre'>

                <img src="/img/imgSobre.svg" alt="" />
                <div className="conheca-sobre">
                    <h1>CONHEÇA A SAN PEL</h1>
                    <div className="linhaConheca"></div>
                    <h3>E faça parte da nossa família!</h3>
                </div>

            </section>

            <section className='segunda-section-sobre'>

                <div className="descricao-sobre">
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    </p>
                </div>

                <div className='descricao-sobre-img'>
                    <img src="/img/soldador-descricao.png" alt="" />
                </div>
            </section>

            <section className='terceira-section-sobre'>

                <div className="img-terceira">
                    <img src="/img/soldador-oferece.svg" alt="" />
                </div>

                <div className="descricao-oferece">
                    <h2>A San Pel oferece :</h2>
                    <div className="linhaClientes-sobre"></div>

                    <div className='oferece'>
                        <span class="dot"></span>
                        <h4>Experiência</h4>
                    </div>

                    <div className='oferece1'>
                        <span class="dot"></span>
                        <h4>Segurança</h4>
                    </div>

                    <div className='oferece1'>
                        <span class="dot"></span>
                        <h4>Atendimento de qualidade</h4>
                    </div>

                    <div className='oferece1'>
                        <span class="dot"></span>
                        <h4>Comunicação</h4>
                    </div>
                    
                    <div className='oferece1'>
                        <span class="dot"></span>
                        <h4>Equipe qualificada</h4>
                    </div>
                    
                    <div className='oferece1'>
                        <span class="dot"></span>
                        <h4>Equipe qualificada</h4>
                    </div>
                </div>
            </section>
        </>
    )
}