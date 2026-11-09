// =====================================================================
//  portaria.js — área restrita (Ministério da Justiça e Assuntos Plausíveis)
//  Projeto humorístico e fictício. Os dados ficam no começo deste arquivo.
//  Para trocar textos, mexa só no que está entre aspas. Marque o que deve
//  aparecer como tarja preta (clique revela) com [[duplo colchete]].
// =====================================================================
(function(){
'use strict';

/* ======================= DADOS (edite aqui) ======================= */
var ORGAO='Ministério da Justiça e Assuntos Plausíveis';

var CASO={
 numero:'000/GEMCP', titulo:'República Federativa v. A Piscina',
 meta:[
  ['Réu','A Piscina'],['Autor','República Federativa do Grupo'],
  ['Juízo','Assembleia Permanente (em caráter permanente)'],
  ['Situação','Fechada desde antes de ser aberta'],
  ['Classificação','SIGILOSO · Nível 7 (não existe nível 6)'],
  ['Abertura do processo','[[Anterior à própria existência do processo]]']
 ],
 resumo:'A piscina sempre existiu e sempre esteve fechada. Não há registro de abertura, inauguração ou ano de construção. Os documentos mais antigos já a descrevem como “fechada por tempo indeterminado”. As tentativas de reabertura falharam por motivos administrativos. As tentativas de localizá-la falharam por motivos que não constam nos autos, porque quem os conhecia não prestou depoimento coerente.',
 tentativas:[
  'Pedido de reabertura protocolado. Arquivado: a piscina já estava fechada para o recebimento do pedido.',
  'Comissão formada para abrir a piscina. A comissão foi dissolvida por não encontrar a piscina para abrir.',
  'Decreto de reabertura publicado. O decreto saiu no diário oficial, que também está fechado.',
  'Tentativa de abrir por fora. Falha: não há por fora.',
  '[[Registro apagado por determinação da Doutrina do Bem Maior.]]'
 ],
 notaTentativas:'Total de falhas administrativas: 5. Falhas dignas de nota: 0. Todas foram pequenas perto das expedições de busca.',
 expedicoes:[
  {efetivo:'4 investigadores',relato:'Seguimos o mapa até o ponto indicado. [[O ponto indicado era outro mapa.]] Retornamos no horário previsto, com um dia a mais.',estado:'Cansados. Um deles passou a contar até sete em voz baixa.'},
  {efetivo:'6 investigadores',relato:'A piscina não foi encontrada. Foi encontrado [[o lugar onde ela estaria, e ele estava molhado]]. Nenhum de nós se molhou.',estado:'Um investigador afirma ter ouvido som de água. Os demais afirmam não ter ouvido nada, em tom ensaiado.'},
  {efetivo:'3 investigadores',relato:'[[████████]] Voltamos duas vezes pelo mesmo caminho, que era de ida.',estado:'Perturbados. Falam apenas em azul.'},
  {efetivo:'2 investigadores',relato:'Chegamos. [[Não chegamos.]] Chegamos, sim. A piscina estava fechada, como sempre esteve.',estado:'Afirmam já ter chegado. Não lembram quando saíram.'},
  {efetivo:'1 voluntário',relato:'Última comunicação por rádio: “ela estava aqui o tempo todo”.',estado:'Retornou, mas não por inteiro.'},
  {efetivo:'[[?]]',relato:'Não há relatório. Quem poderia escrevê-lo faz perguntas.',estado:'Não responde a perguntas. Apenas as faz.'}
 ],
 doutrina:[
  'Considerando que quem procura a piscina deixa de ser quem era, a Assembleia Permanente estabelece que:',
  'I – não se fará perguntas sobre a piscina;',
  'II – não se responderá o pouco que se sabe;',
  'III – o que se sabe será esquecido, de preferência em grupo;',
  'IV – o esquecimento será registrado e, em seguida, esquecido.',
  'Parágrafo único. A Doutrina existe para proteger quem ainda não procurou.'
 ],
 final:'Se você está lendo este dossiê, [[você já perguntou sobre a piscina]]. A Assembleia agradece a sua contribuição involuntária. Sua alma foi (re)vendida nos termos da Cláusula 5ª. Este processo está encerrado. Este processo está aberto desde sempre.'
};

// Comunicados: a ordem na tela vem do campo "data" (que aparece como tarja).
// Para acrescentar um, copie um bloco e escolha a data. O número é automático.
var COMUNICADOS=[
 {data:'0997-01-03',fonte:'Assessoria de Imprensa do Governo Atual',titulo:'Assembleia Permanente reúne-se em caráter permanente',texto:'O governo informa que a Assembleia Permanente reuniu-se ontem, hoje e amanhã, em caráter permanente. Nenhuma decisão foi tomada, o que o governo considera uma decisão.'},
 {data:'0997-01-19',fonte:'Assessoria de Imprensa do Governo Atual',titulo:'Estoque de café é considerado “regular”',texto:'O Ministério do Abastecimento informa que o estoque de café segue regular. Questionado sobre o significado de “regular”, o ministério explicou que regular é o estado normal das coisas.'},
 {data:'0997-02-07',fonte:'Assessoria de Imprensa do Governo Atual',titulo:'Piscina permanece fechada',texto:'O governo atual informa que a piscina permanece fechada, como tem permanecido. Não há motivo para alarme. Pede-se que não haja alarme.'},
 {data:'0997-02-28',fonte:'Assessoria de Imprensa do Governo Atual',titulo:'Governo anuncia a Semana da Conformidade',texto:'Entre os dias 1 e 7, todos ficam convidados a conformar-se. A participação é voluntária e obrigatória.'},
 {data:'0997-04-11',fonte:'Assessoria de Imprensa do Governo Atual',titulo:'Governo amplia o Cadastro Nacional de Opiniões',texto:'O cadastro passa a registrar também as opiniões que o cidadão pretende ter no futuro. O governo agradece a antecipação.'},
 {data:'0997-05-02',fonte:'Assessoria de Imprensa do Governo Atual',titulo:'Cidadãos relatam ter visto a piscina “de relance”',texto:'O governo nega as informações e esclarece que nada foi visto, nada foi relatado e a palavra “relance” está sob revisão.'},
 {data:'0997-05-30',fonte:'Assessoria de Imprensa do Governo Atual',titulo:'Decreto proíbe perguntas sobre a piscina (primeira versão)',texto:'Fica proibido perguntar sobre a piscina. Perguntas já feitas serão consideradas feitas.'},
 {data:'0997-06-21',fonte:'Ministério das Conversas Aprovadas',titulo:'Frases “em desacordo” são recolhidas e devolvidas aos donos',texto:'As frases foram devolvidas com observações. Os donos foram orientados a não repetir o que disseram, nem o que pensaram em dizer.'},
 {data:'0997-08-09',fonte:'Fonte não identificada',titulo:'Documentos vazados sugerem que o governo “nunca mudou de dono”',texto:'Papéis que circulam em conversas informais apontam que o governo atual governa desde antes de haver governo. O governo nega e afirma que não existe “antes”.'},
 {data:'0997-08-27',fonte:'Assessoria de Imprensa do Governo Atual',titulo:'Governo nega conspiração e convoca coletiva de imprensa às 25h',texto:'A coletiva foi realizada com êxito. Não compareceu ninguém, o que o governo interpreta como apoio.'},
 {data:'0997-09-15',fonte:'Assessoria de Imprensa do Governo Atual',titulo:'Cadastro de Opiniões registra aumento de opiniões “suspeitas”',texto:'O governo atribui o aumento ao clima e à lua. Solicita que o clima e a lua se pronunciem.'},
 {data:'0997-11-04',fonte:'Cidadãos',titulo:'Cidadãos convocam passeio coletivo à cachoeira',texto:'Foi divulgado convite aberto para um passeio à cachoeira. O governo considera a iniciativa inofensiva e recomenda protetor solar.'},
 {data:'0997-11-22',fonte:'Testemunhas',titulo:'Atividades suspeitas na cachoeira',texto:'Testemunhas relatam reuniões de planejamento disfarçadas de lanche, com mapas desenhados em guardanapos. O governo informa que guardanapos não são prova.'},
 {data:'0997-12-08',fonte:'Assessoria de Imprensa do Governo Atual',titulo:'Governo decreta estado de emergência',texto:'A emergência foi declarada por um motivo que o governo não soube explicar. Pediu-se calma. Em seguida, pediu-se silêncio.'},
 {data:'0997-12-10',fonte:'Assessoria de Imprensa do Governo Atual',titulo:'Rebelião começa; governo pede que ninguém fale em rebelião',texto:'Cidadãos ocuparam as dependências do Grupo. O governo afirma que a ocupação não está acontecendo e pede que ela seja encerrada.'},
 {data:'0997-12-11',fonte:'Assembleia Permanente',titulo:'Assembleia Permanente assume o poder',texto:'Em decisão unânime, a Assembleia Permanente, que nunca se reuniu, reuniu-se e assumiu o poder. O governo anterior foi dispensado por falta de quórum.'},
 {data:'1000-01-01',fonte:'Assembleia Permanente',titulo:'William é proclamado Líder Supremo',texto:'Com poucas formalidades e nenhum voto, William foi proclamado Líder Supremo. Aceitou imediatamente, o que alguns consideram suspeito.'},
 {data:'1000-01-15',fonte:'Secretaria de Comunicação da República',titulo:'República é refundada e Constituição é promulgada',texto:'A Constituição entrou em vigor com efeitos imediatos, inclusive sobre quem não a leu. O Art. 3º estabeleceu o sigilo institucional. Pede-se que ninguém comente.'},
 {data:'1000-02-02',fonte:'Secretaria de Comunicação da República',titulo:'O nome “Antiga Ordem” passa a constar nos registros',texto:'A nova República passa a chamar o governo anterior de Antiga Ordem. Segundo o novo governo, ela sempre foi antiga, até quando era nova.'},
 {data:'1000-03-01',fonte:'Documento interno · Líder Supremo',titulo:'RELATÓRIO INTERNO Nº 0 · OPERAÇÃO CACHOEIRA',classificado:true,
  texto:'Autores: William e Murilo. Objetivo: derrubar a Antiga Ordem. Método: convidar todos para um passeio à cachoeira. Justificativa do plano: [[ninguém questiona um convite para a cachoeira]]. Logística: pão, suco e [[mapas desenhados em guardanapos]]. Resultado: sucesso. Observação final: tudo foi calculado, [[exceto a piscina]]. A piscina não constava no plano. A piscina nunca consta.'}
];

// Pedidos de informação: o número do protocolo é automático.
var PEDIDOS=[
 {cid:'564.57.99',data:'0998-03-02',assunto:'Qual é a localização da piscina?',motivo:'A informação encontra-se em outro prédio.'},
 {cid:'112.08.43',data:'0998-03-09',assunto:'Por que a piscina está fechada?',motivo:'Pergunta formulada em horário comercial.'},
 {cid:'564.57.99',reinc:true,data:'0998-03-16',assunto:'Quantas almas a República possui?',motivo:'O número foi esquecido, e informação esquecida é protegida pelo sigilo.'},
 {cid:'207.31.60',data:'0998-04-01',assunto:'Quem aprovou a Constituição?',motivo:'Ela foi aprovada por quem a leu. Ninguém a leu.'},
 {cid:'088.14.72',data:'0998-04-12',assunto:'Quando sai a resposta deste pedido?',motivo:'A resposta já foi dada, e foi não.'},
 {cid:'331.90.05',data:'0998-05-05',assunto:'Solicito cópia de todos os pedidos negados.',motivo:'Negado por antecipação.'},
 {cid:'475.62.18',data:'0998-05-20',assunto:'Qual é o horário de atendimento?',motivo:'Falta de quórum: o quórum é uma pessoa e ela está almoçando.'},
 {cid:'000.00.00',data:'0998-06-03',assunto:'Fui cadastrado?',motivo:'Não consta nos registros, mas consta que pergunta.'},
 {cid:'190.44.27',data:'0998-06-18',assunto:'Existe uma Antiga Ordem?',motivo:'Não existe nenhuma Antiga Ordem. E, se existisse, seria nova.'},
 {cid:'564.57.99',reinc:true,data:'0998-07-07',assunto:'Solicito segunda via do comprovante da venda da minha alma.',motivo:'A primeira via foi guardada em local fresco e arejado. A segunda também.'},
 {cid:'622.05.81',data:'0998-07-25',assunto:'A piscina tem água?',motivo:'Pergunta sobre a piscina. Pergunta sobre a água é pergunta sobre a piscina com mais detalhes.'},
 {cid:'143.77.36',data:'0998-08-10',assunto:'Peço acesso ao inventário de almas.',motivo:'O inventário está emprestado. Para quem? Negado.'},
 {cid:'299.18.50',data:'0998-08-29',assunto:'Posso recorrer desta decisão?',motivo:'O recurso foi indeferido antes de ser enviado.',recurso:'Recurso do recurso (também indeferido).'},
 {cid:'056.23.94',data:'0998-09-14',assunto:'Qual é a cor da bandeira da República?',motivo:'A cor é verde, exceto quando observada.'},
 {cid:'711.30.62',data:'0998-10-02',assunto:'Qual é o fundamento legal desta negativa?',motivo:'O fundamento é legal por ser fundamento.'},
 {cid:'564.57.99',reinc:true,data:'0998-10-21',assunto:'Isto é uma pergunta sobre a piscina?',motivo:'Não respondemos perguntas sobre perguntas sobre a piscina.'}
];

var ALMAS=[
 ['ALM-001','Alma de usuário comum, uso leve','Boa','Local fresco e arejado'],
 ['ALM-002','Alma de usuário que leu os termos','Rara (inexistente)','Não encontrada'],
 ['ALM-003','Alma de usuário que não leu os termos','Excelente','Prateleira 3'],
 ['ALM-004','Alma de usuário curioso','Com defeito','Aguardando troca (não há trocas)'],
 ['ALM-005','Alma de investigador da piscina','Em outro lugar','Ver Caso nº 000/GEMCP'],
 ['ALM-006','Alma emprestada (pedido de informação nº 12)','Emprestada','Não informado'],
 ['ALM-007','Alma de cidadão reincidente 564.57.99','Reincidente','Fila de espera'],
 ['ALM-008','Almas sem identificação (14)','Misturadas','Caixa de papelão']
];

var PROCURADOS=[
 {nome:'O Ladrão do Último Pedaço de Torta',crime:'Comer o último pedaço sem avisar.',status:'ENCONTRADO',nota:'Negou tudo, com migalhas na boca.'},
 {nome:'Os Que Perguntaram Sobre a Piscina',crime:'Perguntar sobre a piscina (várias pessoas).',status:'ENCONTRADO',nota:'Estão bem. Pararam de perguntar.'},
 {nome:'O Autor do Cheiro na Assembleia',crime:'Perturbação do ambiente em caráter permanente.',status:'PROCURADO',nota:'Não identificado. Possivelmente permanente.'},
 {nome:'A Piscina',crime:'Estar fechada desde antes de ser aberta.',status:'PROCURADA',nota:'Foto indisponível. Paradeiro: fechada. Ver Caso nº 000/GEMCP.'},
 {nome:'Cidadão 564.57.99 (reincidente)',crime:'Excesso de perguntas.',status:'PROCURADO',nota:'Se avistado, não responder.'}
];

/* ============================ GUARDA ============================ */
function getC(k){var p=document.cookie.split('; ');for(var i=0;i<p.length;i++){var x=p[i].indexOf('=');if(p[i].slice(0,x)===k)return decodeURIComponent(p[i].slice(x+1))}return null}
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function sair(){document.cookie='acesso_portaria=;path=/;max-age=0';try{localStorage.removeItem('acesso_portaria')}catch(e){}}
var t=getC('tema')||lsGet('tema')||((window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');
document.documentElement.setAttribute('data-theme',t);
if((getC('acesso_portaria')||lsGet('acesso_portaria'))!=='ok'){
 document.body.style.cssText='margin:0;font:16px/1.6 Arial,sans-serif;background:#161616;color:#eee;display:grid;place-items:center;min-height:100vh;text-align:center';
 document.body.innerHTML='<div style="padding:24px"><div style="font-size:42px">🔒</div><h1 style="font-size:22px;margin:8px 0">Acesso negado</h1><p>Você não é um Administrador Supremo. Esta tentativa foi registrada em local fresco e arejado.</p><p><a style="color:#e6c274" href="index.html">Voltar ao portal</a></p></div>';
 setTimeout(function(){location.replace('index.html')},5000);
 return;
}

/* ============================ ESTILO ============================ */
var CSS=[
':root{--azul:#162e51;--azul2:#1f4272;--ouro:#c6a15b;--tx:#1b1b1b;--mut:#565c65;--bg:#fff;--bg2:#f0f0f0;--linha:#dfe1e2;--verm:#b50909;--card:#fff;--link:#1a4480}',
'html[data-theme=dark]{--azul:#0f1d33;--azul2:#1b2f4d;--tx:#e8e8e8;--mut:#a9aeb1;--bg:#121212;--bg2:#1b1b1b;--linha:#323232;--verm:#ff6b6b;--card:#1a1a1a;--link:#8fb8ef;color-scheme:dark}',
'*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--tx);font:16px/1.6 "Source Sans Pro",Arial,Helvetica,sans-serif}a{color:var(--link)}',
'.wrap{width:min(1140px,calc(100% - 32px));margin:auto}',
'.gov{background:var(--bg2);border-bottom:1px solid var(--linha);font-size:12px}.gov .wrap{padding:5px 0}.gov details{display:inline}.gov summary{display:inline;cursor:pointer;color:var(--link);margin-left:8px}.gov details p{margin:6px 0 2px;color:var(--mut)}',
'.topo{background:var(--azul);color:#fff;border-bottom:4px solid var(--ouro)}.topo .wrap{display:flex;align-items:center;gap:16px;padding:16px 0;flex-wrap:wrap}',
'.crest{width:58px;height:58px;border:2px solid var(--ouro);border-radius:50%;display:grid;place-items:center;font-size:28px;color:var(--ouro);flex:none}',
'.nome{flex:1 1 300px}.nome b{display:block;font:bold clamp(17px,2.6vw,24px)/1.2 Georgia,"Times New Roman",serif;letter-spacing:.3px}.nome span{font-size:12px;opacity:.85;letter-spacing:.6px;text-transform:uppercase}',
'.busca{display:flex}.busca input{padding:9px 12px;border:0;font:inherit;font-size:14px;min-width:220px;border-radius:3px 0 0 3px;background:#fff;color:#111}.busca span{background:var(--ouro);color:#182b40;padding:9px 12px;font-weight:bold;font-size:13px;border-radius:0 3px 3px 0}',
'.menu{background:var(--azul2)}.menu .wrap{display:flex;flex-wrap:wrap}.menu a{color:#fff;text-decoration:none;padding:12px 16px;font-size:14px;font-weight:bold;border-right:1px solid #ffffff22}.menu a:hover,.menu a.on{background:rgba(255,255,255,.16)}.menu a.sair{margin-left:auto;border-right:0;border-left:1px solid #ffffff22}',
'main{padding:26px 0 50px;min-height:60vh}.sec{display:none}.sec.ativa{display:block}.buscando .sec{display:block}.buscando #s-inicio{display:none}',
'h1.t,h2.t{font:bold clamp(24px,3.6vw,34px)/1.2 Georgia,"Times New Roman",serif;color:var(--azul);margin:0 0 6px}html[data-theme=dark] h1.t,html[data-theme=dark] h2.t{color:#e9e2cf}',
'.sub{color:var(--mut);margin:0 0 18px;border-bottom:3px solid var(--ouro);padding-bottom:12px}',
'.alerta{border-left:6px solid var(--verm);background:var(--bg2);padding:12px 16px;margin:0 0 20px;font-size:15px}.alerta b{color:var(--verm)}',
'.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:0 0 24px}.stat{background:var(--azul);color:#fff;padding:14px;text-align:center;border-bottom:4px solid var(--ouro)}.stat b{display:block;font:bold 30px/1.1 Georgia,serif}.stat span{font-size:12px;opacity:.85}',
'.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.cartao{background:var(--card);border:1px solid var(--linha);padding:16px;border-top:4px solid var(--ouro);text-decoration:none;color:inherit;display:block}.cartao:hover{box-shadow:0 3px 12px #0003}.cartao h3{margin:0 0 6px;font:bold 18px Georgia,serif;color:var(--azul)}html[data-theme=dark] .cartao h3{color:#e9e2cf}.cartao p{margin:0;font-size:14px;color:var(--mut)}',
'.item{background:var(--card);border:1px solid var(--linha);border-left:5px solid var(--azul2);padding:16px 18px;margin:0 0 14px}.item.class{border-left-color:var(--verm)}',
'.meta{font-size:12px;font-weight:bold;letter-spacing:.6px;text-transform:uppercase;color:var(--mut)}.item h3{margin:4px 0 6px;font:bold 20px/1.3 Georgia,serif}.item p{margin:6px 0}.fonte{font-size:12px;color:var(--mut)}',
'.sel{display:inline-block;border:2px solid var(--verm);color:var(--verm);font-weight:bold;padding:1px 10px;letter-spacing:2px;transform:rotate(-3deg);font-size:14px}',
'.fund{border-top:1px dashed var(--linha);margin-top:8px;padding-top:8px;font-size:15px}.fund b{color:var(--azul)}html[data-theme=dark] .fund b{color:#e9e2cf}',
'table{border-collapse:collapse;width:100%;font-size:14px}th,td{border:1px solid var(--linha);padding:8px 10px;text-align:left;vertical-align:top}th{background:var(--azul);color:#fff}',
'.rolar{overflow-x:auto;margin:0 0 14px}.tbmeta th{width:210px;background:var(--bg2);color:var(--tx)}',
'.bloco{background:var(--card);border:1px solid var(--linha);padding:16px 18px;margin:0 0 16px}.bloco h3{margin:0 0 8px;font:bold 20px Georgia,serif;color:var(--azul)}html[data-theme=dark] .bloco h3{color:#e9e2cf}',
'.exp{border-top:1px solid var(--linha);padding:10px 0}.exp:first-of-type{border-top:0}.exp .meta{color:var(--azul2)}html[data-theme=dark] .exp .meta{color:#8fb8ef}',
'.pc{background:var(--card);border:1px solid var(--linha);text-align:center;padding:14px}.pc .sil{height:120px;background:var(--bg2);display:grid;place-items:center;font-size:54px;color:var(--mut);margin-bottom:10px;border:1px solid var(--linha)}.pc h3{margin:0;font:bold 17px Georgia,serif}.pc .faixa{margin:8px -14px;background:var(--verm);color:#fff;font-weight:bold;letter-spacing:2px;font-size:13px;padding:3px}.pc .faixa.ok{background:#2e6b3d}.pc p{margin:4px 0;font-size:13px;color:var(--mut)}',
'.ordem{background:var(--azul2);color:#fff;border:0;padding:8px 14px;font:inherit;font-size:13px;font-weight:bold;cursor:pointer;margin:0 0 14px}',
'.red{background:#000;color:#000;box-shadow:0 0 0 1px #777;border-radius:2px;padding:0 .3em;cursor:pointer;user-select:none;transition:all .15s}.red.on{background:#f3e3b0;color:#111;box-shadow:none;user-select:text}',
'footer{background:var(--azul);color:#dbe3ee;font-size:13px;padding:22px 0;border-top:4px solid var(--ouro)}footer a{color:#e6c274}footer p{margin:4px 0}',
'#nenhum{display:none;text-align:center;color:var(--mut);padding:30px}.buscando.vazio #nenhum{display:block}',
'@media(max-width:760px){.stats{grid-template-columns:1fr 1fr}.cards{grid-template-columns:1fr 1fr}.tbmeta th{width:120px}}@media(max-width:480px){.cards{grid-template-columns:1fr}.busca input{min-width:0;width:100%}.busca{width:100%}}'
].join('\n');

/* ============================ RENDER ============================ */
function T(s){return String(s).replace(/\[\[(.+?)\]\]/g,'<span class="red" title="Clique para revelar">$1</span>')}
function dataBR(iso){var p=iso.split('-');return p[2]+'/'+p[1]+'/'+p[0]}
function pad(n,l){n=String(n);while(n.length<l)n='0'+n;return n}
function ord(){return COMUNICADOS.slice().sort(function(a,b){return a.data<b.data?-1:a.data>b.data?1:0})}

function secInicio(){
 return '<section class="sec" id="s-inicio"><h1 class="t">Portaria de Acesso aos Documentos Reservados</h1>'+
 '<p class="sub">Bem-vindo, Administrador. O que você vai ler a seguir já foi lido por alguém, que pediu para não ser lembrado.</p>'+
 '<div class="alerta"><b>ACESSO RESTRITO.</b> O simples fato de você estar aqui já foi registrado em local fresco e arejado.</div>'+
 '<div class="stats"><div class="stat"><b>1</b><span>caso em andamento (e encerrado)</span></div><div class="stat"><b>'+COMUNICADOS.length+'</b><span>comunicados de imprensa</span></div><div class="stat"><b>0 de '+PEDIDOS.length+'</b><span>pedidos de informação atendidos</span></div><div class="stat"><b>0</b><span>piscinas abertas</span></div></div>'+
 '<div class="cards">'+
 '<a class="cartao" href="#casos"><h3>Casos</h3><p>Caso nº '+CASO.numero+': '+CASO.titulo+'.</p></a>'+
 '<a class="cartao" href="#comunicados"><h3>Comunicados de imprensa</h3><p>A história oficial, em ordem cronológica. As datas são sigilosas.</p></a>'+
 '<a class="cartao" href="#informacao"><h3>Acesso à Informação</h3><p>Pedidos de cidadãos e as respostas da Administração.</p></a>'+
 '<a class="cartao" href="#almas"><h3>Inventário de almas</h3><p>Controle de estoque, condição e local de guarda.</p></a>'+
 '<a class="cartao" href="#procurados"><h3>Procurados</h3><p>Lista de foragidos, encontrados e não identificados.</p></a>'+
 '</div></section>';
}
function secCasos(){
 var meta=CASO.meta.map(function(m){return '<tr><th>'+m[0]+'</th><td>'+T(m[1])+'</td></tr>'}).join('');
 var tent=CASO.tentativas.map(function(x,i){return '<li><b>Tentativa '+(i+1)+':</b> '+T(x)+'</li>'}).join('');
 var exp=CASO.expedicoes.map(function(e,i){return '<div class="exp item" style="border-left-color:var(--verm)"><div class="meta">Expedição '+(i+1)+' · Efetivo: '+T(e.efetivo)+'</div><p><b>Relatório:</b> '+T(e.relato)+'</p><p class="fonte"><b>Estado dos envolvidos:</b> '+T(e.estado)+'</p></div>'}).join('');
 var dout=CASO.doutrina.map(function(l){return '<p>'+T(l)+'</p>'}).join('');
 return '<section class="sec" id="s-casos"><h2 class="t">Caso nº '+CASO.numero+'</h2><p class="sub">'+CASO.titulo+'</p>'+
 '<div class="item"><div class="rolar"><table class="tbmeta">'+meta+'</table></div></div>'+
 '<div class="item"><h3>Resumo do caso</h3><p>'+T(CASO.resumo)+'</p></div>'+
 '<div class="item"><h3>Histórico de tentativas de reabertura</h3><ol>'+tent+'</ol><p class="fonte">'+CASO.notaTentativas+'</p></div>'+
 '<h3 style="font:bold 20px Georgia,serif;margin:22px 0 10px">Expedições de busca</h3>'+exp+
 '<div class="bloco item"><h3>Doutrina do Bem Maior</h3>'+dout+'</div>'+
 '<div class="item class"><div class="meta">Anexo final · Termo de ciência · <span class="sel">SIGILOSO</span></div><p style="margin-top:10px">'+T(CASO.final)+'</p></div></section>';
}
function listaComunicados(desc){
 var l=ord();var n={};l.forEach(function(c,i){n[c.data+c.titulo]=i+1});
 if(desc)l.reverse();
 return l.map(function(c){return '<article class="item'+(c.classificado?' class':'')+'"><div class="meta">'+(c.classificado?'DOCUMENTO CLASSIFICADO':'Comunicado de imprensa')+' · Nº '+pad(n[c.data+c.titulo],3)+'/GEMCP · <span class="red" title="Clique para revelar">'+dataBR(c.data)+'</span></div><h3>'+c.titulo+'</h3><p>'+T(c.texto)+'</p><p class="fonte">Fonte: '+c.fonte+'</p></article>'}).join('');
}
function secComunicados(){
 return '<section class="sec" id="s-comunicados"><h2 class="t">Comunicados de imprensa</h2><p class="sub">Arquivo oficial. As datas foram tarjadas por determinação da Assembleia, mas a ordem foi mantida.</p>'+
 '<button class="ordem" id="ordem" type="button">Ordem: mais antigos primeiro</button><div id="listacom">'+listaComunicados(false)+'</div></section>';
}
function secInformacao(){
 var l=PEDIDOS.map(function(p,i){return '<article class="item"><div class="meta">Protocolo nº '+pad(i+1,4)+'/GEMCP · Cidadão '+p.cid+(p.reinc?' (reincidente)':'')+' · <span class="red" title="Clique para revelar">'+dataBR(p.data)+'</span></div><h3>“'+p.assunto+'”</h3><p><span class="sel">NEGADO</span></p><div class="fund"><b>Fundamento:</b> '+p.motivo+(p.recurso?'<br><b>Recurso cabível:</b> '+p.recurso:'')+'<br><span class="fonte">Despachante de Plantão · em caráter arbitrário</span></div></article>'}).join('');
 return '<section class="sec" id="s-informacao"><h2 class="t">Acesso à Informação</h2><p class="sub">Pedidos recebidos: '+PEDIDOS.length+' · Atendidos: 0 · Taxa de resposta satisfatória: 0%</p>'+l+'</section>';
}
function secAlmas(){
 var l=ALMAS.map(function(a){return '<tr><td>'+a[0]+'</td><td>'+a[1]+'</td><td>'+a[2]+'</td><td>'+a[3]+'</td></tr>'}).join('');
 return '<section class="sec" id="s-almas"><h2 class="t">Inventário de almas</h2><p class="sub">Controle de estoque conforme a Cláusula 5ª dos Termos de Uso.</p>'+
 '<div class="item"><div class="rolar"><table><tr><th>Código</th><th>Descrição</th><th>Condição</th><th>Local de guarda</th></tr>'+l+'</table></div>'+
 '<p>'+T('Total em estoque: [[o suficiente]] · Com defeito: 0 (ou 1) · Trocas realizadas: 0')+'</p><p class="fonte">Almas com defeito não serão trocadas (Cláusula 5ª, § 2º).</p></div></section>';
}
function secProcurados(){
 var l=PROCURADOS.map(function(p){var ok=p.status==='ENCONTRADO';return '<div class="pc item" style="border-left-width:1px;margin:0"><div class="sil">♙</div><h3>'+p.nome+'</h3><div class="faixa'+(ok?' ok':'')+'">'+p.status+'</div><p><b>Motivo:</b> '+p.crime+'</p><p>'+p.nota+'</p></div>'}).join('');
 return '<section class="sec" id="s-procurados"><h2 class="t">Procurados</h2><p class="sub">Se você tiver informações, não nos diga.</p><div class="cards">'+l+'</div></section>';
}

function montar(){
 var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
 document.title=ORGAO+' | República Federativa do Grupo';
 var itens=[['inicio','Início'],['casos','Casos'],['comunicados','Comunicados de imprensa'],['informacao','Acesso à Informação'],['almas','Inventário de almas'],['procurados','Procurados']];
 document.getElementById('app').innerHTML=
 '<div class="gov"><div class="wrap">✦ Um site oficial da República Federativa do Grupo <details><summary>Veja como saber</summary><p>Sites oficiais da República usam o endereço “github.io”. Se o endereço for outro, desconfie. Se for esse, desconfie também.</p></details></div></div>'+
 '<header class="topo"><div class="wrap"><div class="crest" aria-hidden="true">✦</div><div class="nome"><b>'+ORGAO+'</b><span>República Federativa do Grupo · Portaria de acesso restrito</span></div><div class="busca"><input id="q" type="search" placeholder="Buscar nos arquivos" aria-label="Buscar nos arquivos"><span>Buscar</span></div></div></header>'+
 '<nav class="menu"><div class="wrap">'+itens.map(function(i){return '<a href="#'+i[0]+'" data-s="'+i[0]+'">'+i[1]+'</a>'}).join('')+'<a class="sair" href="index.html" id="sair">Sair</a></div></nav>'+
 '<main class="wrap">'+secInicio()+secCasos()+secComunicados()+secInformacao()+secAlmas()+secProcurados()+'<p id="nenhum">Nenhum resultado. A Administração também não encontrou.</p></main>'+
 '<footer><div class="wrap"><p><b>'+ORGAO+'</b> · República Federativa do Grupo</p><p>Brasília Digital · Data indefinida · <a href="index.html">Voltar ao portal</a></p><p style="margin-top:12px;font-size:11px;opacity:.85">Projeto humorístico e fictício, sem vínculo com o Governo Federal, com o governo de qualquer país ou com qualquer órgão público. Layout inspirado em portais de governo; nenhum símbolo, nome ou logotipo oficial real foi usado. Nomes, cargos e instituições são elementos de sátira.</p></div></footer>';

 function ir(){
  var h=(location.hash||'#inicio').slice(1);if(!document.getElementById('s-'+h))h='inicio';
  document.querySelectorAll('.sec').forEach(function(s){s.classList.toggle('ativa',s.id==='s-'+h)});
  document.querySelectorAll('.menu a[data-s]').forEach(function(a){a.classList.toggle('on',a.getAttribute('data-s')===h)});
  window.scrollTo(0,0);
 }
 window.addEventListener('hashchange',ir);ir();

 document.addEventListener('click',function(e){var r=e.target.closest&&e.target.closest('.red');if(r)r.classList.toggle('on')});
 document.getElementById('sair').addEventListener('click',sair);
 var desc=false,b=document.getElementById('ordem');
 b.addEventListener('click',function(){desc=!desc;document.getElementById('listacom').innerHTML=listaComunicados(desc);b.textContent='Ordem: '+(desc?'mais recentes primeiro':'mais antigos primeiro')});
 document.getElementById('q').addEventListener('input',function(){
  var q=this.value.trim().toLowerCase(),n=0;
  document.body.classList.toggle('buscando',!!q);
  document.querySelectorAll('.item,.cartao').forEach(function(el){var ok=!q||el.textContent.toLowerCase().indexOf(q)>-1;el.hidden=!ok;if(ok&&q)n++});
  document.body.classList.toggle('vazio',!!q&&n===0);
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',montar);else montar();
})();
