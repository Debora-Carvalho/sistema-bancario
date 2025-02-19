import React, { useState } from 'react';

// Função principal do App
function SistemaBancario() {
  const [contas, setContas] = useState([]);

  const criarConta = (numero, agenciaNome, agenciaNumero, bancoNome, bancoNumero, tipo) => {

    const novaConta = {
      numero,
      agencia: { nome: agenciaNome, numero: agenciaNumero },
      banco: { nome: bancoNome, numero: bancoNumero },
      tipo, // 1 = Corrente, 2 = Poupança, 3 = Conjunta, 4 = Encerrada
      saldo: 0
    };

    setContas([...contas, novaConta]);
  };

  const encerrarConta = (numeroConta) => {
    setContas(contas.map((conta) =>
      conta.numero === numeroConta && conta.saldo === 0
        ? { ...conta, tipo: 4, saldo: 0 }
        : conta
    ));
  };

  const consultarSaldo = (numeroConta) => {
    const conta = contas.find(conta => conta.numero === numeroConta);
    return conta ? conta.saldo : "Conta não encontrada!";
  };

  const creditar = (numeroConta, valor) => {
    if (valor <= 0) {
      alert("O valor do crédito deve ser positivo.");
      return;
    }
    setContas(contas.map((conta) =>
      conta.numero === numeroConta && conta.tipo !== 4
        ? { ...conta, saldo: conta.saldo + valor }
        : conta
    ));
  };

  const debitar = (numeroConta, valor) => {
    if (valor <= 0) {
      alert("O valor do débito deve ser positivo.");
      return;
    }

    setContas(contas.map((conta) =>
      conta.numero === numeroConta && conta.tipo !== 4 && conta.saldo >= valor
        ? { ...conta, saldo: conta.saldo - valor }
        : conta
    ));
  };

  const exibirContas = () => {
    return contas.map((conta) => (
      <div key={conta.numero}>
        <h3>Conta número: {conta.numero}</h3>
        <p>Agência: {conta.agencia.nome} - {conta.agencia.numero}</p>
        <p>Banco: {conta.banco.nome} - {conta.banco.numero}</p>
        <p>Tipo: {conta.tipo === 1 ? 'Conta Corrente' : conta.tipo === 2 ? 'Poupança' : conta.tipo === 3 ? 'Conjunta' : 'Encerrada'}</p>
        <p>Saldo: R$ {conta.saldo}</p>
      </div>
    ));
  };

  return (
    <div>
      <h1>Sistema Bancário</h1>

      {/* Exemplo de criação de conta */}
      <button onClick={() => criarConta(1, 'Agência Centro', '1234', 'Banco XYZ', '9876', 1)}>Criar Conta Corrente</button>
      <button onClick={() => criarConta(2, 'Agência Oeste', '5678', 'Banco ABC', '1234', 2)}>Criar Conta Poupança</button>

      <h2>Contas Criadas</h2>
      {exibirContas()}

      {/* Funções de ações de conta */}
      <div>
        <h3>Ações de Conta</h3>
        <button onClick={() => creditar(1, 100)}>Creditar R$ 100 na Conta 1</button>
        <button onClick={() => debitar(1, 50)}>Debitar R$ 50 da Conta 1</button>
        <button onClick={() => encerrarConta(1)}>Encerrar Conta 1</button>

        <button onClick={() => console.log(consultarSaldo(1))}>Consultar Saldo da Conta 1</button>
      </div>
    </div>
  );
}

export default SistemaBancario;
