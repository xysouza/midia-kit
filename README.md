## Media Kit (React + Chakra UI)

Projeto inicial limpo a partir do template Vite + React + TS, com estrutura organizada para um Media Kit e Chakra UI configurado.

### Scripts

- dev: inicia o servidor Vite
- build: checa tipos e faz build de produção
- preview: pré-visualiza o build

### Como rodar (Windows PowerShell)

```
npm install
npm run dev
```

### Estrutura

```
src/
  assets/
    icons/
    images/
  components/
    Header.tsx
    Footer.tsx
    index.ts
  layouts/
    MainLayout.tsx
    index.ts
  pages/
    Home.tsx
    index.ts
  theme/
    index.ts
  hooks/
  lib/
  types/
  App.tsx
  main.tsx
```

### Chakra UI

- Provider aplicado em `src/main.tsx` com tema base em `src/theme/index.ts`.
- Alternância de tema (light/dark) no Header.

Dependências necessárias (já adicionadas quando você rodar o comando de instalação abaixo):

- @chakra-ui/react
- @chakra-ui/icons
- @emotion/react
- @emotion/styled
- framer-motion

### MCP (Model Context Protocol)

Configuração em `.vscode/mcp.json` com servidores úteis (filesystem, shell, git, web e chakra-ui). Se o schema não carregar no editor, é esperado; os servidores rodam via npx.

### Próximos passos

- Começar a preencher os componentes do Media Kit (seções de marca, tipografia, paleta, logos, botões de download, etc.).
- Adicionar rotas se necessário (React Router) e páginas adicionais.
