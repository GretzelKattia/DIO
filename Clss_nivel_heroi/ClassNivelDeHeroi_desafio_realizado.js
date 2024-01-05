//Descobrir se posso mandar no console a quant de xp e o nome do heroi
var NomeDoHeroi = "Kat";
var XpDoHeroi = 4628;
var Nivel; 


//Cuidado na hora de fazer as condições _REVISAR ESSA PARTE_
if (XpDoHeroi < 1000) {
    Nivel = "Ferro";
}
else if (XpDoHeroi >= 1001 && XpDoHeroi <= 2000) {
    Nivel = "Bronze";
}
else if (XpDoHeroi >= 2001 && XpDoHeroi <= 3000) {
    Nivel = "Prata";
}
else if (XpDoHeroi >= 3001 && XpDoHeroi <= 4000) {
    Nivel = "Ouro";
}
else if (XpDoHeroi >= 4001 && XpDoHeroi <= 5000) {
    Nivel = "Platina";
}
else if (XpDoHeroi >= 5001 && XpDoHeroi <= 6000) {
    Nivel = "Ascendente";
}
else if (XpDoHeroi >= 6001 && XpDoHeroi <= 7000) {
    Nivel = "Imortal";
}
else if (XpDoHeroi >= 7001 && XpDoHeroi <= 8000) {
    Nivel = "Radiante";
}

// Mostrar mensagem_Opcional colocar ponto e virgula no final
console.log("O Herói de nome " + NomeDoHeroi + " está no nível de " + Nivel);
