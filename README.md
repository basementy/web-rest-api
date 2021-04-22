# WEB REST API

Desenvolver uma API Crud de Animais (back-end apenas). De início o banco pode ser em memória.

Descricao do objeto Animal:
  - Long id;
  - String descricaoAnimal;
  - Enum grupoAnimais (Terrestre, Aquático, etc);
  - Enum classeAnimais (mamífero, réptil, etc).

Métodos:
   - POST > /animal -> saveAnimal();
   - UPDATE > /animal/{id} -> updateAnimal(id);
   - DELETE > /animal/{id} -> deleteAnimal(id);
   - GET > /animais -> getAll();
   - GET > /animal/{id} -> getById(id);
   - GET > /animal/{descricaoAnimal} -> getByDescription(descricaoAnimal);
   - GET > /animal/{grupoAnimais} -> getByGroup(grupoAnimais);
   - GET > /animal/{classeAnimais} -> getByClass(classeAnimais).

## Dependências

- npm
- node
- typescript
- lodash
- express

## Instalação

```bash
nvm use # definição da versão do node
yarn # ou npm install
```
## Execução

```bash
yarn start # ou npm start
```
## API Rotas

### GET

- /animals (query params: class, group & description)
- /animals/:id

### POST

- /animals

### PUT

- /animals/:id

### DELETE

- /animals/:id
