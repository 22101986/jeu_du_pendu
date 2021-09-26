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

let mask = [];
let masked = [];

let startMessage;



// fonctions


function start() {
    startMessage = prompt(`Merci de saisir votre choix`);
    if(startMessage === "j") {
       return startPlay();
    }
    else if(startMessage === "r") {
       return alert(`T'es sérieux tu connais pas les règles...`);
    }
    else if(startMessage === "q") {
       return alert(`Au revoir et à bientôt!!`);
    }
    else {
        start();
    };

}

function startPlay() {
    for(let value of cptChoice){
        alert(value);
    }
};


// logique de code 
alert("Bonjour et bienvenue!! Voulez vous jouer au PENDU??");

alert("pour jouer entrez J, pour quitter entrez Q, règles du jeux entrez R.");

start();



