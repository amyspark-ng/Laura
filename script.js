import { commands } from "/commands.js"

// getting the dummy buttons
const btnStartRecord = document.querySelector("#btnStartRecord")
const btnStopRecord = document.querySelector("#btnStopRecord")
const textarea = document.querySelector("#text")

// setting stuff up
export let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false;

export let synth = window.speechSynthesis;
export let utterThis = new SpeechSynthesisUtterance();

synth.lang = 'es-ES';
// test("clima")
// // commands["clima"]()
console.log(commands)

// what happens when it returns the things
recognition.onresult = (event) => {
	let results = event.results;
	let phrase = results[results.length - 1][0].transcript;
	textarea.value = phrase

	const deleteThese = /[!"#$%&'()*+,-./:;<=>¿?@[\]^_`{|}~\u0300-\u036f]/g;
	phrase = phrase.toLowerCase().replace(deleteThese, '')
	phrase = phrase.split(' ')

	console.log(phrase)

	let unknownCount = 1
	for (let i = 0; i < phrase.length; i++) {
		console.log(unknownCount)
		recognition.abort()
		
		if (commands[phrase[i]]) {
			console.log("YES THERE IS A COMMAND WITH THIS")
			commands[phrase[i]]()
			break
		}

		else {
			unknownCount++

			if (unknownCount == phrase.length) {
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

btnStartRecord.addEventListener('click', () => {
	recognition.start()
})

btnStopRecord.addEventListener('click', () => {
	recognition.abort()
})

function test(phrase) {
	textarea.value = phrase

	const deleteThese = /[!"#$%&'()*+,-./:;<=>¿?@[\]^_`{|}~\u0300-\u036f]/g;
	phrase = phrase.toLowerCase().replace(deleteThese, '')
	phrase = phrase.split(' ')

	console.log(phrase)

	let unknownCount = 1
	for (let i = 0; i < phrase.length; i++) {
		console.log(unknownCount)
		recognition.abort()
		
		if (commands[phrase[i]]) {
			console.log("YES THERE IS A COMMAND WITH THIS")
			commands[phrase[i]]()
			break
		}

		else {
			unknownCount++

			if (unknownCount == phrase.length) {
				utterThis.text = "Lo siento, no conozco ese comando"
				synth.speak(utterThis)			
				break
			}
		}
	}
}