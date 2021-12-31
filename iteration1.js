/* <!-- 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. --> */

window.onload = () =>{

datosGet()

}

datosGet = () =>{
arrayData = []
    const URL = 'https://api.agify.io?name=michael'
    
    arrayData.push(fetch(URL).then((respuesta)=> respuesta.json()))
    console.log(arrayData)

    Promise.all(arrayData).then((datos) =>{
        console.log(datos)
    })
  
}
/* 
2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io'; */