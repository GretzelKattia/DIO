class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    dados() {
        console.log(`O nome do jogador é ${this.nome} e tem ${this.idade} anos de idade`);
    }

  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque secreto';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso:
  const heroi1 = new Heroi('Kat', 89, 'guerreiro');
  const heroi2 = new Heroi('Ana', 92, 'mago');



  heroi1.dados();
  heroi1.atacar(); // Saída: O guerreiro atacou usando espada

  heroi2.dados();
  heroi2.atacar(); // Saída: O mago atacou usando magia
  