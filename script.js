import { commands } from "./commands.js"

// getting the dummy buttons
const btnStartRecord = document.querySelector("#btnStartRecord")
const btnStopRecord = document.querySelector("#btnStopRecord")
const textarea = document.querySelector("#text")

// setting stuff up
let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false;

export let synth = window.speechSynthesis;
export let utterThis = new SpeechSynthesisUtterance();

synth.lang = 'es-ES';

// what happens when it returns the things
recognition.onresult = (event) => {
	const results = event.results;
	const phrase = results[results.length - 1][0].transcript;
	textarea.value = phrase

	if (phrase in commands) {
		commands[key]()
	}

	else {
		utterThis.text "Lo siento, no te entendi, puedes repetirlo?"

		synth.speak(utterThis)
	}
}

btnStartRecord.addEventListener('click', () => {
	recognition.start()
})

btnStopRecord.addEventListener('click', () => {
	recognition.abort()
})