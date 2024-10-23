

//Variável para armazenar os heróis e suas experiências (xp)

let herois_xp = {
    "Wolverine": 4000,
    "Storm": 2500,
    "Black Widow": 7900,
    "Spider": 1800,
    "Iron Man": 998,
    "Scarlet": 6500,
    "Gamora": 8888,
    "She-Hulk": 10050
};


// Função para sortear um herói
function sortearHeroi(lista) {
    let nome_heroi = Object.keys(lista); // Obtém os nomes dos heróis
    let indiceSorteado = Math.floor(Math.random() * nome_heroi.length);
    return nome_heroi[indiceSorteado]; // Retorna o nome do herói sorteado
}



// Função para determinar o nível do herói com base na experiência (xp)
function determinarNivel(xp) {
    let nivel;
    
    switch (true) { 
        case xp < 1000:
            nivel = "Ferro";
            break;
        case xp >= 1001 && xp < 2000:
            nivel = "Bronze";
            break;
        case xp >= 2001 && xp < 5000:
            nivel = "Prata";
            break;
        case xp >= 5001 && xp < 7000:
            nivel = "Ouro";
            break;
        case xp >= 7001 && xp < 8000:
            nivel = "Platina";
            break;
        case xp >= 8001 && xp < 9000:
            nivel = "Ascendente";
            break;
        case xp >= 9001 && xp <= 10000:
            nivel = "Imortal";
            break;
        case xp > 10000:
            nivel = "Radiante";
            break;
        default:
            nivel = "Desconhecido"; // Opcional: caso o xp não se enquadre em nenhuma faixa
            break;
    }
    
    return nivel;
}

let sorteio = 1; // Número de heróis a serem sorteados

for (let i = 0; i < sorteio; i++) {
    let heroiSorteado = sortearHeroi(herois_xp);
    let xp = herois_xp[heroiSorteado]; // Obtém a experiência do herói sorteado
    let nivel = determinarNivel(xp); // Determina o nível do herói

    console.log("O herói de nome " + heroiSorteado + " está no nível de " + nivel + ".");
}

