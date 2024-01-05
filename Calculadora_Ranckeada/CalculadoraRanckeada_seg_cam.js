function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";
  
    switch (true) {
      case saldoVitorias < 10:
        nivel = "Ferro";
        break;
      case saldoVitorias <= 20:
        nivel = "Bronze";
        break;
      case saldoVitorias <= 50:
        nivel = "Prata";
        break;
      case saldoVitorias <= 80:
        nivel = "Ouro";
        break;
      case saldoVitorias <= 90:
        nivel = "Diamante";
        break;
      case saldoVitorias <= 100:
        nivel = "Lendário";
        break;
      default:
        nivel = "Imortal";
    }
  
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);
  }
  
  // Exemplo de uso:
  calcularNivel(75, 20);
  