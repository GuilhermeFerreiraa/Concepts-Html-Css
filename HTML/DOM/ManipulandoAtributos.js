// textContent

// Manipulando conteúdo
// textContent

// element.textContent += " Olá devs"

// console.log(element.textContent)

// =============================
//Manipulando conteúdo
// innerText - troca o texto interno do html
// element.innerText = 'Olá Devs'

// =============================
// Manipulando conteúdo
// innerHTML
// adicionando e modificando o conteúdo HTML, através do Javascript
// element.innerHTML = 'To craque no dev <small>!!!</small>'

// =============================
// Manipulando o valor de um input
// value
// consigo pegar o valor ou atribuir um valor
// console.log(element.value)
// element.value = "outro valor"

// =============================
// Manipulando elementos
// Atributos dos elementos
// setAttribute - define um atributo para um elemento
// removeAttribute - remove um atributo de um elemento

const header = document.querySelector('header')
header.setAttribute ('id', 'header')
// adicionei um atributo ID no header

const headerID = document.querySelector('#header')
// pesquisei o id do header

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')
