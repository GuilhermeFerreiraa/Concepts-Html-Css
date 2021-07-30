# Pseudo-elements

Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

`::pseudo-element-name`

## Exemplos

* ::before
* ::after
* ::first-line

## ::Before e ::After

<ul>
    <li>Gratidão</li>
    <li>Esperança</li>
    <li>Fé</li>
    <li>Liberdade</li>
</ul>

```css
ul li::before{
    content: ">" 
}
// ainda que seja um conteudo vazio, é necessário haver um "content" dentro do before e after.
ul{
    position: relative
}
ul li::after{
    content: "";
    width: 10px;
    height: 1px;
    background-color: blue;
    position: absolute;
    bottom: 0px;
}
// mesmo que haja tudo isso de código descrito acima, se não houver o CONTENT não terá a execução dessas outras propriedades definidas (tanto para o after quanto para o before)
```
## ::first-line
```css
p::first-line {
    font-weight: bold;

}
// podemos agrupar pseudo-classes com pseudo-elements

p:nth-of-type(2)::first-line{
    font-weight: 20px;
}
// portanto, ele vai buscar dentro da tag p a primeira linha (a "first-line") e vai executar a estilização
```
# Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements