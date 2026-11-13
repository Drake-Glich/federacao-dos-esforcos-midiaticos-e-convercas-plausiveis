// =====================================================================
//  site.js — República Federativa do Grupo
//  1) cookies de verdade (com plano B)  2) modo escuro  3) menu e pesquisa
//  4) cookies, termos, preferências, modo debug, login e dicas
// =====================================================================

// ---------- 1) Armazenamento: cookies de verdade (com plano B) ----------
(function(){
 var ok=false;
 try{document.cookie='_t=1;path=/;SameSite=Lax';ok=document.cookie.indexOf('_t=1')>-1;document.cookie='_t=;path=/;max-age=0'}catch(e){}
 function getC(k){var p=document.cookie.split('; ');for(var i=0;i<p.length;i++){var x=p[i].indexOf('=');if(p[i].slice(0,x)===k)return decodeURIComponent(p[i].slice(x+1))}return null}
 function setC(k,v,d){document.cookie=k+'='+encodeURIComponent(v)+';path=/;max-age='+Math.round((d||365)*86400)+';SameSite=Lax'+(location.protocol==='https:'?';Secure':'')}
 var A={cookies:ok,
  get:function(k){var v=ok?getC(k):null;if(v==null){try{v=localStorage.getItem(k)}catch(e){}}return v},
  set:function(k,v,d){if(ok)setC(k,v,d);else{try{localStorage.setItem(k,v)}catch(e){}}},
  del:function(k){if(ok)document.cookie=k+'=;path=/;max-age=0';try{localStorage.removeItem(k)}catch(e){}}};
 // migra o que já estava salvo no localStorage (tema e caixas já aceitas)
 if(ok)['tema','cookies-ok-v1','termos-ok-v1'].forEach(function(k){try{var v=localStorage.getItem(k);if(v!=null&&getC(k)==null)setC(k,v)}catch(e){}});
 window.__arm=A;
})();

// ---------- 2) Modo escuro: aplica o tema salvo (ou o do sistema) ----------
(function(){
 var root=document.documentElement,A=window.__arm;
 var t=A.get('tema')||((window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');
 root.setAttribute('data-theme',t);
 window.__tema={get:function(){return root.getAttribute('data-theme')},set:function(v){root.setAttribute('data-theme',v);A.set('tema',v)}};
 if(A.get('dicas_liberadas'))root.classList.add('dicas-on');
})();

// ---------- 3) Menu, botão de tema e pesquisa ----------
document.addEventListener('DOMContentLoaded',()=>{
 const wrap=document.querySelector('nav .wrap');
 if(wrap&&!wrap.querySelector('a[href="atualizacoes.html"]')){
  const l=document.createElement('a');l.href='atualizacoes.html';l.textContent='Atualizações';wrap.appendChild(l);
 }
 if(wrap&&window.__tema){
  const b=document.createElement('button');b.type='button';b.className='theme-toggle';
  const rot=()=>{b.textContent=window.__tema.get()==='dark'?'☀ Modo claro':'☾ Modo escuro'};
  b.addEventListener('click',()=>{window.__tema.set(window.__tema.get()==='dark'?'light':'dark');rot()});
  rot();wrap.appendChild(b);
 }
 const current=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
 const form=document.querySelector('[data-search]');
 if(form)form.addEventListener('submit',e=>{e.preventDefault();const q=form.querySelector('input').value.trim().toLowerCase();document.querySelectorAll('[data-searchable]').forEach(el=>{el.hidden=!!q&&!el.innerText.toLowerCase().includes(q)})});
});

// =====================================================================
//  4) COOKIES, TERMOS, PREFERÊNCIAS, MODO DEBUG, LOGIN E DICAS
//  Para editar os termos, mexa só na lista TERMOS logo abaixo.
//  Para as caixas aparecerem de novo para todo mundo, mude VERSAO.
// =====================================================================
(function(){
 const A=window.__arm;
 const VERSAO='1';
 const K_COOKIES='cookies-ok-v'+VERSAO, K_TERMOS='termos-ok-v'+VERSAO;
 const ler=k=>A.get(k);
 const gravar=k=>A.set(k,'sim');
 const num=k=>parseInt(A.get(k)||'0',10)||0;
 const soma=k=>{const n=num(k)+1;A.set(k,String(n));return n};
 const SENHA='PORTARIAGEMCP'; // PortariaGemcp (o campo ignora maiúsculas, acentos e espaços)
 const SVG_BUG='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 9a4 4 0 0 1 8 0v6a4 4 0 0 1-8 0z"/><path d="M12 9v11M4 13h4M16 13h4M5 7l3 2M19 7l-3 2M5 20l3-2M19 20l-3-2"/></svg>';

 const TERMOS=[
  ['1ª — Das Definições','Para os fins deste instrumento, entende-se por REPÚBLICA o Grupo de Esforços Midiáticos e Conversas Plausíveis; por ADMINISTRADORES os Administradores Supremos, cujos nomes, cargos e demais atributos são determinados pela própria Assembleia Permanente; por USUÁRIO toda pessoa, física, jurídica ou espiritual, que acesse este portal por qualquer meio, inclusive por engano; por GRUPO aquilo de que não se fala; e por PISCINA aquilo a que se refere a Cláusula 9ª, igualmente inominável.'],
  ['2ª — Do Objeto','O presente instrumento regula o acesso e a utilização do portal institucional, bem como a vida pregressa, presente e futura do USUÁRIO, naquilo em que for conveniente à REPÚBLICA.'],
  ['3ª — Da Aceitação','O simples acesso ao portal, a leitura parcial deste documento, a permanência na página por mais de três segundos ou o ato de pensar em recusar equivalem à aceitação integral e irrevogável destes termos. A rolagem até o final deste texto é exigida apenas para fins de aparência de seriedade.'],
  ['4ª — Da Capacidade','O USUÁRIO declara ter plena capacidade civil ou, na falta desta, autorização de pessoa que a tenha ou, na falta desta, autorização da Assembleia Permanente, que a concede de ofício e sem consulta.'],
  ['5ª — Da Cessão da Alma','O USUÁRIO cede e transfere à REPÚBLICA, em caráter exclusivo, gratuito, irretratável e irrevogável, a titularidade integral de sua alma, abrangendo suas eventuais reencarnações, versões paralelas e cópias de segurança.<br>§ 1º A REPÚBLICA poderá utilizar, negociar ou simplesmente guardar a alma em local fresco e arejado, a seu exclusivo critério.<br>§ 2º Não haverá indenização, troco ou direito de arrependimento. Almas com defeito não serão trocadas.'],
  ['6ª — Do Controle pelos Administradores','O USUÁRIO reconhece que, a partir da aceitação, sua vontade, suas opiniões, seus horários e suas decisões, de menor e de maior importância, poderão ser dirigidos pelos ADMINISTRADORES, independentemente de aviso prévio.<br>§ 1º A escolha do que jantar poderá ser avocada pela Assembleia a qualquer momento.<br>§ 2º Os ADMINISTRADORES exercem o controle de forma independente e harmônica entre si, exceto quando discordam, o que será tratado como harmonia.'],
  ['7ª — Do Sigilo sobre o Grupo','É terminantemente proibido ao USUÁRIO falar sobre o GRUPO, em qualquer idioma, meio, tom de voz ou estado de consciência. Entende-se por falar: dizer, escrever, sussurrar, sinalizar, desenhar, cantarolar ou comentar em sonho.<br>§ 1º NÃO FALAR SOBRE O GRUPO.<br>§ 2º Repetimos: NÃO FALAR SOBRE O GRUPO.<br>§ 3º A própria existência deste portal é assunto proibido, e por isso este portal não existe.'],
  ['8ª — Das Exceções ao Sigilo','É permitido falar sobre o GRUPO exclusivamente: (i) com os próprios ADMINISTRADORES; (ii) com pessoas que já saibam; e (iii) nunca. Em caso de dúvida, aplica-se o item (iii).'],
  ['9ª — Da Piscina','É vedado ao USUÁRIO entrar na piscina, tocar na piscina, aproximar-se da piscina a menos de 3 (três) metros ou olhar fixamente para ela. A piscina permanece fechada por tempo indeterminado, conforme comunicado institucional, e a ausência de previsão de reabertura é definitiva.<br>§ 1º Estar proibido de entrar não significa que a piscina exista.'],
  ['10ª — Das Perguntas sobre a Piscina','É proibido perguntar sobre a piscina, inclusive por que está fechada, quando reabrirá, quem a fechou, de quem era, se tem água ou se alguma vez teve.<br>§ 1º Perguntas retóricas sobre a piscina também são perguntas.<br>§ 2º Respostas sobre a piscina, ainda que corretas, constituem infração por parte de quem responder.'],
  ['11ª — Dos Cookies','O portal utiliza cookies de rastreamento, de preferência, de desempenho, de aveia com passas e de chocolate. O USUÁRIO autoriza a coleta de seu histórico de navegação, de seus passos, de seus pensamentos recentes e do nome do seu primeiro bichinho de estimação, este último utilizado exclusivamente para fins de segurança.'],
  ['12ª — Da Privacidade','Os dados do USUÁRIO serão tratados com o máximo sigilo, exceto os que a REPÚBLICA quiser divulgar. A REPÚBLICA compromete-se a nunca vender os dados do USUÁRIO, por já ter adquirido o USUÁRIO inteiro nos termos da Cláusula 5ª.'],
  ['13ª — Da Conduta','O USUÁRIO obriga-se a: a) concordar com os ADMINISTRADORES; b) concordar de novo; c) sorrir quando solicitado, mesmo sem ser solicitado; d) não ter opinião sobre o clima antes da divulgação do boletim oficial; e e) cumprimentar a bandeira, caso identifique alguma.'],
  ['14ª — Da Despedida','Não é permitido sair do portal sem despedir-se formalmente dos ADMINISTRADORES. A despedida deve ser feita mentalmente, em voz baixa, acompanhada de uma breve reverência.'],
  ['15ª — Das Contribuições Voluntárias','O USUÁRIO poderá ser convidado a realizar contribuições voluntárias de caráter compulsório, em moeda corrente, em espécie, em favores ou em lanches.'],
  ['16ª — Da Propriedade Intelectual','Todo o conteúdo do portal pertence à REPÚBLICA. Todo o conteúdo que o USUÁRIO venha a criar, pensar ou lembrar também passa a pertencer à REPÚBLICA, inclusive piadas, ideias e o final das séries.'],
  ['17ª — Das Piadas Internas','As piadas internas do GRUPO são patrimônio da REPÚBLICA. O USUÁRIO não poderá rir de piada alheia sem autorização, nem deixar de rir de piada oficial.'],
  ['18ª — Da Responsabilidade','A REPÚBLICA não se responsabiliza por danos diretos, indiretos, emocionais, espirituais, climáticos ou por qualquer ocorrência que tenha havido, haja ou venha a haver. O USUÁRIO responde por tudo.'],
  ['19ª — Da Garantia','O portal é fornecido no estado em que se encontra, com defeitos, charme e mudanças de humor. Não há garantia de funcionamento, de verdade ou de sentido.'],
  ['20ª — Das Alterações','Estes termos podem ser alterados a qualquer momento, retroativamente, sem aviso e sem que o USUÁRIO saiba. Valerá sempre a versão mais desfavorável ao USUÁRIO.'],
  ['21ª — Da Rescisão','O USUÁRIO pode rescindir este contrato a qualquer momento mediante pedido formal, por escrito, em três vias, assinado em cartório inexistente. O pedido será analisado pela Assembleia Permanente, que o indeferirá.'],
  ['22ª — Das Penalidades','O descumprimento de qualquer cláusula sujeitará o USUÁRIO a: a) advertência verbal; b) advertência verbal em tom mais sério; c) obrigação de pedir desculpas a um objeto inanimado indicado pela REPÚBLICA; d) perda do direito de escolher o sabor da sobremesa; e e) outras sanções a critério da Assembleia, por prazo indeterminado, como tudo aqui.'],
  ['23ª — Da Vigência','Este contrato vigora desde a data indefinida da assinatura até o fim dos tempos, prorrogando-se automaticamente por igual período.'],
  ['24ª — Das Disposições Gerais','Se alguma cláusula for considerada inválida, as demais permanecem válidas e a inválida passa a valer em dobro. Este documento prevalece sobre qualquer outro, inclusive sobre o bom senso.'],
  ['25ª — Do Foro','Fica eleito o foro da comarca de Brasília Digital, de data indefinida, para dirimir quaisquer questões decorrentes deste instrumento, com renúncia expressa a qualquer outro, por mais privilegiado que seja.'],
  ['26ª — Do Aceite Final','Ao clicar em ACEITO, o USUÁRIO declara que leu todos os termos, entendeu todos os termos e confia que ninguém leu todos os termos. Declara, ainda, que NÃO FALARÁ SOBRE O GRUPO e que NÃO PERGUNTARÁ SOBRE A PISCINA.<span class="dica"><br><br>Anexo confidencial (dica nº 1): <span class="tarja" title="Clique para revelar">PARTE 1: Portaria</span></span>']
 ];

 const CSS_LEI=`#lei-overlay{position:fixed;inset:0;background:rgba(0,0,0,.72);display:flex;align-items:center;justify-content:center;padding:14px;z-index:99999;overflow:hidden}
#lei-overlay .lei-caixa{background:var(--white,#fff);color:var(--ink,#202833);border:1px solid var(--line,#d9dee5);border-top:4px solid var(--gold,#c6a15b);width:100%;max-width:420px;max-height:92vh;display:flex;flex-direction:column;padding:22px 22px 18px;box-shadow:0 12px 44px #000a;box-sizing:border-box;font:14px/1.5 Arial,Helvetica,sans-serif;text-align:left}
#lei-overlay .lei-caixa.lei-alta{max-width:460px;height:min(88vh,760px)}
#lei-overlay h2{margin:0 0 8px;font-size:20px;line-height:1.25;color:var(--navy,#17365d);border:0;padding:0}
#lei-overlay p{margin:6px 0;font-size:14px}
#lei-overlay .lei-sub{color:var(--muted,#657180);font-size:12px}
#lei-overlay .lei-scroll{flex:1 1 auto;min-height:0;overflow-y:auto;border:1px solid var(--line,#d9dee5);background:var(--bg,#f3f5f7);padding:4px 14px 10px;margin:8px 0}
#lei-overlay .lei-scroll h3{font-size:12.5px;margin:14px 0 2px;color:var(--navy,#17365d);text-transform:uppercase;letter-spacing:.3px;border:0;padding:0}
#lei-overlay .lei-scroll p{font-size:13px;line-height:1.55}
#lei-overlay .lei-mini{color:var(--muted,#657180);font-size:11px;margin-top:16px;border-top:1px solid var(--line,#d9dee5);padding-top:8px}
#lei-overlay .lei-status{min-height:20px;color:var(--muted,#657180);font-size:12.5px}
#lei-overlay .lei-botoes{display:flex;flex-direction:column;gap:8px;margin-top:6px}
#lei-overlay .lei-btn{background:var(--gold,#c6a15b);color:#182b40;border:1px solid var(--gold,#c6a15b);padding:11px 14px;font:inherit;font-size:13px;font-weight:bold;border-radius:2px;cursor:pointer;width:100%}
#lei-overlay .lei-btn.sec{background:transparent;color:var(--ink,#202833);border-color:var(--line,#d9dee5)}
#lei-overlay .lei-btn:hover:not(:disabled){filter:brightness(1.08)}
#lei-overlay .lei-btn:disabled{opacity:.4;cursor:not-allowed}
#lei-progresso{position:fixed;left:0;right:0;bottom:0;z-index:99998;background:var(--white,#fff);color:var(--ink,#202833);border-top:3px solid var(--gold,#c6a15b);box-shadow:0 -6px 24px #0006;padding:12px 18px calc(12px + env(safe-area-inset-bottom,0px));font:13px/1.4 Arial,Helvetica,sans-serif;box-sizing:border-box;transition:opacity .6s,transform .6s}
#lei-progresso.some{opacity:0;transform:translateY(100%)}
#lei-progresso .lp-topo{display:flex;justify-content:space-between;gap:12px;margin-bottom:7px;font-weight:bold}
#lei-progresso .lp-pct{color:var(--muted,#657180);font-weight:normal}
#lei-progresso .lp-trilho{height:10px;background:var(--line,#d9dee5);border-radius:6px;overflow:hidden}
#lei-progresso .lp-barra{height:100%;width:0;background:var(--gold,#c6a15b);border-radius:6px}
/* preferências do sistema */
#lei-overlay .pf-scroll{flex:1 1 auto;min-height:0;overflow-y:auto;margin:6px -4px 4px;padding:0 4px}
#lei-overlay .pf-grupo{margin:12px 0 5px;font-size:11px;font-weight:bold;letter-spacing:.8px;text-transform:uppercase;color:var(--muted,#657180)}
#lei-overlay .pf-linha{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:6px 12px;padding:11px 12px;border:1px solid var(--line,#d9dee5);border-radius:6px;margin-bottom:6px;cursor:pointer;background:var(--bg,#f3f5f7)}
#lei-overlay .pf-linha:hover{border-color:var(--gold,#c6a15b)}
#lei-overlay .pf-txt{flex:1 1 0;min-width:0}
#lei-overlay .pf-txt b{display:block;font-size:14px}
#lei-overlay .pf-txt small{color:var(--muted,#657180);font-size:12px}
#lei-overlay .pf-aviso{flex:1 1 100%;font-size:12.5px;border-top:1px dashed var(--line,#d9dee5);padding-top:7px;margin-top:2px}
#lei-overlay .pf-sw{width:40px;height:22px;border-radius:11px;background:#9aa4b0;border:0;position:relative;flex:none;padding:0;transition:background .2s;pointer-events:none}
#lei-overlay .pf-sw i{position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#fff;transition:left .2s}
#lei-overlay .pf-sw.on{background:var(--gold,#c6a15b)}
#lei-overlay .pf-sw.on i{left:20px}
#lei-overlay .pf-pill{font-size:12px;font-weight:bold;border:1px solid var(--line,#d9dee5);border-radius:12px;padding:3px 10px;white-space:nowrap}
@keyframes pf-treme{0%,100%{transform:translateX(0)}20%{transform:translateX(-5px)}40%{transform:translateX(5px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}
#lei-overlay .pf-treme{animation:pf-treme .35s}
/* login */
#lei-overlay .lg-label{font-size:12px;font-weight:bold;margin-top:8px}
#lei-overlay .lg-input{width:100%;padding:11px;border:1px solid var(--line,#d9dee5);background:var(--bg,#f3f5f7);color:var(--ink,#202833);font:inherit;font-size:15px;border-radius:3px;margin:4px 0 2px;box-sizing:border-box}
#lei-overlay .lg-link{background:none;border:0;color:var(--gold,#c6a15b);text-decoration:underline;cursor:pointer;font:inherit;font-size:13px;padding:4px 0}
/* botão de debug, rodapé e tarjas de dica */
.bug-toggle{background:transparent;border:0;border-left:1px solid #ffffff20;color:#fff;cursor:pointer;padding:13px 14px;display:flex;align-items:center}
.bug-toggle:hover,.theme-toggle:hover{background:rgba(255,255,255,.14)}
.lei-rodape{display:flex;align-items:center;gap:14px;margin:0 0 10px}
.lei-rodape a.lei-termos{color:#fff}
.lei-rodape a.lei-termos.novo{color:#e6c274;font-weight:bold}
.lei-rodape small{display:block;color:#e6c274;font-size:11px;opacity:.85}
.dica{display:none}
html.dicas-on .dica{display:revert}
.tarja{background:#000;color:#000;box-shadow:0 0 0 1px #777;border-radius:2px;padding:0 .3em;cursor:pointer;user-select:none;transition:all .15s}
.tarja.aberta{background:#f3e3b0;color:#111;box-shadow:none;user-select:text}`;

 let overlay=null;
 function injetarCss(){
  if(document.getElementById('lei-css'))return;
  const s=document.createElement('style');s.id='lei-css';s.textContent=CSS_LEI;document.head.appendChild(s);
 }
 function abrir(html,extra){
  injetarCss();
  if(!overlay){overlay=document.createElement('div');overlay.id='lei-overlay';document.body.appendChild(overlay)}
  overlay.innerHTML='<div class="lei-caixa'+(extra?' '+extra:'')+'" role="dialog" aria-modal="true">'+html+'</div>';
  document.body.style.overflow='hidden';
  return overlay.firstChild;
 }
 function fechar(){if(overlay){overlay.remove();overlay=null}document.body.style.overflow=''}

 // cookies de brincadeira (valores inofensivos, só ficam no navegador de quem visita)
 function visita(){
  if(A.get('sigilo_do_grupo')==null)A.set('sigilo_do_grupo','ativo');
  if(A.get('piscina_perguntada')==null)A.set('piscina_perguntada','0');
  soma('visitas');
 }
 function liberarDicas(){
  A.set('dicas_liberadas','sim');
  document.documentElement.classList.add('dicas-on');
  document.querySelectorAll('.dica[hidden]').forEach(e=>{e.hidden=false});
  destacarTermos();
 }

 function mostrarCookies(depois){
  const c=abrir('<h2>🍪 Aviso de Cookies</h2>'+
   '<p>Este portal utiliza cookies de todos os tipos: de aveia, de chocolate e de rastreamento. Ao continuar, você aceita ser acompanhado em todas as suas atividades, inclusive nas que não envolvem este site.</p>'+
   '<p class="lei-status" aria-live="polite"></p>'+
   '<div class="lei-botoes"><button type="button" class="lei-btn" data-a="todos">Aceitar todos os cookies</button>'+
   '<button type="button" class="lei-btn sec" data-a="essenciais">Aceitar só os essenciais (que são todos)</button>'+
   '<button type="button" class="lei-btn sec" data-a="recusar">Recusar</button></div>');
  const st=c.querySelector('.lei-status');
  c.addEventListener('click',e=>{
   const a=e.target.getAttribute&&e.target.getAttribute('data-a');
   if(!a)return;
   if(a==='recusar'){const n=soma('recusas_registradas');st.textContent='Recusa registrada em um cookie (nº '+n+'). A Assembleia Permanente ainda não aprovou o botão de recusa. Estamos trabalhando nisso (desde sempre).';return}
   gravar(K_COOKIES);visita();depois();
  });
  c.querySelector('.lei-btn').focus();
 }

 function mostrarTermos(jaAceito){
  const corpo=TERMOS.map(t=>'<h3>Cláusula '+t[0]+'</h3><p>'+t[1]+'</p>').join('');
  const c=abrir('<h2>📜 Termos de Uso e Contrato de Adesão Perpétua</h2>'+
   '<p class="lei-sub">Versão 8.67.42a · Aprovada pela Assembleia Permanente em data indefinida</p>'+
   '<div class="lei-scroll" tabindex="0">'+corpo+'<p class="lei-mini">Documento de caráter humorístico e fictício, sem qualquer validade jurídica. Nenhuma alma foi realmente adquirida.</p></div>'+
   '<p class="lei-status" aria-live="polite"></p>'+
   '<div class="lei-botoes">'+(jaAceito
     ?'<button type="button" class="lei-btn" data-a="fechar">Fechar</button>'
     :'<button type="button" class="lei-btn" data-a="aceitar" disabled>Aceito (não há alternativa)</button><button type="button" class="lei-btn sec" data-a="recusar">Não aceito</button>')+'</div>','lei-alta');
  const st=c.querySelector('.lei-status'),sc=c.querySelector('.lei-scroll'),ok=c.querySelector('[data-a="aceitar"]');
  if(ok){
   st.textContent='Role até o final do texto para habilitar o botão.';
   const check=()=>{if(sc.scrollTop+sc.clientHeight>=sc.scrollHeight-8){ok.disabled=false;st.textContent='Leitura concluída. Parabéns, você leu tudo (ninguém lê).'}};
   sc.addEventListener('scroll',check);check();
  }
  c.addEventListener('click',e=>{
   const a=e.target.getAttribute&&e.target.getAttribute('data-a');
   if(a==='aceitar'){gravar(K_TERMOS);A.set('alma_vendida','sim');fechar();progresso()}
   else if(a==='fechar')fechar();
   else if(a==='recusar')st.textContent='A recusa configura aceitação tácita (Cláusula 3ª). Por favor, role até o final e clique em ACEITO.';
  });
  sc.focus();
 }

 // ---- Barra de progresso falsa (só humor: não pede nem acessa nada de verdade) ----
 // Para mudar as etapas, edite ETAPAS: ['mensagem', segundos]
 const ETAPAS=[
  ['Obtendo sua localização',5],
  ['Instalando app de vigilância',4],
  ['Obtendo acesso à câmera',4],
  ['Obtendo acesso ao microfone',5],
  ['Vendendo sua alma',6]
 ];
 function progresso(){
  injetarCss();
  const total=ETAPAS.reduce((s,e)=>s+e[1],0);
  const box=document.createElement('div');box.id='lei-progresso';box.setAttribute('role','status');
  box.innerHTML='<div class="lp-topo"><span class="lp-msg"></span><span class="lp-pct">0%</span></div><div class="lp-trilho"><div class="lp-barra"></div></div>';
  document.body.appendChild(box);
  const msg=box.querySelector('.lp-msg'),pct=box.querySelector('.lp-pct'),barra=box.querySelector('.lp-barra');
  const ini=Date.now();
  const t=setInterval(()=>{
   const dec=(Date.now()-ini)/1000;
   if(dec>=total){
    clearInterval(t);
    barra.style.width='100%';pct.textContent='100%';msg.textContent='Configuração concluída';
    setTimeout(()=>{box.classList.add('some');setTimeout(()=>box.remove(),700)},3000);
    return;
   }
   let acc=0,i=0;
   while(i<ETAPAS.length&&dec>=acc+ETAPAS[i][1]){acc+=ETAPAS[i][1];i++}
   const resta=Math.ceil(acc+ETAPAS[i][1]-dec);
   msg.textContent=ETAPAS[i][0]+'… ('+resta+'s)';
   const p=Math.floor(dec/total*100);
   barra.style.width=(dec/total*100)+'%';pct.textContent=p+'%';
  },100);
 }

 // ---------- Preferências do Sistema (abre pelo ✦ do rodapé) ----------
 const AVISOS={
  livre:'A Administração não permite livre arbítrio. A opção foi reativada.',
  notif:'A Assembleia não aceita silêncio.',
  alma:'Transferência já efetuada, sem direito de arrependimento (Cláusula 5ª).',
  vig:'Desativação indisponível: a vigilância é essencial para a sua segurança.',
  sync:'Seus dados já foram sincronizados. Há muito tempo.'
 };
 function mostrarPrefs(){
  const sw=on=>'<span class="pf-sw'+(on?' on':'')+'"><i></i></span>';
  const lin=(k,t,d,ctl)=>'<div class="pf-linha" data-k="'+k+'"><div class="pf-txt"><b>'+t+'</b><small>'+d+'</small></div>'+ctl+'<div class="pf-aviso" hidden></div></div>';
  const gr=(t,x)=>'<div class="pf-grupo">'+t+'</div>'+x;
  const c=abrir('<h2>⚙ Preferências do Sistema</h2><p class="lei-sub">Versão 8.67.42a · Gerenciado pela Administração</p><div class="pf-scroll">'+
   gr('Geral',lin('livre','Livre arbítrio','Permite que você tome decisões por conta própria.',sw(true))+lin('notif','Notificações da Assembleia','Receber avisos da Assembleia Permanente a qualquer hora.',sw(true)))+
   gr('Privacidade',lin('alma','Propriedade da alma','Titular atual do cadastro.','<span class="pf-pill">República ›</span>')+lin('vig','Vigilância (câmera e microfone)','Aumenta a sua segurança.',sw(true))+lin('sync','Sincronizar com a Administração','Envia as suas preferências à Administração.',sw(true)))+
   gr('Compartilhamento',lin('comp','Compartilhar grupo','Convide pessoas para conhecer o Grupo.','<span class="pf-pill">Compartilhar ›</span>'))+
   gr('Avançado',lin('debug','Modo debug','Recursos de diagnóstico para desenvolvedores.',sw(A.get('debug_mode')==='1')))+
   '</div><p class="lei-status" aria-live="polite"></p><div class="lei-botoes"><button type="button" class="lei-btn" data-a="salvar">Salvar preferências</button><button type="button" class="lei-btn sec" data-a="fechar">Fechar</button></div>','lei-alta');
  const st=c.querySelector('.lei-status');let avisado=false;
  c.addEventListener('click',e=>{
   const r=e.target.closest&&e.target.closest('.pf-linha');
   if(r){
    const k=r.getAttribute('data-k'),av=r.querySelector('.pf-aviso'),s=r.querySelector('.pf-sw');
    const dizer=(t,treme)=>{av.textContent=t;av.hidden=false;if(treme){r.classList.remove('pf-treme');void r.offsetWidth;r.classList.add('pf-treme')}};
    if(k==='debug'){
     if(A.get('debug_mode')==='1'){A.del('debug_mode');s.classList.remove('on');dizer('Modo debug desativado.');atualizarBug()}
     else if(!avisado){avisado=true;dizer('A Administração não recomenda o uso do modo debug. Clique novamente para continuar por sua conta e risco.')}
     else{A.set('debug_mode','1');s.classList.add('on');dizer('Modo debug ativado. Um novo ícone surgiu no menu, ao lado do botão de tema.');atualizarBug()}
    }else if(k==='comp'){
     av.innerHTML='<b>Art. 3º — Do sigilo institucional</b><br>É vedado, em qualquer hipótese, falar deste Grupo fora de seus limites digitais.<br>§ 2º Em caso de dúvida, aplica-se a seguinte norma: NÃO SE FALA DESSE GRUPO.<br><i>Compartilhamento cancelado.</i>';av.hidden=false;
    }else{
     dizer(AVISOS[k],true);
     if(s){s.classList.remove('on');setTimeout(()=>s.classList.add('on'),450)}
    }
    return;
   }
   const a=e.target.getAttribute&&e.target.getAttribute('data-a');
   if(a==='fechar')fechar();
   else if(a==='salvar'){st.textContent='Preferências salvas e enviadas à Administração.';setTimeout(fechar,1700)}
  });
 }

 // ---------- Modo debug (ícone no menu) e login restrito ----------
 function atualizarBug(){
  const wrap=document.querySelector('nav .wrap');if(!wrap)return;
  let b=wrap.querySelector('.bug-toggle');
  const on=A.get('debug_mode')==='1';
  if(on&&!b){injetarCss();b=document.createElement('button');b.type='button';b.className='bug-toggle';b.title='Modo debug';b.setAttribute('aria-label','Modo debug');b.innerHTML=SVG_BUG;b.addEventListener('click',mostrarLogin);wrap.appendChild(b)}
  if(!on&&b)b.remove();
 }
 const norm=s=>s.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,'');
 const ISCAS={
  'ADMIN123':'Senha válida, mas para o ano de 1997.',
  'PISCINA':'Alerta: a Assembleia foi notificada de que você perguntou sobre a piscina.',
  'GOLPE':'Essa já foi usada.',
  '123456':'Senha muito comum. Tente uma menos comum e igualmente errada.',
  '12345678':'Senha muito comum. Tente uma menos comum e igualmente errada.',
  'SENHA':'Boa tentativa. A senha não é “senha”. Ou é? Não é.',
  'ADMIN':'Você não é um Administrador Supremo. Ainda.',
  'ADMINISTRADOR':'Você não é um Administrador Supremo. Ainda.',
  'WILLIAM':'Nome de Administrador não é senha. A Assembleia foi notificada do seu interesse.',
  'MURILO':'Nome de Administrador não é senha. A Assembleia foi notificada do seu interesse.',
  'RAFAEL':'Nome de Administrador não é senha. A Assembleia foi notificada do seu interesse.',
  'DRAKE':'Nome de Administrador não é senha. A Assembleia foi notificada do seu interesse.',
  'CAUA':'Nome de Administrador não é senha. A Assembleia foi notificada do seu interesse.',
  'JEAN':'Nome de Administrador não é senha. A Assembleia foi notificada do seu interesse.',
  'PEDRO':'Nome de Administrador não é senha. A Assembleia foi notificada do seu interesse.',
  'FEMCP':'Sigla desatualizada. A Administração não usa mais essa.',
  'GEMCP':'Está no caminho, mas faltou a primeira parte.',
  'PORTARIA':'Está no caminho, mas faltou a segunda parte.',
  'PORTARIA_GEMCP':'Essa era a senha antiga. A Administração a aposentou, por motivos de simplicidade.',
  'PORTARIA-GEMCP':'Essa era a senha antiga. A Administração a aposentou, por motivos de simplicidade.',
  'ANTIGAORDEM':'Não existe nenhuma Antiga Ordem. E, se existisse, seria nova.',
  'CACHOEIRA':'Operação desconhecida. Não existe relatório sobre isso. Pare de procurar.',
  'ALMA':'A alma já pertence à República.'
 };
 const ERRADAS=['Senha incorreta. A Assembleia foi notificada.','Acesso negado. Tente de novo, ou não.','Senha incorreta. Esta tentativa foi registrada e arquivada junto com as anteriores.','Negado por motivos de segurança, que são secretos.'];
 const AJUDA=['As dicas foram enviadas aos documentos oficiais da República. Os Termos de Uso foram atualizados, e há algo novo no rodapé. Procure as tarjas pretas.','Dica extra da Assembleia: leia os Termos de Uso (o link amarelo do rodapé) e a Constituição.','O link amarelo do rodapé abre os Termos. A Constituição está no menu. Clique nas tarjas pretas para revelar o que está escondido.'];
 function mostrarLogin(){
  const c=abrir('<h2>🔒 Acesso restrito</h2><p class="lei-sub">Área exclusiva dos Administradores Supremos</p>'+
   '<label class="lg-label" for="lg-senha">Senha</label><input id="lg-senha" class="lg-input" type="password" autocomplete="off" placeholder="Digite a senha">'+
   '<p class="lei-status" aria-live="polite"></p>'+
   '<div class="lei-botoes"><button type="button" class="lei-btn" data-a="entrar">Entrar</button><button type="button" class="lg-link" data-a="esqueci">Esqueci a senha</button><button type="button" class="lei-btn sec" data-a="fechar">Voltar</button></div>');
  const st=c.querySelector('.lei-status'),inp=c.querySelector('#lg-senha');let esq=0;
  function entrar(){
   const v=inp.value.trim();
   if(!v){st.textContent='Digite alguma coisa. Qualquer coisa. Errada, de preferência.';return}
   const n=norm(v);
   if(n===SENHA){st.textContent='Acesso concedido. Bem-vindo, Administrador.';A.set('acesso_portaria','ok',1);setTimeout(()=>{location.href='portaria.html'},1100);return}
   const t=soma('tentativas_de_acesso');
   if(n==='PISCINA')soma('piscina_perguntada');
   let m=ISCAS[n]||ERRADAS[(t-1)%ERRADAS.length];
   if(t>=5&&!ISCAS[n])m+=' Você já tentou '+t+' vezes. A Assembleia sugere clicar em “Esqueci a senha”.';
   st.textContent=m;inp.select();
  }
  c.addEventListener('click',e=>{
   const a=e.target.getAttribute&&e.target.getAttribute('data-a');
   if(a==='entrar')entrar();
   else if(a==='fechar')fechar();
   else if(a==='esqueci'){esq++;liberarDicas();st.textContent=AJUDA[Math.min(esq,3)-1]}
  });
  inp.addEventListener('keydown',e=>{if(e.key==='Enter')entrar()});
  inp.focus();
 }

 // ---------- Rodapé: link dos termos (fica amarelo só depois do "esqueci a senha") ----------
 function destacarTermos(){
  const w=document.querySelector('.lei-rodape');if(!w)return;
  const a=w.querySelector('.lei-termos');
  const deve=!!A.get('dicas_liberadas')&&A.get('termos_novidade')!=='sim';
  a.classList.toggle('novo',deve);
  let s=w.querySelector('small');
  if(deve&&!s){s=document.createElement('small');s.textContent='Termos atualizados. Você não leu os anteriores.';a.parentNode.appendChild(s)}
  if(!deve&&s)s.remove();
 }
 function rodape(){
  const d=document.querySelector('footer .disclaimer');if(!d)return;
  const w=document.createElement('div');w.className='lei-rodape';
  w.innerHTML='<div><a href="#" class="lei-termos">Termos de Uso e Política de Cookies</a></div>';
  w.querySelector('.lei-termos').addEventListener('click',e=>{e.preventDefault();if(A.get('dicas_liberadas'))A.set('termos_novidade','sim');destacarTermos();mostrarTermos(true)});
  d.parentNode.insertBefore(w,d);
  destacarTermos();
 }

 function brasao(){
  const b=document.querySelector('header .crest');if(!b)return;
  b.style.cursor='pointer';b.setAttribute('role','button');b.setAttribute('tabindex','0');b.setAttribute('aria-label','Preferências do Sistema');
  const abrirP=e=>{e.preventDefault();mostrarPrefs()};
  b.addEventListener('click',abrirP);
  b.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')abrirP(e)});
 }

 function iniciar(){
  injetarCss();rodape();brasao();
  if(A.get('dicas_liberadas'))document.querySelectorAll('.dica[hidden]').forEach(e=>{e.hidden=false});
  document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('.tarja');if(t)t.classList.toggle('aberta')});
  atualizarBug();
  if(ler(K_COOKIES))visita();
  const precisaTermos=()=>{if(!ler(K_TERMOS))mostrarTermos(false);else fechar()};
  if(!ler(K_COOKIES))mostrarCookies(precisaTermos);
  else if(!ler(K_TERMOS))mostrarTermos(false);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciar);else iniciar();
})();
