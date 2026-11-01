# Portal da República Federativa do Grupo

Site estático em HTML, CSS e JavaScript. Não possui backend, banco de dados ou autenticação.

## Como visualizar
Abra `index.html` no navegador.

## Como personalizar
- Para a página de autoridades, edite apenas `assets/autoridades.js`. Cada administrador é um bloco com `nome`, `titulo`, `cargo`, `nomeacao`, `foto` e `bio`. O arquivo `autoridades.html` não precisa ser alterado.
- Edite `assets/style.css` para alterar cores e layout.
- Edite as páginas HTML para atualizar textos e comunicados.

## Como editar a página de Autoridades
1. Abra `assets/autoridades.js` e altere somente o texto entre aspas. Não apague vírgulas, chaves `{ }`, colchetes `[ ]` nem aspas.
2. Para adicionar uma pessoa, copie um bloco inteiro (de `{` até `}`), cole depois do último e separe os blocos com vírgula. O último bloco fica sem vírgula depois do `}`.
3. Para colocar uma foto, envie a imagem para `assets/autoridades/` e preencha o campo `foto`, por exemplo `foto: "assets/autoridades/nome.jpg"`. Enquanto a pessoa não enviar a foto, deixe `foto: ""` e o ícone ♙ aparece no lugar.
4. Recorte as fotos na proporção 9:5 (por exemplo, 900 × 500 px), que é a do quadro do site (altura fixa de 180 px). Assim o site quase não corta a imagem.
5. Se a galeria ficar vazia após uma edição, provavelmente falta uma vírgula, aspas ou chave no arquivo. Desfaça a última alteração e tente de novo.

## Estrutura dos arquivos da página de Autoridades
- `autoridades.html`: estrutura da página, com a área onde a galeria é montada.
- `assets/autoridades.js`: lista de administradores (é o arquivo que você edita).
- `assets/autoridades/`: fotos dos administradores.

## Publicar gratuitamente com GitHub Pages
1. Crie um repositório público no GitHub.
2. Envie todos os arquivos e pastas deste projeto para a raiz do repositório.
3. Abra Settings > Pages.
4. Em Build and deployment, selecione Deploy from a branch.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a publicação.

O endereço ficará no formato `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Observação
Projeto humorístico e fictício, sem vínculo com órgãos públicos brasileiros.
