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
                        <p>Oferecendo serviços de alta qualidade para diversos setores desde 2022.</p>
                    </div>

                    <div className="info-localizacao">
                        <img src="/img/localizao.svg" alt=""/>
                        <p>Avenida Nisshimbo do Brasil 2113, vila Camarão, Itapetininga -SP Cep 18205-720</p>
                    </div>


                    <div className="icons">
                        <a href="https://m.facebook.com/61550339120073/" target='_blank'><img src={Face} alt="" /></a>
                        <a href="https://web.whatsapp.com/send?phone=5515981061909" target="_blank"><img src={Whatsapp} alt="" /></a>
                        <a href="https://www.instagram.com/sanpel.caldeiraria/" target='_blank'><img src={Instagram} alt="" /></a>
                    </div>

                </div>

                <div className="fundo">
                    <div className="linha"></div>
                    
                    <p>2024 <span style={{ color: '#FDC204' }}>San Pel</span>. Todos os direitos reservados.</p>
                    
                </div>


            </footer>


        </>
    )
}