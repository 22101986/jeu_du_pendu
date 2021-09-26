// variables

var list = [
    ["gorille"],
    ["crapaud"],
    ["baleine"],
    ["belette"],
    ["caracal"],
    ["gazelle"],
    ["manchot"]
];

var score = 7;

var cptChoice = list[Math.floor(Math.random() * list.length)];

var mask = [""]

var startMessage;



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
    for(let i = 0; i < cptChoice.length; i++){
        i = mask.push("_");
    }
 return prompt(mask + "vous avez le droit à " + score + " erreurs... Veuillez saisir une lettre:");   
};


// logique de code 
alert("Bonjour et bienvenue!! Voulez vous jouer au PENDU??");

alert("pour jouer entrez J, pour quitter entrez Q, règles du jeux entrez R.");

start();



