// Criando e Adicionando elementos na página

// createElement
// const div = document.createElement('div')

// div.innerText = 'Olá Devs!'

//append prepend
// const body = document.querySelector('body')
// append - vai adicionar algum elemento após o ultimo filho 
// prepend - vai adicionar algum elemento antes do primeiro filho 
// body.prepend(div)

// =============================================================

// Adicionando elementos
const div = document.createElement('div')
div.innerText = "Olá Devs!"

// InsertBefore - inserir no meio
// const body = document.querySelector('body')
// const script = body.querySelector('body script')
// body.insertBefore(div, script)

// InsertAfter - inserir depois 
const body = document.querySelector('body')
const header = body.querySelector('body header')
body.insertBefore(div, header.nextSibling)



