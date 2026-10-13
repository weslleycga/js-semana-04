# Arrays, DOM e Eventos – Semana 04

Exercícios práticos de arrays, manipulação do DOM e eventos em JavaScript.
Abra `index.html` no navegador e o Console (F12) para ver os resultados.

## Métodos de array

- **forEach**: percorre o array executando uma função em cada item; não retorna nada.
- **map**: transforma cada item e devolve um **novo array** do mesmo tamanho.
- **filter**: devolve um **novo array** só com os itens que passam no teste.
- **reduce**: acumula todos os itens em **um único valor** (ex.: soma).

`map` e `filter` não alteram o array original.

## Manipulação do DOM

Elementos são selecionados com `querySelector` / `querySelectorAll`, criados com
`createElement`, inseridos com `append` e estilizados com `classList`
(`add`, `toggle`, `contains`). `textContent` insere só texto (mais seguro);
`innerHTML` interpreta tags HTML.

## Event Delegation

Em vez de um listener por `<li>`, há **um único** listener na `#lista`; o item
clicado é identificado por `e.target` (`tagName === "LI"`). Isso economiza memória
e desempenho e faz com que itens criados dinamicamente depois também respondam
ao clique, sem precisar registrar novos listeners.
