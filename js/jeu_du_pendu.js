// variables

let list = [
    ["g", "o", "r", "i", "l", "l", "e"],
    ["c", "r", "a", "p", "a", "u", "d"],
    ["b", "a", "l", "e", "i", "n", "e"],
    ["b", "e", "l", "e", "t", "t", "e"],
    ["c", "a", "r", "a", "c", "a", "l"],
    ["g", "a", "z", "e", "l", "l", "e"],
    ["m", "a", "n", "c", "h", "o", "t"]
];

let score = 7;

let cptChoice = list[Math.floor(Math.random() * list.length)];

let mask = ["_", "_", "_", "_", "_", "_", "_"];


let startMessage;



// fonctions


function start() {
    startMessage = prompt(`Merci de saisir votre choix`);
    if(startMessage === "j") {
       return prompt(mask.join(" ") + " Vous avez " + score + " essais, saisir une lettre:");
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





// logique de code 
alert("Bonjour et bienvenue!! Voulez vous jouer au PENDU??");

alert("pour jouer entrez J, pour quitter entrez Q, règles du jeux entrez R.");

start();



