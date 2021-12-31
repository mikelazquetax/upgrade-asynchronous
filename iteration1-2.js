/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io'; */

/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */

/* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */
let i = 0
window.onload = () =>{
    let inputButton = document.querySelector('button')
    inputButton.addEventListener('click',() =>{
        let inputText = document.querySelector('input').value
        functFecth(inputText)
    })
 

}

functFecth = (inputText) =>{
    const ArrayData = []
    
    const URL = `https://api.nationalize.io/?name=${inputText}`

    ArrayData.push(fetch(URL).then((respuesta)=>respuesta.json()))
    
    Promise.all(ArrayData).then((datos)=>{
        console.log(datos)
        let bodyDoc = document.body

    
        datos[0].country.forEach((item)=>{
      
        let buttonX = document.createElement('button')
        buttonX.innerText = 'X'
        buttonX.id = i
        let divName = document.createElement('div')
        divName.id =  'div' + i
        let name = document.createElement('p')  
        name.innerText =  `El nombre ${datos[0].name} tiene un ${item.probability} de probabilidades de ser de ${item.country_id}` 
        divName.appendChild(name)
        divName.appendChild(buttonX)
        bodyDoc.appendChild(divName)
        i = i + 1
        buttonX.addEventListener('click', (event)=>{
            idBotonPulsado = event.target.id
            borrarDiv(idBotonPulsado)
        })

       })
  
    })
}

borrarDiv = (idBotonPulsado) =>{
let ident = 'div' + idBotonPulsado
divFetch = document.getElementById(ident)
divFetch.remove()
}