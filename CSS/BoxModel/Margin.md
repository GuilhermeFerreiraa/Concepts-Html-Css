## Margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left 
- values: `<length>` | `<percentage>` | auto

```css
div{ 
    /* shorthand */
    margin: 12px 16px 10px 4px;
    margin: 12px 16px 0; /* top -- left / right - bottom */
    margin: 12px 16px; /* top-bottom / left-right */
    margin: 8px; /* todos os lados */
}
```
<!-- por padrão o google chrome define 8px de margin em todos os lados. -->
        * Cuidado com margin collapsing (top se ajunta ao bottom)
        quando um esta ao lado do outro não há o margin collapsing,
        porém, há a soma das margins

https://developer.mozilla.org/en-US/docs/Web/CSS/margin