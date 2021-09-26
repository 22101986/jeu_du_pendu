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

let startMessage;





// fonctions
function  hello() {
    alert("Bonjour et bienvenue!! Voulez vous jouer au PENDU??");
}

function start() {
    startMessage = prompt(`Saisir: \n j pour jouer \n r pour les règles du jeu \n q pour quitter`);
    if(startMessage === "j") {
        console.log(cptChoice);
       return letter = prompt(`${mask.join(" ")} \nVous avez  ${score} essais, saisir une lettre:`);
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
function game(i) {
   if(letter !== cptChoice[i] && score  > 1 ) {
        score -= 1; 
        letter = prompt(`${mask.join(" ")} \nVous avez  ${score} essais, saisir une lettre:`);
        return game(i);
}
    if(letter === cptChoice[i] && score > 1) {
        mask[i] = cptChoice[i];
        letter = prompt(`${mask.join(" ")} \nVous avez  ${score} essais, saisir une lettre:`);
        return game(i);

    }
    if(score === 1) {
        alert(`Dommage vous avez perdu...\n Le mot était ${cptChoice.join("")}.`);
    }
    
    
    
 };


// logique de code 
hello();

start();

game();
console.log(cptChoice);



