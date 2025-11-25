console.log("%c ARF — Premium Animation Pack Active","color:#00c6ff;font-size:15px");

/* HERO SHOW */
setTimeout(()=>{
  const hero=document.querySelector(".hero");
  if(hero) hero.classList.add("visible");
},280);

/* SCROLL REVEAL STAGGER */
const revealTargets=[
  ".value-grid div",".card",".ind-list li",
  ".stats",".ncard",".rev",".matrix-grid p",
  ".cta-final",".tech-lead",".innovation",".workflow",".highlight-strip"
];
function reveal(){
  revealTargets.forEach(sel=>{
    document.querySelectorAll(sel).forEach((el,i)=>{
      if(el.getBoundingClientRect().top < window.innerHeight - 110){
        setTimeout(()=>el.classList.add("visible"), i * 55);
      }
    });
  });
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* STATS COUNTER */
let statsPlayed=false;
function animateStats(){
  const stats=document.querySelector(".stats");
  if(!stats || statsPlayed) return;
  if(stats.getBoundingClientRect().top < window.innerHeight - 80){
    statsPlayed=true;
    document.querySelectorAll(".stats h3").forEach(el=>{
      const target=parseInt(el.textContent);
      let now=0, add=Math.ceil(target/60);
      const t=setInterval(()=>{
        now+=add;
        if(now>=target){ now=target; clearInterval(t); }
        el.textContent=now;
      },22);
    });
  }
}
window.addEventListener("scroll", animateStats);

/* SCROLL PROGRESS BAR */
const scrollBar=document.createElement("div");
scrollBar.id="scrollProgress";
document.body.appendChild(scrollBar);
window.addEventListener("scroll",()=>{
  const h=document.documentElement;
  const scrolled=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
  scrollBar.style.width=scrolled+"%";
});

/* CURSOR SPOTLIGHT */
document.addEventListener("mousemove",e=>{
  document.body.style.setProperty("--mx", e.clientX+"px");
  document.body.style.setProperty("--my", e.clientY+"px");
});

/* CIRCUIT PARTICLES */
const canvas=document.getElementById("circuitCanvas"),
      ctx=canvas?.getContext("2d");
if(canvas){
  function resize(){ canvas.width=innerWidth; canvas.height=innerHeight; }
  resize(); addEventListener("resize",resize);
  let nodes=Array.from({length:75},()=>({
    x:Math.random()*canvas.width, y:Math.random()*canvas.height,
    dx:(Math.random()-.5)*0.45, dy:(Math.random()-.5)*0.45
  }));
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    nodes.forEach((a,i)=>{
      a.x+=a.dx; a.y+=a.dy;
      if(a.x<0||a.x>canvas.width)a.dx*=-1;
      if(a.y<0||a.y>canvas.height)a.dy*=-1;
      ctx.beginPath(); ctx.arc(a.x,a.y,2.3,0,Math.PI*2);
      ctx.fillStyle="#00b4ff"; ctx.fill();
      for(let j=i+1;j<nodes.length;j++){
        const b=nodes[j], d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<150){
          ctx.strokeStyle=`rgba(0,176,255,${1-d/150})`;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* FLOAT CTA */
const f=document.createElement("button");
f.id="floatCTA"; f.innerText="Request Proposal";
f.onclick=()=>window.location.href="/contact";
document.body.appendChild(f);
