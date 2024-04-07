// Function to convert text input to audio using SpeechSynthesis API
function textToAudio() {
    // Get the text input from the HTML element with id "text-to-speech"
    let msg = document.getElementById("text-to-speech").value;

    // Create a new SpeechSynthesisUtterance object
    let speech = new SpeechSynthesisUtterance();

    // Set the language of the speech to English (United States)
    speech.lang = "en-US";

    // Set the text of the speech to the input text
    speech.text = msg;

    // Set the volume, rate, and pitch of the speech
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    // Trigger the speech synthesis to speak the provided text
    window.speechSynthesis.speak(speech);
}


// Function to play audio for "ah-ha"
function aha(){
    var audio=document.getElementById("audio")
    audio.play();
}

// audio for "Back of the Net"
function BackOfTheNet(){
    var audio=document.getElementById("audio2")
    audio.play();
}

//  audio for "Dan"
function dan(){
    var audio=document.getElementById("audio3")
    audio.play();
}

// audio for "Email of the Evening"
function emailoftheevening(){
    var audio=document.getElementById("audio4")
    audio.play();
}

// audio for "Hello Partridge"
function hellopartridge(){
    var audio=document.getElementById("audio5")
    audio.play();
}

// audio for "I ate a Scotch egg"
function iateascotchegg(){
    var audio=document.getElementById("audio6")
    audio.play();
}

// audio for "Bang out of order"
function bangoutoforder(){
    var audio=document.getElementById("audio7")
    audio.play();
}

// audio for "I'm confused"
function imconfused(){
    var audio=document.getElementById("audio8")
    audio.play();
}
