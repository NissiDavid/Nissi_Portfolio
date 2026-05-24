/* CURSOR */
const cur=document.getElementById('cur'),dot=document.getElementById('cur-dot');
document.addEventListener('mousemove',e=>{
  cur.style.left=e.clientX-11+'px';cur.style.top=e.clientY-11+'px';
  dot.style.left=e.clientX-2.5+'px';dot.style.top=e.clientY-2.5+'px';
});

/* PARTICLES */
const pc=document.getElementById('ptcl');
for(let i=0;i<16;i++){
  const p=document.createElement('div');p.className='pt';
  const s=Math.random()*3.5+1;
  p.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;animation-duration:${Math.random()*14+9}s;animation-delay:${Math.random()*9}s;`;
  pc.appendChild(p);
}

/* THEME */
const tb=document.getElementById('thm');let th='dark';
tb.addEventListener('click',()=>{
  th=th==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',th);
  tb.textContent=th==='dark'?'☀ Light':'☾ Dark';
});

/* TYPING */
const phrases=['Building with Python & Flask ✦','Designing meaningful UI ✦','Learning Flask & Deployment ✦','From Bengaluru with creativity ✦','Turning ideas into real projects ✦'];
let pi=0,ci=0,dl=false;
const tel=document.getElementById('tw-text');
(function type(){
  const w=phrases[pi];
  tel.textContent=dl?w.slice(0,--ci):w.slice(0,++ci);
  if(!dl&&ci===w.length){dl=true;setTimeout(type,1800);return;}
  if(dl&&ci===0){dl=false;pi=(pi+1)%phrases.length;}
  setTimeout(type,dl?42:78);
})();

/* SCROLL REVEAL + SKILL BARS */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('on');
      e.target.querySelectorAll('.bar-fill').forEach(b=>b.style.width=b.dataset.w+'%');
    }
  });
},{threshold:.13});
document.querySelectorAll('.reveal,.tli,.skcat').forEach(el=>{
  obs.observe(el);
  el.querySelectorAll('.bar-fill').forEach(b=>b.style.width='0%');
});

/* NAV ACTIVE */
const secs=document.querySelectorAll('section[id]');
const nas=document.querySelectorAll('.nm a');
window.addEventListener('scroll',()=>{
  let cur='';
  secs.forEach(s=>{if(pageYOffset>=s.offsetTop-220)cur=s.id;});
  nas.forEach(a=>{a.classList.toggle('active',a.getAttribute('href')==='#'+cur);});
});

/* VISITOR COUNTER */
const v=parseInt(localStorage.getItem('nd_v')||'0')+1;
localStorage.setItem('nd_v',v);
document.getElementById('vcnt').textContent=(1247+v).toLocaleString();