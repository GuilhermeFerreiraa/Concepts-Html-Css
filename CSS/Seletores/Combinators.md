# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma atualização

# Descedant Combinator

* Identificado por um espaço entre os seletores.
* Busca um elemento dentro de outro.
* Ainda que haja um elemento no caminho.

```css
body article h2
```

# Child Combinator

* Identificado pelo sinal `>` entre dois seletores.
* Seleciona somente o elemento que é filho direto do pai.
* Elementos depois do filho serão desconsiderados.

```css

body > ul > li {
    color: blue;
}

```

## Adjacent Sibling Combinator

* Identificado pelo sinal `+` entre dois seletores.
* Seleciona somente o elemento do lado direto que é irmão direto na hierarquia

```css
h1 + p

```

## General Sibling Combinator

* Identificado pelo sinal `~` entre dois seletores.
* Seleciona todos os elementos irmãos

```css
    h1 ~ p

```

# Utilizando Combinadores

```HTML
<ul>
    <li>Aloo</li>
    <li class="red">Hey</li>
</ul>
```

```css
ul > li{class="red"}{
    color: blue;
}

(Maneira "menos específica", porém, mais eficiênte)

.red{
color: blue;

}

```

## Dica

* Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.  