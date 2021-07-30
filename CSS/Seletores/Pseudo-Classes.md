# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começa com 2 pontos seguido do nome da pseudo class
`:pseudo-class-name`

## Selecionando elementos com pseudo-classes

* :first-child
* :nth-of-type()
* :nth-child()

    ## first-child
```HTML
<ul>
    <h2>Palavras Bonitas</h2> // neste caso o css não vai localizar o primeiro filho do ul como sendo o li, mas sim o h2. Para utilizar o li, precisaria ser o second-child
    <li>Gratidão</li>
        <li>Esperança</li>
    <li>Fé</li>
</ul>
```
```css
    ul li{
        font-weight: bold;
} //todos os li foram selecionados
    ul li:first-child{
        font-weight: bold;
} //Somente o primeiro li foi selecionado
```
## nth-of-type()
´´´html
<article>
    <h3>Gratidão</h3>
    <p>loren</p>
    <p>asdasd</p>
    <p>fdgdgdfg</p>
</article>
´´´css

```
article p:nth-of-type(1){ // pegue dos tipos de P dentro de article o número 1 (primeiro parágrafo)
    font-weight: bold;
    font-size: 18px;
}
```
## nth-child()
html
<article>
    <h3>Gratidão</h3>
    <p>loren</p>
    <p>asdasd</p>
    <p>fdgdgdfg</p>
</article>

css

    article h3  :nth-child(1){
    font-weight: bold;
    font-size: 18px;
}
 // vai começar a contar os filhos do article, portanto, o child número 1 é o h3. Para selecionar o P, seria
    article p:nth-child(3){
    font-weight: bold;
    font-size: 18px;
}

## nth-child odd e even
## even = números pares
## odd = números ímpares
<ul>
    <li>Gratidão</li>
    <li>Esperança</li>
    <li>Fé</li>
    <li>Liberdade</li>
    <li>Liberdade</li>
    <li>Liberdade</li>
    <li>Liberdade</li>
</ul>
CSS
ul li:nth-child(even){
    color: black;
    background: #eee;
}
ul li:nth-child(odd){
    color: white;
    background:red;
}


## Ações do Usuário

* :hover
* :focus
```css
button:hover{
    color: red;
}
a:hover{
    color:blue;
}
input:focus{ // cor da borda do campo input é alterado, pois o campo está em focus
    border-color:red;
    outline: none;
}

## Atributos

* :disabled
* :required

/* o disabled vai verificar se tem algum atributo "disabled" no elemento, se houver, ele vai executar a função do css e alterar o estilo do elemento. Portanto, se não houver ele vai ignorar a estilização do elemento

O mesmo serve para o atributo "required", "se for required, execute-a! Se não for, não faça nada."*/
input:disabled{ 
    background-color: green:
}


 ```
 ## Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
