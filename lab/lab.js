const game = {
    team1: "Bayern Munich",
    team2: "Dormund",
    player: [
        [
            "Ederson",
            "Ronaldo",
            "Messi",
            "Neymar",
            "Ibra",
            "Suress",
            "Danilo",
            "Marquinhos",
            "Bremer",
            "Fabinho",
            "Artica",
        ],
        [
            "Alisson",
            "Pepe",
            "William",
            "Joao Palhinha",
            "Fernandes",
            "Matheus",
            "Rafael Leao",
            "Ricardo Horta",
            "Andre Silva",
            " Goncalo Ramos",
            "Robusta",
        ],
    ],
    score: "4:0",
    scored: ["Marquinhos", "Bremer", "Ricardo Horta", "Andre Silva"],
    date: "Nov 9th 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//lab1:Coding Challenge #1
//1
const [player1, player2] = game.player;
// console.log(player1, player2);
//2
const [gk1, ...fieldPlayers1] = player1;
const [gk2, ...fieldPlayers2] = player2;
console.log(gk1);
//3
const allPlayers = [...player1, ...player2];
// console.log(...allPlayers);
//4
const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
//5
const odds = ({ team1, x: draw, team2 } = game.odds);
console.log(team1, draw, team2);

//6
const printGoals = function(...players) {
    console.log(players.length + "người đã ghi bàn");
};
printGoals(...game.scored);
//7
team1 < team2 && console.log("Team1 thắng cao hơn");
team1 > team2 && console.log("Team2 thắng cao hơn");
//lab2:Coding Challenge #2
//1
// const Goalscored = Object.entries(game.scored);
for (const [x, y] of game.scored.entries()) {
    console.log(`Goal ${x + 1}: ${y}`);
}
//2
const Odds = Object.values(game.odds);
console.log(Odds);
let Avg = 0;
for (let item of Odds) {
    Avg += item;
    const tbc = Avg / Odds.length;
    console.log(tbc);
}
//3
const oddss = Object.entries(game.odds);
for (const [x, y] of oddss) {
    const StrTeam = x === "x" ? "draw" : `victory ${game[x]}`;
    console.log(`Odd of  ${StrTeam} is ${y}`);
}
//3.1
const scorers = Object.values(game.scored);
constsr  = {}
for (let [x, y] of scorers) {
    
}