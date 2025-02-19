import Navbar from './Navbar.jsx';

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />

            <div className="home-content">
                <div className="home-content__colLeft">
                    <h1>Assuma o controle total do seu sucesso financeiro</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sapiente in minima soluta veniam numquam molestias illo exercitationem ex quod.</p>
                    <div className="home_content__buttons">
                        <a className="primary-button" href="#">Abra uma conta</a>
                        <a className="secondary-button" href="#">Entre</a>
                    </div>
                    <div className="home-content__tagsResults">
                        <div>
                            <h2>20.000+</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, repellat.</p>
                        </div>
                        <div>
                            <h2>100+</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, culpa!</p>
                        </div>
                        <div>
                            <h2>91.76%</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, adipisci?</p>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );   
};

export default Home;