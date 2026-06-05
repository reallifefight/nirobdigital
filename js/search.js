document.addEventListener('DOMContentLoaded',()=>{
  const input=document.getElementById('search-input');
  const results=document.getElementById('search-results');
  if(!input||!results)return;
  let pages=[];
  fetch('/search/search.json')
    .then(r=>r.json())
    .then(data=>pages=data)
    .catch(()=>results.innerHTML='<p>Search index failed to load.</p>');
  input.addEventListener('input',(e)=>{
    const q=e.target.value.toLowerCase().trim();
    if(!q){results.innerHTML='';return;}
    const filtered=pages.filter(p=>p.title.toLowerCase().includes(q)||p.description.toLowerCase().includes(q)||(p.tags&&p.tags.some(t=>t.toLowerCase().includes(q))));
    if(filtered.length===0)results.innerHTML='<p>No results found.</p>';
    else results.innerHTML=filtered.map(p=>`<div class="search-result-item"><a href="${p.url}">${p.title}</a><p>${p.description}</p></div>`).join('');
  });
});
