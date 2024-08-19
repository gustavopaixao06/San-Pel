import { Link } from 'react-router-dom'
import potencial from '../../public/img/potencial.svg'
import '../assets/css/contato.css'


export function Contato() {
    return (
        <>
            <section className='primeira-section-sobre'>

                <img src="/img/imgSobre.svg" alt="" />
                <div className="conheca-contato">
                    <h1>FALE CONOSCO</h1>
                    <div className="linhaConheca-contato"></div>
                    <h3>E faça seu orçamento</h3>
                </div>

            </section>

            <section className='segunda-secao-contato'>

                <div className="cartContato">
                    <div className='card-what'>
                        <div className="primeiraPart-what">
                            <img src="/img/icon-what.svg" alt="" />
                            <p>Nosso Whatsapp</p>
                        </div>
                        <div className="segundaPart-what">
                            <p>+55 11 00000-0000</p>
                        </div>
                    </div>

                    <div className='card-what1'>
                        <div className="primeiraPart-what1">
                            <img src="/img/icon-what.svg" alt="" />
                            <p>Nosso E-mail</p>
                        </div>

                        <div className="segundaPart-what1">
                            <p>sanpeloficial@gmail.com</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className='terceira-secao-contato'>

                <div className="mensagem">
                    <h4>Mande uma mensagem</h4>
                    <div className="linhaConheca-mensagem"></div>
                </div>

                <div class="form">
                    <form action="https://formsubmit.co/ajax/paixaogabriel246@gmail.com" method="POST">
                        <div class="conjunto">
                            <div class="primeiraPart-forms">
                                <div class="input-wrapper">
                                    <label for="nome">Nome</label>
                                    <input type="text" name="nome" id="nome" placeholder="Seu nome aqui*" required />
                                </div>
                                <div class="input-wrapper">
                                    <label for="email">E-mail</label>
                                    <input type="email" name="email" id="email" placeholder="Seu email aqui*" required />
                                </div>
                            </div>
                            <div class="segundaPart-forms">
                                <div class="input-wrapper">
                                    <label for="telefone">Telefone</label>
                                    <input type="tel" name="telefone" id="telefone" placeholder="Seu telefone aqui*" required />
                                </div>
                                <div class="input-wrapper">
                                    <label for="assunto">Assunto</label>
                                    <input type="text" name="assunto" id="assunto" placeholder="Assunto*" required />
                                </div>
                            </div>
                            <div class="mensagem">
                                <label for="mensagem">Mensagem</label>
                                <textarea name="mensagem" id="mensagem" placeholder="Mensagem*" required></textarea>
                            </div>
                            <button type="submit" id="botao">Enviar</button>
                        </div>
                    </form>
                </div>




            </section>

        </>
    )
}