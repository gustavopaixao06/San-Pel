import "../Footer/footer.css";
import { Link } from "react-router-dom";
import Face from "../../../public/img/face-icon.svg"
import Whatsapp from "../../../public/img/icon-what.svg"
import Instagram from "../../../public/img/icon-insta.svg"

export function Footer() {

    return (
        <>
            <footer className='rodape'>

                <div className="footer">

                    <figure className='logo-footer'>
                        <Link to="/"><img src="/img/logo-sanpel.svg" alt="Logo" /></Link>
                    </figure>

                    <div className="info">
                        <p>Oferecendo serviços de alta qualidade para diversos setores desde 2020.</p>
                    </div>

                    <div className="info-localizacao">
                        <img src="/img/localizao.svg" alt=""/>
                        <p>Rua, Número, Bairro, Cidade, Estado, CEP</p>
                    </div>


                    <div className="icons">
                        <a href="" target='_blank'><img src={Face} alt="" /></a>
                        <a href="" target='_blank'><img src={Whatsapp} alt="" /></a>
                        <a href="" target='_blank'><img src={Instagram} alt="" /></a>
                    </div>

                </div>

                <div className="fundo">
                    <div className="linha"></div>
                    
                    <p>2024 San Pel. Todos os direitos reservados.</p>
                    
                </div>


            </footer>


        </>
    )
}