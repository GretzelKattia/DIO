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
        };
    }

    dados() {
        console.log(`O nome do jogador é ${this.nome} e tem ${this.idade} anos de idade`);
    }

    ataque(indice) {
        if (this.invoice.tipo[indice]) {
            let [Heroi, Ataque] = this.invoice.tipo[indice];
            console.log(`O ${Heroi} atacou usando ${Ataque}`);
        } else {
            console.log("Índice de tipo de jogador inválido.");
        }
    }
}

let Jogador1 = new Heroi("Kat", 89);
let Jogador2 = new Heroi("Ana", 76);


Jogador1.dados();
Jogador1.ataque(1);

Jogador2.dados();
Jogador2.ataque(3);



