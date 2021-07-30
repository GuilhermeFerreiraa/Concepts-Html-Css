// Alternando Estilos
// style é uma propriedade que permite que eu coloque o css em linha no javascript
// tiro o hífen e coloco a próxima letra maiúscula " camelCase "
// posso setar valores, ou posso também pegar valores de estilo

// const element = document.querySelector('body')

// element.style.backgroundColor = '#f9f3d2'

// console.log(element.style.backgroundColor)

// =================================

// Alternando estilos
// classList - trás uma lista de classes
//toggle vai pesquisar se a classe existir ele tira, se não existir ele adiciona

const element = document.querySelector('body')

element.classList.add('active', 'green')
console.log(element.classList)
//adicionei

element.classList.remove('active') 
console.log(element.classList)
//removi o active

element.classList.toggle('active')
console.log(element.classList)
// adicionei o active, pois tinha removido