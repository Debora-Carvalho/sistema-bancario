import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ImgHero from '../assets/image-hero.webp';

const SistemaBancario = () => {
  return (
      <div className="banco-container">
        <Navbar />

        <div className="banco-container-content">
            <div className="banco-container-content__colLeft">
                <img src={ImgHero} alt="Mockup de cartão e celular"/>
            </div>   

            <div className="banco-container-content__colRight">
              <h1>Abra sua conta</h1>
              <p>Em apenas alguns minutos, você realiza seu cadastro e já pode aproveitar todos os benefícios de uma conta AR Bank!</p>
                <form action="">
                  <div className="form-container-inputs">
                    <div className="form__personal-infos">
                      <label>Nome completo</label>
                      <input type="text" name="" id="" />

                      <label>CPF</label>
                      <input type="number" name="" id="" />    

                      <label>Data de nascimento</label>
                      <input type="date" name="" id="" />       

                      <label>Telefone</label>
                      <input type="number" name="" id="" />  

                      <label>E-mail</label>
                      <input type="text" name="" id="" /> 
                    </div>
                    
                    <div className="form__bank-infos">
                      <label>Nome da agência</label>
                      <input type="text" name="" id="" />

                      <label>Número da agência</label>
                      <input type="number" name="" id="" />  

                      <label>Nome do banco</label>
                      <input type="text" name="" id="" />      

                      <label>Número do banco</label>
                      <input type="number" name="" id="" />   

                      <label>Selecione o tipo de conta</label>
                      <select name="" id="" required>
                        <option value="1">Conta corrente</option>
                        <option value="2">Conta poupança</option>
                        <option value="3">Conta conjunta</option>
                      </select>                       
                    </div> 
                  </div>         

                  <button type="submit" className="primary-button">Abrir conta</button> 
                </form>
            </div>   
        </div>    

        <Footer /> 
      </div>
  );   
};

export default SistemaBancario;
