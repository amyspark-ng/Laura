import { synth, utterThis, recognition } from "./script.js"

export let joking = false

export let commands = {
    "hola": function() {
        joking = false

        utterThis.text = "Hola, en que puedo ayudarte?"
        synth.speak(utterThis) 
        recognition.abort()
    },

    "chiste": function() {
        joking = true

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
        ]

        let selectedJoke = jokes[Math.floor(Math.random()*jokes.length)];

        recognition.abort()
        utterThis.text = selectedJoke
        synth.speak(utterThis)
    },
    
    "clima": function() {
        joking = false

        console.log("Hay buen clima") 
    },
}
