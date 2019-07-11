// // UI Event listeners
// //disable textArea input from user
// function log(input){
//     document.querySelector('.gameOutput').value += (input + '\n');
// }
// document.querySelector('.gameOutput').disabled = true;
// // let input;
// function enterFunction(input) {
//     document.querySelector('.gameOutput').value += (input + '\n');
// }
// // document.querySelector('#gameOutput').addEventListener('keypress', logKey);
// document.querySelector('.textInput').addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         input = document.querySelector('.textInput').value
//         enterFunction(input)
//     }
// });
// document.querySelector('.enterButton').addEventListener('click', () => {
//     input = document.querySelector('.textInput').value
//     enterFunction(input)
// });
// GAME
//EXPERIMENTAL
// UI Event listeners
//disable textArea input from user
let input
let keypressed = false;
function log(input){
    document.querySelector('.gameOutput').value += (input + '\n');
}
document.querySelector('.gameOutput').disabled = true;
// let input;
function enterFunction(input) {
    document.querySelector('.gameOutput').value += (input + '\n');
}
// document.querySelector('#gameOutput').addEventListener('keypress', logKey);

function wait(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}



function enterFunction(input) {
    document.querySelector('.gameOutput').value += (input + '\n');
}
function inputEvent() {
    document.querySelector('.textInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            input = document.querySelector('.textInput').value
            enterFunction(input)
        }
    });
    document.querySelector('.enterButton').addEventListener('click', () => {
        input = document.querySelector('.textInput').value
        enterFunction(input)
    });
};





let stats = {
    health: 100,
    damage: 1,
    level: 1,
    magicLevel: 1,
    rangedLevel: 1,
    meleeLevel: 1,
    woodcuttingLevel: 1,
    fletchingLevel: 1,
    firemakingLevel: 1,
}

let items = {
    coins: 0,
    logs: 0,
    arrowShafts: 0,
}

//GAME START
log("Welcome to the text based RPG. Before we get started, what's your name?");

(async () => {
    inputEvent()
    await wait(5000);   
    console.log(input)
})()

// alert(characterName + "!" + " Weird name.. but it'll do.");
// alert("Let's first get you set up with some basic skills.");
// alert("We have three character paths. You may either select warrior, archer, or mage!");

// //character selection
// characterType = confirm("Would you like to become a warrior?");
// if (characterType) {
//     characterSelected = "warrior";
// } else {
//     characterType = confirm("Would you like to become an archer?");
//     if (characterType) {
//         characterSelected = "archer";
//     } else {
//         characterType = confirm("Would you like to become a mage?");
//         if (characterType) {
//             characterSelected = "mage";
//         }
//     }
// }

// //telling user what class has been selected, and sets level to 5.
// if (characterSelected === "warrior") {
//     alert("You have selected to become a warrior!");
//     stats.meleeLevel += 4;
// } else {
//     if (characterSelected === "archer") {
//         alert("You have selected to become an archer!");
//         stats.rangedLevel += 4;
//     } else {
//         if (characterSelected === "mage") {
//             alert("You have selected to become a mage!");
//             stats.magicLevel += 4;
//         }
//     }
// }

// //assigning starting weapons
// alert("Now, we must get you started with a weapon.");
// if (characterSelected === "warrior") {
//     weapon = "dagger";
//     stats.damage += 1;
// } else {
//     if (characterSelected === "archer") {
//         weapon = "bow";
//         stats.damage += 1;
//     } else {
//         if (characterSelected === "mage") {
//             weapon = "staff";
//             stats.damage += 1;
//         }
//     }
// }

// alert("You have been handed a " + weapon + ".");
// alert("Your current damage is " + stats.damage + ".");

// //spawns goblin
// let goblin = {
//     name: "goblin",
//     enemyHealth: 5,
//     enemyDamage: 2
// }

// //start goblin battle
// alert("Oh no, there's a " + goblin.name + " attacking our village!");
// alert("Help us, " + characterName + "!");
// alert("With your new trusty " + weapon + ", you can help us defeat the goblin!");

// //goblin attack loop
// while (goblin) {
//     stats.health -= goblin.enemyDamage;
//     alert("Ouch! You have been struck by the " + goblin.name + ". Your health is now " + stats.health + "/100.");
//     if (stats.health <= 0) {
//         alert("Oh dear, you have died!");
//     }
//     response = confirm("Would you like to retaliate?");
//     if (response) {
//         alert("You have struck the " + goblin.name + " with your " + weapon + "!");
//         goblin.enemyHealth -= stats.damage;
//         alert("The " + goblin.name + "'s health is now " + goblin.enemyHealth + "/5.")
//         if (goblin.enemyHealth <= 0) {
//             items.coins += 10;
//             alert("You have slain the " + goblin.name + ".");
//             alert("You have gained 10 coins!" + " Your new total is " + items.coins + ".");
//             goblin = false;
//         }
//     }
// }

// alert("Thank you, " + characterName + "! You're our hero!");
// stats.level += 1;
// alert("Congratulations! You have reached level " + stats.level + "!");

// //intro to woodcutting
// let bronzeAxe = {
//     name: "bronze axe",
//     damage: 1
// }

// let tree = {
//     name: "tree",
//     health: 5
// }

// alert("Now that you can find your way around a weapon, let's get you familiar with some skills.");
// alert("First let's start off with woodcutting.");
// alert("You have received an axe.");


// alert("Let's start off by chopping that " + tree.name + " over there down.");


// //woodcutting action
// answer = confirm("Would you like to cut down this " + tree.name + "?");
// while (tree) {
//     if (answer) {
//         items.logs += 1;
//         alert("You swing your axe at the " + tree.name + ".");
//     }
//     tree.health -= 1;
//     if (tree.health <= 0) {
//         stats.logs
//         alert("You successfully chopped down the " + tree.name + ".");
//         alert("You now have " + items.logs + " logs.");
//         tree = false;
//     }
// }

// //user chooses to fletch or firemake
// alert("Very good! Now, what do you do with those logs?");
// action = confirm("Would you like to fletch your logs?");
// if (action) {
//     alert("You have been handed a knife.");
//     let knife = true;
//     while (knife) {
//         alert("You begin to fletch your logs.");
//         items.logs -= 1;
//         items.arrowShafts += 10;
//         alert("You have fletched your log.")
//         alert("You now have " + items.logs + " logs.");
//         alert("You have received 10x arrow shafts!")
//         if (item.logs <= 0) {
//             alert("You have " + items.logs + " logs.");
//             alert("You now have " + ites.arrowShafts + " arrow shafts.");
//             knife = false;
//         }
//     }
// } else {
//     action = confirm("Would you like to burn your logs?");
//     if (action) {
//         alert("You have been handed a tinderbox.");
//     }
// }