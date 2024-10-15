import { Link } from 'react-router-dom'
import potencial from '../../public/img/potencial.svg'
import '../assets/css/contato.css'
import whatsapp from "/img/whatsapp-icon.png";
import instagram from "/img/instagram-icon.svg";

export function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
    });

    const [statusMessage, setStatusMessage] = useState(null);

    // Atualiza os valores do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Função para enviar o formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMessage("Enviando...");

        try {
            const response = await fetch('https://nodemailer-sanpel.onrender.com/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatusMessage("E-mail enviado com sucesso!");
            } else {
                setStatusMessage("Erro ao enviar o e-mail. Tente novamente.");
            }
        } catch (error) {
            setStatusMessage("Erro ao enviar o e-mail. Verifique sua conexão.");
        }
    };

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
                    <form onSubmit={handleSubmit} data-form>
                        <div className="conjunto">
                            <div className="primeiraPart-forms">
                                <div className="input-wrapper">
                                    <label htmlFor="nome">Nome</label>
                                    <input 
                                        type="text" 
                                        name="nome" 
                                        id="nome" 
                                        placeholder="Seu nome aqui*" 
                                        required 
                                        value={formData.nome} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="email">E-mail</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Seu email aqui*" 
                                        required 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                    />
                                </div>
                            </div>
                            <div className="segundaPart-forms">
                                <div className="input-wrapper">
                                    <label htmlFor="telefone">Telefone</label>
                                    <input 
                                        type="tel" 
                                        name="telefone" 
                                        id="telefone" 
                                        placeholder="Seu telefone aqui*" 
                                        required 
                                        value={formData.telefone} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="assunto">Assunto</label>
                                    <input 
                                        type="text" 
                                        name="assunto" 
                                        id="assunto" 
                                        placeholder="Assunto*" 
                                        required 
                                        value={formData.assunto} 
                                        onChange={handleChange} 
                                    />
                                </div>
                            </div>
                            <div className="mensagem">
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea 
                                    name="mensagem" 
                                    id="mensagem" 
                                    placeholder="Mensagem*" 
                                    required 
                                    value={formData.mensagem} 
                                    onChange={handleChange} 
                                ></textarea>
                            </div>
                            <button type="submit" id="botao" data-button>Enviar</button>
                        </div>
                    </form>
                    {statusMessage && <p>{statusMessage}</p>}
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
    );
}