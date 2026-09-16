# JSX Avvançado, Componentes e Props

## Regras fundamentais

- JSX precisa retornar um único elemento pai `<> ... </>` (fragment);
- Expressões Js vão entre chaves `{ }`;
- Comentários em JSX: `{/* ... */}`;
- Atributos usam **camelCase**: `className`, `onClick`...;
- `class` em HTML vira `className` em JSX.

## Funcionamento &&

`Se A for falsy → retorna A`
`Se A for truthy → retorna B`

## Explicação RestProps.js

- `tipo = 'info'` é um valor padrão, caso não seja fornecido um valor para ele, considere que `tipo` é `info`;
- `children` é uma prop especial do React, o React vai disponibilizar o conteúdo através dessa prop;
- `..rest` pega todas as props que não foram retiradas anteriormente e coloque dentro de `rest`;
- `alert-${tipo}` funciona assim, se `tipo` for igual a `'info'` = `alert-info`, está criando dinamicamente o nome da classe CSS.