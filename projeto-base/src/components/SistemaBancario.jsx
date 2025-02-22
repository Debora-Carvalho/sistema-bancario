import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ImgHero from '../assets/image-hero.webp';
import ImgPerfil from '../assets/foto-perfil-feminina.png'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SistemaBancario = () => {
    const [page, setPage] = useState('cadastro');
    const [conta, setConta] = useState(null); // armazena os dados da conta
    const [numeroConta, setNumeroConta] = useState(''); // armazena o número da conta para login
    const [saldo, setSaldo] = useState(0);
    const [valorOperacaoD, setValorOperacaoD] = useState("");
    const [valorOperacaoS, setValorOperacaoS] = useState("");

    const abrirConta = (e) => {
        e.preventDefault();
        const numeroContaCriada = (Math.floor(Math.random() * 100000)).toString().padStart(5, '0'); // Gera número incremental
        const novaConta = {
            nome: e.target.nome.value,
            tipo: e.target.tipo.value,
            ag_nome: e.target.ag_nome.value,
            ag_numero: e.target.ag_numero.value,
            banco_nome: e.target.banco_nome.value,
            banco_numero: e.target.banco_numero.value,
            numero: numeroContaCriada, // Armazena o número da conta gerado
        };
        setConta(novaConta);
        setSaldo(0);
        setNumeroConta(''); 
    };

    const login = (e) => {
        e.preventDefault();
        if (conta && numeroConta === conta.numero) {
            setPage('perfil');
        } else {
            alert('Conta não encontrada!');
        }
    };

    const depositar = () => {
        const valor = parseFloat(valorOperacaoD);
        if (valor > 0) {
            setSaldo(saldo + valor);
            setValorOperacaoD("");
        }
    };

    const sacar = () => {
        const valor = parseFloat(valorOperacaoS);
        if (valor > 0 && valor <= saldo) {
            setSaldo(saldo - valor);
            setValorOperacaoS("");
        } else {
            alert('Saldo insuficiente!');
        }
    };

    if (page === 'cadastro') {
        return (
            <div className="banco-container">
                <Navbar />
                <div className="banco-container-content">
                    <div className="banco-container-content__colLeft">
                        <img src={ImgHero} alt="Mockup de cartão e celular" />
                    </div>
                    <div className="banco-container-content__colRight">
                        <h1>Abra sua conta</h1>
                        <p>Em apenas alguns minutos, você realiza seu cadastro e já pode aproveitar todos os benefícios de uma conta AR Bank!</p>
                        <form onSubmit={abrirConta}>
                            <div className="form-container-inputs">
                                <div className="form-inputs__group">
                                    <label>Nome completo</label>
                                    <input type="text" name="nome" required />
                                </div>
                                <div className="form-inputs__group">
                                    <label>Selecione o tipo de conta</label>
                                    <select name="tipo" required>
                                        <option value="1">Conta corrente</option>
                                        <option value="2">Conta poupança</option>
                                        <option value="3">Conta conjunta</option>
                                    </select>
                                </div>
                                <div className="form-inputs__group">
                                    <label>Nome da agência</label>
                                    <input type="text" name="ag_nome" required />
                                </div>
                                <div className="form-inputs__group">
                                    <label>Número da agência</label>
                                    <input type="number" name="ag_numero" required />
                                </div>
                                <div className="form-inputs__group">
                                    <label>Nome do banco</label>
                                    <input type="text" name="banco_nome" required />
                                </div>
                                <div className="form-inputs__group">
                                    <label>Número do banco</label>
                                    <input type="number" name="banco_numero" required />
                                </div>
                            </div>
                            <button type="submit" className="primary-button">Abrir conta <AccountBalanceIcon /></button>
                        </form>
                        {conta && <p>Conta aberta com sucesso! O Nº de sua conta é {conta.numero} <button onClick={() => setPage('login')} className='button-login'>Ir para login</button></p>}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (page === 'login') {
        return (
            <div className="banco-container">
                <Navbar />
                <div className="banco-container-content">
                    <div className="banco-container-content__colLeft">
                        <img src={ImgHero} alt="Mockup de cartão e celular" />
                    </div>
                    <div className="banco-container-content__colRight card-login">
                        <h1>Login</h1>
                        <p>Para fazer login, você deve informar o número da conta recebido ao cadastrar-se no AR Bank</p>
                        <br /><br />
                        <form onSubmit={login}>
                            <label>Digite o número da sua conta:</label>
                            <input type="number" value={numeroConta} onChange={(e) => setNumeroConta(e.target.value)} required />
                            <button type="submit" className='primary-button'>Entrar <AccountBalanceIcon /></button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (page === 'perfil') {
        return (
            <div className="banco-container">
                <Navbar />
                <div className="banco-container-content">
                    <div className="banco-container-content__colLeft perfil-card">
                      <div className='perfil-card-container'>
                        <img src={ImgPerfil} alt="Foto de perfil" className="perfil-card-container__img" />
                      </div>
                      <h2 className='perfil-card-container__name'>Olá, <span>{conta.nome}</span>!</h2>
                      <div className="perfil-card__infos">
                        <p><b>Banco:</b> {conta.banco_nome} - {conta.banco_numero}</p>
                        <p><b>Agência:</b> {conta.ag_nome} - {conta.ag_numero}</p>
                        <p><b>Tipo:</b> {conta.tipo} - nº {conta.numero}</p>
                      </div>

                    </div>
                    <div className="banco-container-content__colRight grid-functions">
                      <div className="grid-functions__card perfil_card_container__saldo">
                        <p className='perfil-card__saldo'>R$ {saldo.toFixed(2)}</p>
                        <span>Ver extrato <KeyboardArrowRightIcon /></span>
                      </div>

                      <div className="grid-functions__card perfil_card_container__saldo">
                        <button className='grid-functions__cardButton'>Ver meus cartões <CreditCardIcon/></button>
                      </div>

                      <div className="grid-functions__card">
                        <button onClick={depositar} className='grid-functions__cardButton'>Depositar <AttachMoneyIcon /></button> 
                        <input type="number" placeholder="Digite um valor" value={valorOperacaoD} onChange={(e) => setValorOperacaoD(e.target.value)} />                       
                      </div>

                      <div className="grid-functions__card">
                        <button onClick={sacar} className='grid-functions__cardButton'>Sacar <AttachMoneyIcon /></button>
                        <input type="number" placeholder="Digite um valor" value={valorOperacaoS} onChange={(e) => setValorOperacaoS(e.target.value)} /> 
                      </div>

                      <div className="grid-functions__card">
                        <button className='grid-functions__cardButton'>Consultar saldo <SavingsOutlinedIcon /></button>
                      </div>

                      <div className="grid-functions__card">
                        <button className='grid-functions__cardButton'>
                          <Link to="/">Encerrar conta</Link>
                          <ExitToAppIcon />
                        </button>
                      </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default SistemaBancario;
