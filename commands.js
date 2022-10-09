import { commands } from "./script.js"

export let commands = {
    "hola": function() {
        utterThis.text = "Hola, en que puedo ayudarte?"

        synth.speak(utterThis) 
    },
    
    "clima": function() {
        console.log("Hay buen clima") 
    },
    
    "error": function() {
        console.log("NO CONOZCO ESE COMANDO") 
    },
}
