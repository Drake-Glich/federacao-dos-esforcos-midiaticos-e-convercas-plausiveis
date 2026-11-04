// ---- Modo escuro: aplica o tema salvo (ou o do sistema) o mais cedo possível ----
(function(){
 var root=document.documentElement,KEY='tema';
 function lido(){try{return localStorage.getItem(KEY)}catch(e){return null}}
 var tema=lido()||((window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');
 root.setAttribute('data-theme',tema);
 window.__tema={get:function(){return root.getAttribute('data-theme')},set:function(t){root.setAttribute('data-theme',t);try{localStorage.setItem(KEY,t)}catch(e){}}};
})();

document.addEventListener('DOMContentLoaded',()=>{
 const wrap=document.querySelector('nav .wrap');
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
//  COOKIES E TERMOS DE USO (humor) — aparecem na primeira visita
//  Para editar os termos, mexa só na lista TERMOS logo abaixo.
//  Para fazer as caixas aparecerem de novo para todo mundo, mude VERSAO.
// =====================================================================
(function(){
 const VERSAO='1';
 const K_COOKIES='cookies-ok-v'+VERSAO, K_TERMOS='termos-ok-v'+VERSAO;
 const ler=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
 const gravar=k=>{try{localStorage.setItem(k,'1')}catch(e){}};

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
  ['26ª — Do Aceite Final','Ao clicar em ACEITO, o USUÁRIO declara que leu todos os termos, entendeu todos os termos e confia que ninguém leu todos os termos. Declara, ainda, que NÃO FALARÁ SOBRE O GRUPO e que NÃO PERGUNTARÁ SOBRE A PISCINA.']
 ];

 let overlay=null;
 function abrir(html){
  if(!overlay){overlay=document.createElement('div');overlay.id='lei-overlay';document.body.appendChild(overlay)}
  overlay.innerHTML='<div class="lei-caixa" role="dialog" aria-modal="true">'+html+'</div>';
  document.body.style.overflow='hidden';
  return overlay.firstChild;
 }
 function fechar(){if(overlay){overlay.remove();overlay=null}document.body.style.overflow=''}

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
   if(a==='recusar'){st.textContent='A Assembleia Permanente ainda não aprovou o botão de recusa. Estamos trabalhando nisso (desde sempre).';return}
   gravar(K_COOKIES);depois();
  });
  c.querySelector('.lei-btn').focus();
 }

 function mostrarTermos(jaAceito){
  const corpo=TERMOS.map(t=>'<h3>Cláusula '+t[0]+'</h3><p>'+t[1]+'</p>').join('');
  const c=abrir('<h2>📜 Termos de Uso e Contrato de Adesão Perpétua</h2>'+
   '<p class="lei-sub">Versão 7.3.1-b · Aprovada pela Assembleia Permanente em data indefinida</p>'+
   '<div class="lei-scroll" tabindex="0">'+corpo+'<p class="lei-mini">Documento de caráter humorístico e fictício, sem qualquer validade jurídica. Nenhuma alma foi realmente adquirida.</p></div>'+
   '<p class="lei-status" aria-live="polite"></p>'+
   '<div class="lei-botoes">'+(jaAceito
     ?'<button type="button" class="lei-btn" data-a="fechar">Fechar</button>'
     :'<button type="button" class="lei-btn" data-a="aceitar" disabled>Aceito (não há alternativa)</button><button type="button" class="lei-btn sec" data-a="recusar">Não aceito</button>')+'</div>');
  const st=c.querySelector('.lei-status'),sc=c.querySelector('.lei-scroll'),ok=c.querySelector('[data-a="aceitar"]');
  if(ok){
   st.textContent='Role até o final do texto para habilitar o botão.';
   const check=()=>{if(sc.scrollTop+sc.clientHeight>=sc.scrollHeight-8){ok.disabled=false;st.textContent='Leitura concluída. Parabéns, você leu tudo (ninguém lê).'}};
   sc.addEventListener('scroll',check);check();
  }
  c.addEventListener('click',e=>{
   const a=e.target.getAttribute&&e.target.getAttribute('data-a');
   if(a==='aceitar'){gravar(K_TERMOS);fechar()}
   else if(a==='fechar')fechar();
   else if(a==='recusar')st.textContent='A recusa configura aceitação tácita (Cláusula 3ª). Por favor, role até o final e clique em ACEITO.';
  });
  sc.focus();
 }

 function iniciar(){
  const rodape=document.querySelector('footer .disclaimer');
  if(rodape){
   const p=document.createElement('p');p.style.margin='0 0 10px';
   p.innerHTML='<a href="#" style="color:#fff">Termos de Uso e Política de Cookies</a>';
   p.firstChild.addEventListener('click',e=>{e.preventDefault();mostrarTermos(true)});
   rodape.parentNode.insertBefore(p,rodape);
  }
  const precisaTermos=()=>{if(!ler(K_TERMOS))mostrarTermos(false);else fechar()};
  if(!ler(K_COOKIES))mostrarCookies(precisaTermos);
  else if(!ler(K_TERMOS))mostrarTermos(false);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciar);else iniciar();
})();
