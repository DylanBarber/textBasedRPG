//Disable textArea input from user
let input
let keypressed = false;
document.querySelector('.gameOutput').disabled = true;

//AutoScroll the text area
function scrollDown(){
document.getElementById("gameOutput").scrollTop = document.getElementById("gameOutput").scrollHeight 
};

//Append to text area
function log(input) {
    document.querySelector('.gameOutput').value += ('\n' + input + '\n');
    scrollDown()
}

// Event Listener Promise Function
const textInput = document.getElementsByClassName('textInput')[0];
const enterButton = document.getElementsByClassName('enterButton')[0];
async function getInput() {
    return new Promise(function(resolve, reject) {
        textInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                resolve(textInput.value);
            }
        });
        enterButton.addEventListener('click', () => {
            resolve(textInput.value);
        });

    })
}


//GAME START
(async() => {
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
        characterSelected: ''
    }

    let items = {
        coins: 0,
        logs: 0,
        arrowShafts: 0,
    }



    log("Welcome to the text based RPG.");
    log("Any time you see * after a sentence press {ENTER} to continue or {↵} for mobile users");
    log("Before we get started, what's your name?");
    let input = await getInput();
    let characterName = input;
    log(characterName + "!" + " Weird name.. but it'll do.");
    log("Let's first get you set up with some basic skills.*");
    await getInput();
    log("We have three character paths. You may either select warrior, archer, or mage!*");
    await getInput();

    //character selection
    log("Would you like to become a warrior?");
    input = await getInput();
    if (input.toLowerCase() === 'yes') {
        console.log(input)
        stats.characterSelected = "warrior";
    } else{
        log("Would you like to become an archer?");
        input = await getInput();
        if (input.toLowerCase() === 'yes') {
            stats.characterSelected = "archer";
        } else {
            log("Would you like to become a mage?");
            input = await getInput();
            if (input.toLowerCase() === 'yes') {
                stats.characterSelected = "mage";
            } 
        }
    }
    console.log(stats.characterSelected)
    //telling user what class has been selected, and sets level to 5.
    if (stats.characterSelected === "warrior") {
        log("You have selected to become a warrior!");
        stats.meleeLevel += 4;
    } else {
        if (stats.characterSelected === "archer") {
            log("You have selected to become an archer!");
            stats.rangedLevel += 4;
        } else {
            if (stats.characterSelected === "mage") {
                log("You have selected to become a mage!");
                stats.magicLevel += 4;
            }
        }
    }

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
})();