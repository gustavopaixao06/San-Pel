import { Link } from 'react-router-dom'
import potencial from '../../public/img/potencial.svg'
import '../assets/css/servico4.css'
import whatsapp from "/img/whatsapp-icon.png";
import instagram from "/img/instagram-icon.svg";


export function Servico4() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <section className='primeira-section-sobre'>

                <img src="/img/imgSobre.svg" alt="" />

                <div className="back-arrow">
                    <Link to="/nossosServicos" onClick={scrollToTop}><img src="/img/backArrow.svg" alt="Back" /></Link>
                </div>

                <div className="conheca-servico4">
                    <h1>Equipamentos Agrícolas</h1>
                    <div className="linhaConheca-servico4"></div>
                    <h3>Excelência e inovação em cada detalhe</h3>
                </div>

            </section>

            <section className="segunda-section-servico">

                <div className='info-servico'>

                    <p>
                        A produção e reforma de equipamentos agrícolas são essenciais para manter a eficiência e a 
                        longevidade das operações no campo. A produção envolve o uso de materiais de alta qualidade e 
                        tecnologia avançada para fabricar máquinas robustas e eficientes, como tratores e colheitadeiras. 
                        A reforma, por sua vez, prolonga a vida útil dos equipamentos, substituindo peças desgastadas e atualizando
                        sistemas. Ambas as práticas garantem máquinas confiáveis, reduzem custos e promovem a sustentabilidade, contribuindo 
                        para o aumento da produtividade agrícola e a continuidade das operações.
                    </p>

                </div>

                <div className="topicos-servico">

                    <div className='topico'>
                        <span className="dot-servico"></span>
                        <h4>Qualidade e Precisão</h4>
                    </div>

                    <div className='topico'>
                        <span className="dot-servico"></span>
                        <h4>Segurança e Conformidade</h4>
                    </div>

                    <div className='topico'>
                        <span className="dot-servico"></span>
                        <h4>Inovação Tecnológica</h4>
                    </div>

                    <div className='topico'>
                        <span className="dot-servico"></span>
                        <h4>Compromisso com Prazos</h4>
                    </div>

                    <div className='topico'>
                        <span className="dot-servico"></span>
                        <h4>Parceria com o Cliente</h4>
                    </div>

                </div>
            </section>

            <section className='terceira-section-servico'>

                <div className='imgs-servico'>

                    <img src="/img/agricola1.svg" alt="" />

                    <img src="/img/agricola2.svg" alt="" />

                    <img src="/img/agricola3.svg" alt="" />
                </div>

                <div className="botao-servico">
                    <Link to="/contato" onClick={scrollToTop}><button>Faça seu orçamento</button></Link>
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