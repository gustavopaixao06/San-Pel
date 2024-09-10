import { Link } from 'react-router-dom'
import potencial from '../../public/img/potencial.svg'
import '../assets/css/contato.css'

export function Contato() {

    class FormSubmit {
        constructor(settings) {
            this.settings = settings;
            this.form = document.querySelector(settings.form);
            this.formButton = document.querySelector(settings.button);
            if (this.form) {
                this.url = this.form.getAttribute("action");
            }
            this.sendForm = this.sendForm.bind(this);
        }

        displaySuccess() {
            this.form.innerHTML = this.settings.success;
        }

        displayError() {
            this.form.innerHTML = this.settings.error;
        }

        getFormObject() {
            const formObject = {};
            const fields = this.form.querySelectorAll("[name]");
            fields.forEach((field) => {
                formObject[field.getAttribute("name")] = field.value;
            });
            return formObject;
        }

        async sendForm(event) {
            event.preventDefault(); // Prevenir o comportamento padrão de envio do formulário
            this.formButton.disabled = true;
            this.formButton.innerText = "Enviando...";

            try {
                const response = await fetch(this.url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify(this.getFormObject()),
                });

                if (response.ok) {
                    this.displaySuccess();
                } else {
                    this.displayError();
                }
            } catch (error) {
                this.displayError();
                console.error("Erro ao enviar o formulário:", error);
            } finally {
                this.formButton.disabled = false;
                this.formButton.innerText = "Enviar";
            }
        }

        init() {
            if (this.form) {
                this.form.addEventListener("submit", this.sendForm); // Adicionando o evento 'submit' diretamente no formulário
            }
            return this;
        }
    }

    const formSubmit = new FormSubmit({
        form: "[data-form]",
        button: "[data-button]",
        success: "<h1 class='success'>Sucesso</h1>",
        error: "<h1 class='error'>Não foi possível enviar a mensagem. Por favor, tente novamente mais tarde.</h1>",
    });
    formSubmit.init();

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
                            <p>+55 15 98106-1909</p>
                        </div>
                    </div>

                    <div className='card-what1'>
                        <div className="primeiraPart-what1">
                            <img src="/img/icon-mail.svg" alt="" />
                            <p>Nosso E-mail</p>
                        </div>

                        <div className="segundaPart-what1">
                            <p>edgar@sanpelcaldsolda.com.br</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='terceira-secao-contato'>
                <div className="mensagem">
                    <h4>Mande uma mensagem</h4>
                    <div className="linhaConheca-mensagem"></div>
                </div>

                <div className="form">
                    <form action="https://formsubmit.co/ajax/paixaogabriel246@gmail.com" method="POST" data-form>
                        <div className="conjunto">
                            <div className="primeiraPart-forms">
                                <div className="input-wrapper">
                                    <label htmlFor="nome">Nome</label>
                                    <input type="text" name="nome" id="nome" placeholder="Seu nome aqui*" required />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" name="email" id="email" placeholder="Seu email aqui*" required />
                                </div>
                            </div>
                            <div className="segundaPart-forms">
                                <div className="input-wrapper">
                                    <label htmlFor="telefone">Telefone</label>
                                    <input type="tel" name="telefone" id="telefone" placeholder="Seu telefone aqui*" required />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="assunto">Assunto</label>
                                    <input type="text" name="assunto" id="assunto" placeholder="Assunto*" required />
                                </div>
                            </div>
                            <div className="mensagem">
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea name="mensagem" id="mensagem" placeholder="Mensagem*" required></textarea>
                            </div>
                            <button type="submit" id="botao" data-button>Enviar</button>
                        </div>
                    </form>
                </div>
            </section>

        </>
    );
}
