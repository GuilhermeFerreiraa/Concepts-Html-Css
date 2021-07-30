// Eventos

// function print(){
//     console.log('print')
// }

// ================ Adicionando eventos via HTML ================

// Eventos de teclado

// const input = document.querySelector('input')

// input.onkeypress = function (){
//     console.log('rodei')
// }
// ================ Eventos de teclado ================

// Adicionando eventos via JS

// const h1 = document.querySelector('h1')

// h1.addEventListener('click',print)
// addEventListener - "ouvidor de eventos" ("o tipo do evento = click", a função a ser executada = print )
// function print(){
    //     console.log('Print')
    // }

// ================ Adicionando eventos via JS ================

// Adicionando eventos via Js (Outro Método)
// const h1 = document.querySelector('h1')

// h1.onclick = print

// dessa maneira sempre vai se considerar a última função que o JS encontrar
// h1.onclick = print
// function print(){
//     console.log('Outro Momento')
// }

// maneira recomendada 

// h1.addEventListener('click', print)

// function print(){
//     console.log('Print')
// }
// h1.addEventListener('click', function(){
//     console.log("outro momento")
// })


// ================ Adicionando eventos via JS (Outro Método) ================

// Event
// Argument Event

// const input = document.querySelector('input')

// input.onkeydown = function (event){
//     console.log(event.currentTarget.value) // currentTarget.value - vai buscar o valor do target (o input no caso) e vai trazer o valor digitado dentro do input
    
// }

