const b=document.querySelector('.burger'),m=document.getElementById('menu');
function t(o){m.classList.toggle('on',o);b.setAttribute('aria-expanded',o)}
b.onclick=()=>t(!m.classList.contains('on'));m.querySelectorAll('a').forEach(a=>a.onclick=()=>t(false));
