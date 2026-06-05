(function(){
  const toggle=document.getElementById('theme-toggle');
  const html=document.documentElement;
  const saved=localStorage.getItem('theme')||'dark';
  html.setAttribute('data-theme',saved);
  if(toggle){
    toggle.innerHTML=saved==='dark'?'☀️ Light':'🌙 Dark';
    toggle.addEventListener('click',()=>{
      const cur=html.getAttribute('data-theme');
      const next=cur==='dark'?'light':'dark';
      html.setAttribute('data-theme',next);
      localStorage.setItem('theme',next);
      toggle.innerHTML=next==='dark'?'☀️ Light':'🌙 Dark';
    });
  }
  const menuBtn=document.getElementById('menu-toggle');
  const nav=document.getElementById('main-nav');
  menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
  nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
  const btt=document.getElementById('back-to-top');
  if(btt){
    window.addEventListener('scroll',()=>btt.classList.toggle('visible',window.scrollY>500));
    btt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  }
  const banner=document.getElementById('cookie-banner');
  const accept=document.getElementById('cookie-accept');
  if(banner&&accept&&!localStorage.getItem('cookies-accepted')){
    banner.style.display='flex';
    accept.addEventListener('click',()=>{localStorage.setItem('cookies-accepted','true');banner.style.display='none';});
  }
})();
