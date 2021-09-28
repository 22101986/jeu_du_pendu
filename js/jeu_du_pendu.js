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

let letter;

// fonctions
function  hello() {
    alert("Bonjour et bienvenue!! Voulez vous jouer au PENDU??");
}

function start() {
   let startMessage = prompt(`Saisir: \n j pour jouer \n r pour les règles du jeu \n q pour quitter`);
    if(startMessage === "j") {
       game();
    }
    else if(startMessage === "r") {
        alert(`T'es sérieux!!! tu connais pas les règles...`);
       return start();
    }
    else if(startMessage === "q") {
       alert(`Au revoir et à bientôt!!`);
       return hello();
        }
    else {
        return start();
        };
    }
function game() {
    letter = prompt(`${mask.join(" ")} \nVous avez  ${score} essais, saisir une lettre:`);
        if(!cptChoice.includes(letter) && score  > 1 ) {
        score -= 1;          
}
        if(cptChoice.includes(letter) && score > 1) {
            for(let i= 0; i < cptChoice.length; i++) {
                if(cptChoice[i] === letter) {
                mask[i] = letter;
        }
        }
       }
    if(score === 1) {
        alert(`Dommage vous avez perdu...\n Le mot était ${cptChoice.join("")}.`);
        start();
    }
    else if(mask.join("") === cptChoice.join("")) {
        alert(`Bravo vous avez trouvé le mot: "${cptChoice.join("")}". \nToutes mes felicitations`);
        start()
    }
    else {
        game();
    } 
 };


// logique de code 
hello();

start();



