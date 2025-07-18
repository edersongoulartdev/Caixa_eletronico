// Definir classe Conta Bancária
class ContaBancaria {
    constructor() {
        this.saldo = 0; // Saldo inicial zero
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return true;
        }
        return false;
    }

    sacar(valor) {
        if (valor > 0 && this.temSaldoParaSacar(valor)) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    temSaldoParaSacar(valor) {
        return valor <= this.saldo;
    }
}

// Definir classe CaixaEletronico
class CaixaEletronico {
    constructor(conta) {
        this.conta = conta;
    }

    depositar() {
        const valorDeposito = parseFloat(document.getElementById("valordeposito").value);
        
        if (isNaN(valorDeposito) || valorDeposito <= 0) {
            this.mostrarMensagem("Valor inválido para depósito");
            return;
        }

        if (this.conta.depositar(valorDeposito)) {
            this.mostrarSaldo(this.conta.saldo);
        } else {
            this.mostrarMensagem("Falha no depósito");
        }
    }

    sacar() {
        const valorSaque = parseFloat(document.getElementById("valorsaque").value);
        
        if (isNaN(valorSaque) || valorSaque <= 0) {
            this.mostrarMensagem("Valor inválido para saque");
            return;
        }

        if (this.conta.sacar(valorSaque)) {
            this.mostrarSaldo(this.conta.saldo);
        } else {
            this.mostrarMensagem("Saldo insuficiente");
        }
    }

    mostrarSaldo(saldo) {
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo.toFixed(2)}`;
        this.limparCampos();
    }

    mostrarMensagem(mensagem) {
        document.getElementById("saldo").textContent = mensagem;
    }

    limparCampos() {
        document.getElementById("valordeposito").value = '';
        document.getElementById("valorsaque").value = '';
    }
}

// Criar instâncias quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    const conta = new ContaBancaria();
    const caixa = new CaixaEletronico(conta);

    // Conectar botões às funções
    document.getElementById("btn-depositar").addEventListener('click', () => caixa.depositar());
    document.getElementById("btn-sacar").addEventListener('click', () => caixa.sacar());
});