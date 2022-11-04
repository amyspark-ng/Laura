import { synth, utterThis, recognition, ogPhrase } from "./script.js"

export let management = {
    joking: false
}

export let commands = {
    "hola": function() {
        management.joking = false

        utterThis.text = "Hola, en que puedo ayudarte?"
        synth.speak(utterThis) 
        recognition.abort()
    },

    "chiste": function() {
        management.joking = true

        let jokes = [
            "Sabes como se dice Electricista en japones?. Yokito Fokito!",
            "Sabes que paso con el espantapajaros que hizo dieta?. Quedo mas flaco que una escopeta!",
            "Cual es el colmo de Aladdin?. Tener mal genio!",
            "A donde van las pulgas cuando mueren?. Al pulgatorio!",
            "Cual es el cafe mas peligroso del mundo?. El ex-preso!",
            "Sabes que pasa si tiras un pato al agua?. Nada!",
            "Como se dice suegra en griego?. Storbas",
            "Sabes como queda un mago despues de comer?. Magordito!",
            "Que le dice un techo a otro?. Techo de menos!",
            "Sabes cual es la fruta mas divertida?. La naranjajaja",
            "Sabes donde cuelga Superman su capa?. En superchero",
            "Porque fue una caja al gimnasio?. Para volverse una caja fuerte",
            "Que hace una persona con un sobre de Ketchup en su oreja?. Esta escuchando salsa",
            "Sabes como se llama el primo vegano de Bruce Lee?. Broco lee",
            "Que son 50 fisicos y 50 quimicos?. Son 100tificos",
            "Llega un hombre a una tienda y dice, Tienen libros para el cansancio?, Si pero estan agotados",
            "Que hace un perro con un taladro?. Taladrando",
            "Que le dice una gallina triste a otra gallina triste?. Necesitamos apoyo",
            "Sabes como se dice disparo en arabe?. Ahivalabala",
            "Que le dice una barra de pan a otra?. Te presento una miga",
            "Sabes porque le dio un paro cardiaco a la impresora?. Porque tuvo una impresion muy fuerte",
            "Sabes que hace una abeja en el gimnasio?. Zumba",
            "Un hombre le dice a su doctor, Doctor tengo asma! Es grave?!. Y este le responde no, es drujula",
            "De que se quejan siempre los astronautas?. Falta de espacio",
            "Un niño le dice a su madre: mamá en el colegio me dicen despistado y ella le responde niño esta no es tu casa",
            "Un señor le dice a su doctor doctor tengo pelo en todo el cuerpo que padezco? Y este le responde padece uste un ochito",
            "Que le dice una impresora a otra?. Esa hoja es tuya o es impresion mia",
            "Sabes que le dice un gif a un png?. Animate hombre",
            "Una familia ocupo un terreno en Hawaii. Ahora a ver quien los desaloha",
            "Van dos ciegos y uno le dice al otro, ojala lloviera y el otro le responde ojala yo tambien",
            "Que es un pelo en una cama?. El vello durmiente",
            "Que le dice un chinche a otro chince?. Voy a ser chinchero, te quiero",
            "Que le dijo el 1 al 10?. Para ser como yo tienes que ser sin cero",
            "Llega un señor a una farmacia. Tienen pastillas para el cansancio?, Lo siento estan agotadas",
            "Que le dice un 2 a un 0?. Veinte conmigo guapeton",
            "Como se llama el hermano enfermo de Hello Kitty?. Bron-quiti",
            "Que hace un policia parado en una playa?. Esperando la ola criminal",
            "Cual es el pez que da mas leche?. El pezon",
            "Como se dice naufrago en chino?. Chinchu lancha",
            "Si thor hubiese estudiado medicina seria, doc, thor",
            "Porque windows tiene gripe?. Por abrir tantas ventanas",
            "Porque messi no bautiza a su hijo?. Porque si no seria cristiano",
            "Que hace una vaca con los ojos cerrados?. Leche concentrada",
        ]

        let selectedJoke = jokes[Math.floor(Math.random()*jokes.length)];

        recognition.abort()
        utterThis.text = selectedJoke
        synth.speak(utterThis)
    },
    
    "amor": function() {
        management.joking = true

        utterThis.text = "No conozco el amor del todo, pero me han contado que el amor es un sentimiento que hace a las personas sentirse en las nubes, lo unico que se es que para mi estar en la nube es completamente normal"
        synth.speak(utterThis) 
        recognition.abort()
    },

    "busca": function() {
        management.joking = false
        utterThis.text = "Abrire una nueva pestaña"
        setTimeout(() => {
            let query = ogPhrase.replace('busca', '')
            let url = `https://www.google.com/search?q=${query}`
            window.open(url, '_blank');
        }, 3000);

        synth.speak(utterThis) 
        recognition.abort()
    },

    "numero": function() {
        management.joking = false

        let numeritos = ogPhrase.split(' ')
        numeritos = numeritos.filter(a => /\d/.test(a))

        for(let i = 0; i < numeritos.length; i++) {
            numeritos[i] = parseInt(numeritos[i], 10)
        }

        let greatNumber = Math.max(...numeritos)
        let smallNumber = Math.min(...numeritos)
        let randomNumber = Math.floor((Math.random() * greatNumber) + smallNumber);
        
        let finalPhrase = `Un numero aleatorio entre ${smallNumber} y ${greatNumber}, ${randomNumber}`

        console.log(finalPhrase)

        utterThis.text = finalPhrase
        synth.speak(utterThis)
        recognition.abort()
    },
}
