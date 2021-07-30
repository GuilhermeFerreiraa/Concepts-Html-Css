# Propriedades do Flex Container

* Direção dos itens
* Multi linhas
* Alinhamento
    * Principal 
    * Cruzado
* Espaços entre os itens

# Direção dos itens

- Flex é uma dimensão (horizontal ou vertical)
- Podemos mudar a direção com `flex-direction`
- Valores: (row - linha | row-reverse - linha reversa | column - coluna | column-reverse - coluna reversa)

por padrão os valores são row

# flex-wrap
- mais de um eixo principal
- Podemos usar multi linhas.
- Cada nova linha, um novo flex container


# Flex-flow

- shorthand
- flex-direction || flex-wrap


# justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

## Valores

- flex-start - alinha ao inicio do eixo
- flex-end - alinha ao fim do eixo
- center - alinha ao centro
- space-around - espaço ao redor dos elementos
- space-between - espaço entre elementos
- space-evenly - espaço por igual entre elementos

* funciona com flex-direction

# align-items

- Alinhamento dos elementos no eixo cruzado

## Valores

- stretch (valor padrão) - "esticar no eixo"
- flex-start - elementos no inicio do eixo cruzado
- flex-end - elementos no final do eixo cruzado
- center - - elementos no centro do eixo cruzado


# gap

- Espaços entre os elementos

## valores

gap - "vão" entre os elementos
Unidades de medidas
fixas: px, pt (mais comum pixels)
flexíveis: %, em, rem
