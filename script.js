//definir classe conta bancaria 

class contabancaria {

}
class caixaeletronico {
    constructor (conta){
        this.conta = conta;
    }

    depositar () {
        //pegar o valor do deposito
        const valordeposito = parseFloat(document.getElementById("valordeposito").value)
        //fazer deposito na conta
        this.conta.depositar(valordeposito);
        //exibir saldo
        this.mostrarsaldo(this.conta.saldo);
    }
    
    sacar(){
        //pegar valor do saque
        const valorsaque = parseFloat(document.getElementById("valorsaque").value)
        //fazer o saque na conta
        if(this.conta.temsaldoprasacar(valordosaque)){
            this.conta.sacar(valorsaque);
            this.mostrarsaldo(this.conta.saldo);
        }
        else{
            //mostrar saldo insuficiente
            this.mostrarsaldo("Insuficiente");
        }
    }

    mostrarsaldo(saldo){
        document.getElementById("saldo").textContent = 'Saldo: R$: $(saldo)';
        document.getElementById("valordeposito").value ='';
        document.getElementById("valorsaque").value ='';
    }

    //criar instancias
    const cont = new contabancaria();
    const caixaeletronico = new caixaeletronico(conta);

}