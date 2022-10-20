//importamos paquete con constante llamada servidorWeb
const servidorWeb = require("express");

const app = servidorWeb();
const puerto = 3001;

app.get('/', (req,res) => { //req cliente me envia, res servidosr me responde
    res.send("Estás consultando la raiz de la API")
});

app.get('/persona', (req,res) => { //req cliente me envia, res servidosr me responde
    
    let persona = {
        "nombre": "Juan Carlos",
        "apellido": "Zambrano",
        "estadoCivil": "Casado",
        "edad": 30,
        "tieneHijos": true,
        "medicoAsignado": "{\"id\": 123, \"nombre\": \"medico 1\", \"licencia\" : \"123456\"}"
    }

    res.send(persona);
});

app.listen(puerto, () => {
    console.log("El servidor está en ejecución en el puerto " + puerto);
});
