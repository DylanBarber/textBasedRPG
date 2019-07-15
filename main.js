//Disable textArea input from user
let input
let keypressed = false;
document.querySelector('.gameOutput').disabled = true;

//AutoScroll the text area
function scrollDown() {
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
            textInput.value = '';
        });

    })
}


//GAME START
(async() => {
    //Object Initialization
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
        weapon: ''
    }



    log("Welcome to TextScape.");
    log("Any time you see * after a sentence press {ENTER} to continue or {↵} for mobile users*");
    let input = await getInput();
    textInput.value = ''
    log("Before we get started, what's your name?");
    input = await getInput();
    textInput.value = ''
    let characterName = input;
    log(characterName + "!" + " Weird name.. but it'll do.");
    log("Let's first get you set up with some basic skills.*");
    await getInput();
    log("We have three character paths. You may either select warrior, archer, or mage!*");
    await getInput();

    //character selection
    log("Would you like to become a warrior?");
    input = await getInput();
    textInput.value = ''
    textInput.value = ''
    if (input.toLowerCase() === 'yes') {
        stats.characterSelected = "warrior";
    } else {
        log("Would you like to become an archer?");
        input = await getInput();
        textInput.value = ''
        if (input.toLowerCase() === 'yes') {
            stats.characterSelected = "archer";
        } else {
            log("Would you like to become a mage?");
            input = await getInput();
            textInput.value = ''
            if (input.toLowerCase() === 'yes') {
                stats.characterSelected = "mage";
            }
        }
    }
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

    //assigning starting weapons
    log("Now, we must get you started with a weapon.*");
    input = await getInput();
    textInput.value = ''
    if (input === "warrior") {
        items.weapon = "dagger";
        stats.damage += 1;
    } else {
        if (stats.characterSelected === "archer") {
            items.weapon = "bow";
            stats.damage += 1;
        } else {
            if (stats.characterSelected === "mage") {
                items.weapon = "staff";
                stats.damage += 1;
            }
        }
    }

    log("You have been handed a " + items.weapon + ".*");
    input = await getInput();
    textInput.value = ''

    // INSERT REST















    //spawns goblin
    let goblin = {
        name: "goblin",
        health: 5,
        damage: randomNumber(),
    }


    //start goblin battle
    log("Oh no, there's a " + goblin.name + " attacking our village!");
    log("Help us, " + characterName + "!");
    log("With your new " + weapon + ", you can help us defeat the goblin!");

    //goblin attack loop
    while (goblin) {
        stats.health -= goblin.damage;
        if (goblin.damage === 0) {
            log("The " + goblin.name + " hit a " + goblin.damage + ". You took no damage! Your health is still " + stats.health + ".");
        } else {
            log("Ouch! The " + goblin.name + " hit you for a " + goblin.damage + ". Your health is now " + stats.health + ".");
        }
        if (stats.health <= 0) {
            log("Oh dear, you have died!");
            //end game screen here?
        }
        response = confirm("Would you like to retaliate?");
        if (response) {
            log("You have attacked the " + goblin.name + " with your " + weapon + "!");
            if (stats.damage === 0) {
                log("You hit a " + stats.damage + "! You dealt no damage. The " + goblin.name + "'s health is still " + goblin.health + ".");
            } else {
                goblin.health -= stats.damage;
                stats.meleeExperience += stats.damage * 4;
                log("You have hit a " + stats.damage + ". The " + goblin.name + "'s health is now " + goblin.health + ".");
                if (goblin.health <= 0) {
                    items.coins += 10;
                    log("You have slain the " + goblin.name + ".");
                    log("You have gained 10 coins!");
                    if (characterSelected === "warrior") {
                        log("You have gained " + stats.meleeExperience + " melee experience!");
                    }
                    goblin = false;
                    log("Thank you, " + characterName + "! You're our hero!");
                }
            }
        }
    }
})();