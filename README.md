# Portal da República Federativa do Grupo

Site estático em HTML, CSS e JavaScript. Não possui backend, banco de dados ou autenticação.

## Como visualizar
Abra `index.html` no navegador.

## Como personalizar
- Para a página de autoridades, edite apenas `assets/autoridades.js`. Cada administrador é um bloco com `nome`, `titulo`, `cargo`, `nomeacao`, `foto` e `bio`. O arquivo `autoridades.html` não precisa ser alterado.
- Edite `assets/style.css` para alterar cores e layout. O modo escuro fica no final desse arquivo, na seção `MODO ESCURO`.
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

## Modo escuro
O site tem um botão **Modo escuro / Modo claro** no canto direito do menu. Ele é criado por `assets/site.js` em todas as páginas e a escolha fica salva no navegador. Na primeira visita, o site segue o tema do sistema do visitante.

## Cookies e Termos de Uso (humor)
Na primeira visita aparecem duas caixas, uma depois da outra: aviso de cookies e termos de uso. Elas são criadas por `assets/site.js` em todas as páginas, e o estilo fica no fim de `assets/style.css`.
- Para editar o texto dos termos, altere apenas a lista `TERMOS` no fim do `assets/site.js`. Cada item é `['título da cláusula','texto']`.
- Para as caixas aparecerem de novo para todos os visitantes, troque o número em `const VERSAO='1'` (por exemplo, para `'2'`).
- Depois de aceitar os termos pela primeira vez, aparece uma barra de progresso falsa na parte de baixo da página (localização, câmera, microfone, venda da alma). É só efeito visual: o site não pede nem acessa nada disso. Para mudar as mensagens e os tempos, edite a lista `ETAPAS` no `assets/site.js`.
- A escolha fica salva no navegador de cada visitante. O rodapé de todas as páginas tem o link "Termos de Uso e Política de Cookies", que reabre os termos.

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
