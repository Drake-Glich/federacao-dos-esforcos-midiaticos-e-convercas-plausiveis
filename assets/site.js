
document.addEventListener('DOMContentLoaded',()=>{
 const current=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
 const form=document.querySelector('[data-search]');
 if(form)form.addEventListener('submit',e=>{e.preventDefault();const q=form.querySelector('input').value.trim().toLowerCase();document.querySelectorAll('[data-searchable]').forEach(el=>{el.hidden=!!q&&!el.innerText.toLowerCase().includes(q)})});
});
