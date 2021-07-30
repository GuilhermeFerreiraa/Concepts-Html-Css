// Navegando pelos elementos
// parentNode parentElement

// const element = document.querySelector('body')

// console.log(element.parentNode)
// console.log(body.parentElement)

// =============== parentElement e parentNode ==============

// Navegando pelos elementos

// childNodes children
// const el = document.querySelector('body')

// console.log(el.childNodes) // filhos, busca todas as tags dentro do pai 'body', levando em conta os espaços vazios
// console.log(el.children) // HTML colecction não leva em consideração os espaçamentos

// firstChild firstElementChild
// console.log(el.firstChild) // o firstChild respeita o espaçamento do HTML também

// console.log(el.firstElementChild) // o firstElementChild não respeita o espaçamento e só atribui a tag filha primária 

// lastChild lastElementChild

// console.log(el.lastChild)

// console.log(el.lastElementChild)

//================ Pegando elementos Filhos ^===========================

// Navegando pelos elementos 

const el = document.querySelector('body script')
// nextSibling nextElementSibling - sibling = irmaos
console.log(el.nextSibling) // respeita o espaçamento

console.log(el.nextElementSibling) // não respeita o espaçamento

// previuousSibling previousElementSibling
console.log(el.previousSibling) // respeita o espaçamento
console.log(el.previousElementSibling) // não respeita o espaçamento

