import { commands, management } from "./comms.js"

// getting the dummy buttons
const btnStartRecord = document.querySelector("#btnStartRecord")
const btnStopRecord = document.querySelector("#btnStopRecord")
const textarea = document.querySelector("#text")
let badumtss = new Audio("badumtss.mp3")

let ogPhrase;

// setting stuff up
export let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false;

export let synth = window.speechSynthesis;
export let utterThis = new SpeechSynthesisUtterance();

synth.lang = 'es-ES';

// test("amor")

btnStartRecord.addEventListener('click', () => {
	recognition.start()
})

btnStopRecord.addEventListener('click', () => {
	recognition.abort()
})

// what happens when it returns the things
recognition.onresult = (event) => {
	let results = event.results;
	ogPhrase = results[results.length - 1][0].transcript;
	textarea.value = phrase

	const deleteThese = /[!"#$%&'()*+,-./:;<=>¿?@[\]^_`{|}~\u0300-\u036f]/g;
	
	let phrase = ogPhrase.toLowerCase().replace(deleteThese, '')
	phrase = phrase.split(' ')

	let unknownCount = 0
	for (let i = 0; i < phrase.length; i++) {
		recognition.abort()
		
		if (commands[phrase[i]]) {
			commands[phrase[i]]()
			break
		}

		else {
			unknownCount++

			if (unknownCount == phrase.length) {
		        management.joking = false
				utterThis.text = "Lo siento, no conozco ese comando"
				synth.speak(utterThis)			
				break
			}
		}
	}
}

recognition.onend = (event) => {
	console.log("He dejado de escuchar")
}

recognition.onerror = (event) => {
	console.log(event.error)
}

utterThis.onend = (event) => {
	if (management.joking) {
		badumtss.play()
	}
}

function test(phrase) {
	textarea.value = phrase

	const deleteThese = /[!"#$%&'()*+,-./:;<=>¿?@[\]^_`{|}~\u0300-\u036f]/g;
	phrase = phrase.toLowerCase().replace(deleteThese, '')
	phrase = phrase.split(' ')

	let unknownCount = 0
	for (let i = 0; i < phrase.length; i++) {
		recognition.abort()
		
		if (commands[phrase[i]]) {
			commands[phrase[i]]()
			break
		}

		else {
			unknownCount++

			if (unknownCount == phrase.length) {
				joking = false
				utterThis.text = "Lo siento, no conozco ese comando"
				synth.speak(utterThis)			
				break
			}
		}
	}
}