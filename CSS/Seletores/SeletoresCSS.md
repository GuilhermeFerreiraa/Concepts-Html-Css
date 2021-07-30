# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento. 

## Tipos

* Element Selector - (`h1, body, html, header, main, section`)
    - Todos os elementos HTML

* ID Selector (`#NameID`)
    - Um elemento que tenha um atributo `id`
    - Cada id deverá ser único.

* Class Selector (`.NameClass`)
    - Os elementos que contenha um atributo `class`
    - Podemos ter uma ou mais classes.

* Attribute Selector (`[title]`)
    - Os elementos que tenha um atributo específico.

* Pseudo-class Selector (`p:hover, h1:hover`)
    - Elementos em um estado específico.

    ## Múltiplos

    Você poderá selecionar múltiplos elementos e aplicar alguma regra css para todos eles.

    Usamos uma separação por vírgulas para isso.

    ```css
    h1, p, a{
        color: red;
    }
    ```