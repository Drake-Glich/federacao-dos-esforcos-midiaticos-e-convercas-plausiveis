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
