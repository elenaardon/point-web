const reg=document.getElementById('f-reg'),log=document.getElementById('f-log'),tr=document.getElementById('t-reg'),tl=document.getElementById('t-log');
function tab(r){reg.hidden=!r;log.hidden=r;tr.setAttribute('aria-selected',r);tl.setAttribute('aria-selected',!r)}
tr.onclick=()=>tab(true);tl.onclick=()=>tab(false);
const ok=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
function bind(f,isReg){f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f),m=f.querySelector('.msg');
  const err=x=>{m.className='msg err';m.textContent=x};
  if(isReg&&!(d.get('nombre')||'').trim())return err('Escribe tu nombre.');
  if(!ok((d.get('email')||'').trim()))return err('Escribe un correo válido.');
  if((d.get('pass')||'').length<8)return err('La contraseña debe tener al menos 8 caracteres.');
  if(isReg&&!d.get('terms'))return err('Debes aceptar los términos.');
  m.className='msg ok';m.textContent=isReg?'¡Listo! Tu cuenta fue creada (demo).':'¡Bienvenido de vuelta! (demo)';
  // TODO: aquí conecta tu backend (fetch a tu API) para guardar la cuenta de verdad.
})}
bind(reg,true);bind(log,false);
