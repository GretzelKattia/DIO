class Heroi {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

        this.invoice = {
            tipo: {
                0: ["mago", "magia"],
                1: ["guerreiro", "espada"],
                2: ["monge", "artes marciais"],
                3: ["ninja", "shuriken"]
            }
        };  //não esquece ponto e virgula
    }

    escrever() {
        console.log(`O nome do jogador é ${this.nome} e tem ${this.idade} anos de idade`);
    }

    TipoDeJogador() {
        for (let index in this.invoice.tipo) {
            let [Heroi, Ataque] = this.invoice.tipo[index];
            console.log(`O ${Heroi} atacou usando ${Ataque}`);
        }
    }
}

let DadosDoJogador = new Heroi("Kat", 89);

DadosDoJogador.escrever();
DadosDoJogador.TipoDeJogador();



