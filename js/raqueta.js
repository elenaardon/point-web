// Para agregar una pala: sube su foto a assets/img/palas/ y añade un objeto con 'img' (y 'bg' si la foto no tiene fondo blanco).
const GEN='assets/img/raqueta-generica.svg';
const PALAS=[
 {n:'Bullpadel Wonder 2026',lvl:'Nivel avanzado',w:'365 g',b:'26 cm',s:'365 cm²',img:'assets/img/palas/bullpadel-wonder-2026.webp'},
 {n:'Bullpadel Vertex',img:'assets/img/palas/bullpadel-vertex.jpg',bg:'#e5e5e5'},{n:'Babolat Technical Viper',img:'assets/img/palas/babolat-technical-viper.webp'},{n:'Siux Diablo',img:'assets/img/palas/siux-diablo.webp'},{n:'Nox AT10 Genius',img:'assets/img/palas/nox-at10-genius.webp'},{n:'Head Speed Pro'},{n:'Adidas Metalbone'}
];
const $=id=>document.getElementById(id),inp=$('pala');
$('palas').innerHTML=PALAS.map(p=>`<option value="${p.n}">`).join('');
$('chips').innerHTML=PALAS.slice(0,5).map(p=>`<button type="button" class="chip" data-n="${p.n}">${p.n}</button>`).join('');
function show(name){
  const v=name.trim(); if(!v) return;
  const p=PALAS.find(x=>x.n.toLowerCase()===v.toLowerCase())||{n:v};
  $('rname').textContent=p.n;$('rlevel').textContent=p.lvl||'Sin nivel';
  $('rw').textContent=p.w||'—';$('rb').textContent=p.b||'—';$('rs').textContent=p.s||'—';
  $('rimg').src=p.img||GEN;$('rimg').alt=p.n;$('rimgbox').style.background=p.bg||'#fff';
  document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c.dataset.n===p.n));
}
inp.addEventListener('input',()=>{if(PALAS.some(x=>x.n.toLowerCase()===inp.value.trim().toLowerCase()))show(inp.value)});
inp.addEventListener('change',()=>show(inp.value));
inp.addEventListener('keydown',e=>{if(e.key==='Enter')show(inp.value)});
$('chips').addEventListener('click',e=>{const c=e.target.closest('.chip');if(c){inp.value=c.dataset.n;show(c.dataset.n)}});
