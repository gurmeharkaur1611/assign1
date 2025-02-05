// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
//Buttons for user interaction
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");
const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");
const resetBtn = document.getElementById("reset");
const showIdBtn = document.getElementById("showId");

// Display areas for selected words
const chosenNoun1 = document.getElementById("chosenNoun1");
const chosenVerb = document.getElementById("chosenVerb");
const chosenAdjective = document.getElementById("chosenAdjective");
const chosenNoun2 = document.getElementById("chosenNoun2");
const chosenSetting = document.getElementById("chosenSetting");
const storyOutput = document.getElementById("story");

// Arrays containing possible words for the story
const noun1Array = ["The astronaut", "The pirate", "The knight", "The scientist", "The detective"];
const verbArray = ["discovered", "found", "lost", "stole", "built"];
const adjectiveArray = ["mysterious", "shiny", "hidden", "ancient", "glowing"];
const noun2Array = ["map", "key", "sword", "robot", "potion"];
const settingArray = ["in a hidden cave", "on a distant planet", "inside a secret lab", "in a haunted house", "under the ocean"];

// Variables to store selected words
let selectedNoun1 = "";
let selectedVerb = "";
let selectedAdjective = "";
let selectedNoun2 = "";
let selectedSetting = "";

/* Functions
-------------------------------------------------- */
// Function to get a random word from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}
// Functions to handle button clicks and assign words
function noun1_on_click() {
    selectedNoun1 = getRandomWord(noun1Array);
    chosenNoun1.textContent = selectedNoun1;
}

function verb_on_click() {
    selectedVerb = getRandomWord(verbArray);
    chosenVerb.textContent = selectedVerb;
}

function adjective_on_click() {
    selectedAdjective = getRandomWord(adjectiveArray);
    chosenAdjective.textContent = selectedAdjective;
}

function noun2_on_click() {
    selectedNoun2 = getRandomWord(noun2Array);
    chosenNoun2.textContent = selectedNoun2;
}

function setting_on_click() {
    selectedSetting = getRandomWord(settingArray);
    chosenSetting.textContent = selectedSetting;
}

// Function to generate and display the story
function playback_on_click() {
    if (selectedNoun1 && selectedVerb && selectedAdjective && selectedNoun2 && selectedSetting) {
        storyOutput.textContent = `${selectedNoun1} ${selectedVerb} a ${selectedAdjective} ${selectedNoun2} ${selectedSetting}.`;
    } else {
        storyOutput.textContent = "Oops! Make sure you have chosen words in all categories before generating your story.";
    }
}

// Function to generate a fully random story
function random_on_click() {
    selectedNoun1 = getRandomWord(noun1Array);
    selectedVerb = getRandomWord(verbArray);
    selectedAdjective = getRandomWord(adjectiveArray);
    selectedNoun2 = getRandomWord(noun2Array);
    selectedSetting = getRandomWord(settingArray);

    // Display the randomly chosen words
    chosenNoun1.textContent = selectedNoun1;
    chosenVerb.textContent = selectedVerb;
    chosenAdjective.textContent = selectedAdjective;
    chosenNoun2.textContent = selectedNoun2;
    chosenSetting.textContent = selectedSetting;

    // Generate and display the story with the random words
    playback_on_click();
}

// Function to reset all selections and output
function reset_on_click() {
    selectedNoun1 = "";
    selectedVerb = "";
    selectedAdjective = "";
    selectedNoun2 = "";
    selectedSetting = "";

    // Reset displayed words to default placeholders
    chosenNoun1.textContent = "[Choose a word]";
    chosenVerb.textContent = "[Choose a word]";
    chosenAdjective.textContent = "[Choose a word]";
    chosenNoun2.textContent = "[Choose a word]";
    chosenSetting.textContent = "[Choose a word]";
    storyOutput.textContent = "Your story will appear here...";
}

// Function to display student ID when button is clicked
function showStudentId() {
    document.getElementById("studentId").textContent = "Student ID: 200596150 | Name: Gurmehar Kaur Gurmehar Kaur";
}

/* Event Listeners
-------------------------------------------------- */
// Attach event listeners to buttons for user interaction
noun1Btn.addEventListener("click", noun1_on_click);
verbBtn.addEventListener("click", verb_on_click);
adjectiveBtn.addEventListener("click", adjective_on_click);
noun2Btn.addEventListener("click", noun2_on_click);
settingBtn.addEventListener("click", setting_on_click);

playbackBtn.addEventListener("click", playback_on_click);
randomBtn.addEventListener("click", random_on_click);
resetBtn.addEventListener("click", reset_on_click);
showIdBtn.addEventListener("click", showStudentId);
