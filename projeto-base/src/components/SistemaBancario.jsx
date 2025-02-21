import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ImgHero from '../assets/image-hero.webp';
import ImgPerfil from '../assets/foto-perfil-feminina.png'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const SistemaBancario = () => {
    const [page, setPage] = useState('cadastro');
    const [conta, setConta] = useState(null); // armazena os dados da conta
    const [numeroConta, setNumeroConta] = useState(''); // armazena o número da conta para login
    const [saldo, setSaldo] = useState(0);
    const [valorOperacao, setValorOperacao] = useState("");

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
        setNumeroConta(''); // Limpa o campo númeroConta para que o usuário escreva no login
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
        const valor = parseFloat(valorOperacao);
        if (valor > 0) {
            setSaldo(saldo + valor);
            setValorOperacao("");
        }
    };

    const sacar = () => {
        const valor = parseFloat(valorOperacao);
        if (valor > 0 && valor <= saldo) {
            setSaldo(saldo - valor);
            setValorOperacao("");
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
                        {conta && <p>Conta aberta com sucesso! O Nº de sua conta é {conta.numero} <button onClick={() => setPage('login')}>Ir para login</button></p>}
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
                      <h2>Olá, {conta.nome}!</h2>
                      <div className="perfil_card_container__saldo">
                        <p className='perfil-card__saldo'><AttachMoneyIcon /> {saldo.toFixed(2)}</p>
                        <span>Ver extrato</span>
                      </div>
                      <p>Agência: {conta.ag_nome} - {conta.ag_numero}</p>
                      <p>Banco: {conta.banco_nome} - {conta.banco_numero}</p>
                      <p>Tipo: {conta.tipo} - nº {conta.numero}</p>
                    </div>
                    <div className="banco-container-content__colRight">
                        <input type="number" placeholder="Digite um valor" value={valorOperacao} onChange={(e) => setValorOperacao(e.target.value)} />
                        <button onClick={depositar}>Depositar</button>
                        <button onClick={sacar}>Sacar</button>

                        <button>Consultar saldo</button>
                        <button onClick={() => setPage('cadastro')}>Encerrar conta</button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default SistemaBancario;
