import {Link} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ImgHero from '../assets/image-hero.webp';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />

            <div className="home-content">
                <div className="home-content__colLeft">
                    <img src={ImgHero} alt="Mockup de cartão e celular"/>
                </div>

                <div className="home-content__colRight">
                    <h1>Assuma o Controle Total do Seu Sucesso Financeiro</h1>
                    <p>Tudo o que você precisa à um clique de distância  –  no Internet Banking ou no App, AR Bank é o banco digital ideal para quem busca transparência e segurança.</p>
                    <div className="home_content__buttons">
                        <Link to="/banco" className="primary-button">Abra uma conta <KeyboardDoubleArrowRightIcon /></Link>
                        <a className="secondary-button" href="#">Entre <AccountBalanceIcon /></a>
                    </div>
                    <div className="home-content__tagsResults">
                        <div className="tagsResults-card">
                            <h2>20.000+</h2>
                            <p>Investidores e correntistas satisfeitos.</p>
                        </div>
                        <div className="tagsResults-card">
                            <h2>1.500+</h2>
                            <p>Empresas e pessoas jurídicas registradas.</p>
                        </div>
                        <div className="tagsResults-card">
                            <h2>91.76%</h2>
                            <p>De satisfação com os nossos serviços.</p>
                        </div>
                    </div>   
                </div>
            </div>

            <Footer />
        </div>
    );   
};

export default Home;