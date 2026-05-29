const player1 = {
   NOME: "Mario",
   VELOCIDADE: 4,
   MANOBRABILIDADE: 3,
   PODER: 3,
   PONTOS: 0,
};

const player2 = {
   NOME: "Luigi",
   VELOCIDADE: 3,
   MANOBRABILIDADE: 4,
   PODER: 4,
   PONTOS: 0,
};

async function rollDice(){
   return Math.floor(Math.random() * 6) + 1;
}

async function getRandonBlock(){
   let random = Math.random();
   let result;
   switch(true){
       case random < 0.33:
           result = "RETA";
           break;
       
       case random < 0.66:
           result = "CURVA";
           break;
       default:
           result = "CONFRONTO";
   }
   return result;
}

async function getRandomWeapon(){
    let random = Math.random();
    let result;

    switch(true){
        case random <= 0.5:
            result = "CASCO";
            break;

        default:
            result = "BOMBA";
    }
    return result;
}

async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);

        let weapon = await getRandomWeapon();

        //sortear bloco 
        let block = await getRandonBlock();
        console.log(`Bloco: ${block}`);

         //rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de habilidade
        let totalTestSkil1 = 0;
        let totalTestSkil2 = 0;

        if(block === "RETA"){
            totalTestSkil1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkil2 = diceResult2 + character2.VELOCIDADE;

            await logRollResult(character1.NOME, "velocidade", diceResult1,character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);

        }

        if(block === "CURVA"){
            totalTestSkil1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkil2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);

        }

        if(block === "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}!🥊`);
            console.log(`Bonus da Rodada: ${weapon}! ⭐`);

            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);

            //character2.PONTOS -= powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0;
            if(powerResult1 > powerResult2 /*&& character2.PONTOS > 0*/){

                if(weapon === "BOMBA"){
                    console.log(`${character1.NOME} venceu o confronto e ganhou um turbo +1 ponto⏩!`);
                    console.log(character2.PONTOS > 1 ? ` ${character2.NOME} perdeu 2 pontos 💣` : "");
                    character2.PONTOS > 1 ? character2.PONTOS-=2 : character2.PONTOS=0;
                    character1.PONTOS++;
                }else{
                    console.log(`${character1.NOME} venceu o confronto e ganhou um turbo +1 ponto⏩!`);
                    console.log(character2.PONTOS > 0 ? `${character2.NOME} perdeu 1 ponto 🐢` : "");
                    character2.PONTOS > 0 ? character2.PONTOS-- : character2.PONTOS;
                    character1.PONTOS++;
                }
            }

            //character1.PONTOS -= powerResult2 > powerResult1 && character2.PONTOS > 0 ? 1 : 0;
            if(powerResult2 > powerResult1 /*&& character1.PONTOS > 0*/){

                if(weapon === "BOMBA"){
                    console.log(`${character2.NOME} venceu o confronto e ganhou um turbo +1 ponto⏩!`);
                    console.log(character1.PONTOS > 1 ? `${character1.NOME} perdeu 2 pontos 💣` : ``);
                    character1.PONTOS > 1 ? character1.PONTOS-=2 : character1.PONTOS=0;
                    character2.PONTOS++;
                }else{
                    console.log(`${character2.NOME} venceu o confronto e ganhou um turbo +1 ponto⏩!`);
                    console.log(character1.PONTOS > 0 ? `${character1.NOME} perdeu 1 ponto 🐢` : ``);
                    character1.PONTOS > 0 ? character1.PONTOS-- : character1.PONTOS;
                    character2.PONTOS++;
                }
            }

            console.log(powerResult1 === powerResult2 ? "Confronto empatado! Nenhum ponto foi perdido" : "");
        }

        //verificando o vencedor

        if(totalTestSkil1 > totalTestSkil2){
            console.log(`${character1.NOME} marcou um ponto!`)
            character1.PONTOS++;
        }else if(totalTestSkil1 < totalTestSkil2){
            console.log(`${character2.NOME} marcou um ponto!`)
            character2.PONTOS++;
        }

        console.log(`\n###Placar:\n${character1.NOME}: ${character1.PONTOS}\n${character2.NOME}: ${character2.PONTOS}`);
        console.log("-------------------------------------------------");
    }
}

async function declareWinner(character1, character2){
    console.log("Resultado Final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if(character1.PONTOS > character2.PONTOS)
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);

    else if(character2.PONTOS > character1.PONTOS)
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
    
    else console.log("A corrida terminou em empate");
}

(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando ... \n`);

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();

//sortear aleatoriamente se é um casco(-1 ponto) ou uma bomba (-2 pontos)
//quem vence o confronto ganha um turbo (+1 ponto) aleatoriamente