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
    startMessage = prompt(`Merci de saisir votre choix`).toLocaleLowerCase;
    if(startMessage === "j") {
        startPlay();
    }
    else if(startMessage === "r") {
        startRules();
    }
    else if(startMessage === "q") {
        goodBye();
    };

}

function startPlay() {
    for(let i = 0; i < cptChoice.length; i++){
        i = mask.push("_");
    }
 return prompt(mask + "\\n"
                + "vous avez le droit à " + score + "erreurs..."
                + "\\n" + "Veuillez saisir une lettre:");   
};
function startRules(){
    alert(`T'es sérieux tu connais pas les règles...`);
};
function goodBye(){
    alert(`Au revoir et à bientôt!!`);
};

// logique de code 
alert("Bonjour et bienvenue!! Voulez vous jouer au PENDU??");

alert("pour jouer entrez J"+"\\n"
+"pour quitter entrez Q"+"\\n"
+"pour les règles du jeux entrez R");

start();



