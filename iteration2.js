/* 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
async-await. */

const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 4000);
    })

    promise.then(() => {console.log('Time out!')})
};




async function wait(){
    await runTimeOut();
}

wait()

/* 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador */


async function getCharacters () {
    const URL = 'https://rickandmortyapi.com/api/character'
    let respuesta = await fetch(URL)
    let dato = await respuesta.json()
    console.log(dato)
}

getCharacters();
