# Portal da República Federativa do Grupo

**Versão 8.67.42a** · Documento oficial de leitura obrigatória, ainda que ninguém leia.

Parabéns. Você abriu o README. Isso estatisticamente o coloca acima de quase todos os visitantes, que clicam em "Aceito" sem ler nada. A Administração agradece e registra o feito.

Este é um site estático em HTML, CSS e JavaScript. Não possui backend, banco de dados nem autenticação. Isso significa que, se algo quebrar, não há ninguém para culpar além de você. Isto não é uma ameaça. É uma observação técnica.

## Como visualizar
Abra `index.html` no navegador. É o único passo que foi projetado para ser fácil. Os outros ficaram mais interessantes.

Algumas funções do site, como lembrar as suas escolhas, só funcionam com o site publicado (veja o fim deste documento). Abrir o arquivo direto do computador é permitido, mas o resultado será... educativo.

## Como personalizar
- Para a página de **Autoridades**, edite apenas `assets/autoridades.js`. Cada administrador é um bloco com `nome`, `titulo`, `cargo`, `nomeacao`, `foto` e `bio`. O `autoridades.html` não precisa ser tocado. Por favor, não toque nele.
- Para alterar cores e layout, edite `assets/style.css`. O modo escuro fica no final do arquivo, na seção `MODO ESCURO`.
- Para atualizar textos e comunicados, edite as páginas HTML. Cuidado para não apagar nenhum `<` ou `>`. Eles são pequenos, mas sustentam tudo.

## Como editar a página de Autoridades
1. Abra `assets/autoridades.js` e altere somente o texto entre aspas. Não apague vírgulas, chaves `{ }`, colchetes `[ ]` nem aspas. Elas parecem sem importância. Não são.
2. Para adicionar uma pessoa, copie um bloco inteiro (de `{` até `}`), cole depois do último e separe os blocos com vírgula. O último bloco fica sem vírgula depois do `}`.
3. Para colocar uma foto, envie a imagem para `assets/autoridades/` e preencha o campo `foto`, por exemplo `foto: "assets/autoridades/nome.jpg"`. Enquanto a pessoa não enviar a foto, deixe `foto: ""` e o ícone ♙ aparece no lugar. Ele representa bem a situação.
4. Recorte as fotos na proporção 9:5 (por exemplo, 900 × 500 px), que é a do quadro do site (altura fixa de 180 px). Assim o site quase não corta a imagem. Quase.
5. Se a galeria ficar vazia depois de uma edição, provavelmente falta uma vírgula, uma aspa ou uma chave. Desfaça a última alteração e tente de novo. Nós esperaremos. Temos tempo. Mais do que você.

## Estrutura dos arquivos da página de Autoridades
- `autoridades.html`: a estrutura da página, com o espaço onde a galeria é montada.
- `assets/autoridades.js`: a lista de administradores. É o arquivo que você edita.
- `assets/autoridades/`: as fotos dos administradores.

## Modo escuro
O menu tem um botão **Modo escuro / Modo claro** no canto direito. Ele é criado por `assets/site.js` em todas as páginas, e a escolha fica salva no navegador. Na primeira visita, o site segue o tema do sistema do visitante.

Quem prefere o modo claro será respeitado. Em silêncio, mas respeitado.

## Cookies e Termos de Uso
Na primeira visita aparecem duas caixas, uma depois da outra: o aviso de cookies e os termos de uso. Elas são criadas por `assets/site.js` em todas as páginas.

- Para editar o texto dos termos, altere apenas a lista `TERMOS` no `assets/site.js`. Cada item é `['título da cláusula','texto']`.
- A versão que aparece nos termos fica no próprio `assets/site.js`, no texto "Versão 8.67.42a". Para atualizar, procure por ela. Sim, o número é importante. Não, ninguém sabe por quê.
- Para as caixas aparecerem de novo para todos os visitantes, troque o número em `const VERSAO='1'` (por exemplo, para `'2'`). Ninguém será consultado sobre isso.
- Depois de aceitar os termos pela primeira vez, aparece uma barra de progresso na parte de baixo da página. É só efeito visual: o site não pede nem acessa localização, câmera, microfone ou qualquer outra coisa. Para mudar as mensagens e os tempos, edite a lista `ETAPAS` no `assets/site.js`.
- Os cookies são de verdade, mas guardam apenas valores inofensivos no navegador de cada visitante. Se o navegador bloquear cookies, o site usa o armazenamento local. A Administração não vê a diferença e, portanto, não se importa.
- O rodapé de todas as páginas tem um link para reler os termos. Não é obrigatório reler. É apenas recomendado, em tom de quem já sabe que não será lido.

## Notas de atualização
Ficam em `atualizacoes.html`, e o menu do site ganha o link "Atualizações" automaticamente (isso é feito pelo `assets/site.js`). Para registrar uma nova versão, copie um bloco `<div class="content">` inteiro, cole acima do mais recente e troque o número da versão. Documentar tudo não é obrigatório. A Administração prefere que não.

## Publicar gratuitamente com GitHub Pages
1. Crie um repositório público no GitHub.
2. Envie todos os arquivos e pastas deste projeto para a raiz do repositório.
3. Abra Settings > Pages.
4. Em Build and deployment, selecione Deploy from a branch.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a publicação. Leva cerca de um minuto. Use esse tempo para refletir sobre as suas escolhas.

O endereço ficará no formato `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`. Depois de publicar, aperte **Ctrl+F5** para ver as mudanças. O navegador adora mostrar a versão antiga.

## Dúvidas
Consulte este README. Dúvidas sobre a piscina não serão respondidas, anotadas, nem reconhecidas como dúvidas.

## Observação
Projeto humorístico e fictício, sem vínculo com órgãos públicos brasileiros ou de qualquer outro país. Nomes, cargos, instituições e almas são elementos de sátira. Nenhuma alma foi realmente adquirida. Por enquanto.
