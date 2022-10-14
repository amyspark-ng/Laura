import { commands } from "./commands.js"

if (!("webkitSpeechRecognition" in window)) {
	alert("DOESN'T WORK ON THIS BROWSER GET ANOTHER ONE")
} 

else {
	// getting the dummy buttons
	const btnStartRecord = document.querySelector("#btnStartRecord")
	const btnStopRecord = document.querySelector("#btnStopRecord")
	const textarea = document.querySelector("#text")

	// setting stuff up
	let recognition = new webkitSpeechRecognition();
	recognition.lang = 'es-ES';
	recognition.continuous = true;
	recognition.interimResults = false;

	console.log(recognition)

	export let synth = window.speechSynthesis;
	export let utterThis = new SpeechSynthesisUtterance();

	synth.lang = 'es-ES';

	// what happens when it returns the things
	recognition.onresult = (event) => {
		console.log("FUCK YOU")
		const results = event.results;
		console.log(results)
		const phrase = results[results.length - 1][0].transcript;
		textarea.value += phrase

		phrase = phrase.split()

		// lajbel genius
		for (k of phrase) {
			if (commands[k]) {
				commands[k]()
			}
		
			else {
				utterThis.text = "Lo siento, no conozco ese comando"
				synth.speak(utterThis)			
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
}
