// variables

let list = [
    ["gorille"],
    ["crapaud"],
    ["baleine"],
    ["belette"],
    ["caracal"],
    ["gazelle"],
    ["manchot"]
];

let score = 7;

let cptChoice = list[Math.floor(Math.random() * list.length)];

let mask = [""]

let startMessage;


// fonctions


function start() {
    startMessage = prompt(`Merci de saisir votre choix`)



}


// logique de code 

alert("Bonjour et bienvenue"+"\\n"
+"pour jouer entrez J"+"\\n"
+"pour quitter entrez Q"+"\\n"
+"pour les règles du jeux entrez R");

start();



