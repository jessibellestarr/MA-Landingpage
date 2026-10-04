(() => {
 const q = new URLSearchParams(location.search);
 const timing = q.get('timing');
 const summary = document.querySelector('#route-summary');
 if (!summary) return;
 if (['at-need','pre-need'].includes(timing)) {
  document.getElementById(timing === 'at-need' ? 'pre-need' : 'at-need').hidden = true;
  summary.textContent = timing === 'at-need' ? 'Your starting path: a death has happened.' : 'Your starting path: planning ahead.';
 }
 fetch('/states.json').then(r => {if (!r.ok) throw Error(); return r.json();}).then(states => {
  const selected = ['provider','service','origin','disposition'].map(k=>states.find(s=>s.code===q.get(k))).filter(Boolean);
  const unique = [...new Map(selected.map(s=>[s.code,s])).values()];
  const container=document.querySelector('#related-states');
  for (const state of unique) {
   const p=document.createElement('p'),a=document.createElement('a'); a.href=`/states/${state.slug}/`;a.textContent=`${state.name} starting page`;p.append(a);container.append(p);
  }
  if(unique.length>1 || q.get('crossing')==='yes') document.querySelector('#transport-status').textContent='Your answers involve more than one state or possible interstate transport. Confirm the actual transport route and check release, transit, and destination requirements before arranging collection.';
 }).catch(()=>{document.querySelector('#related-states').textContent='Use All states above to find pages for the other locations involved.';});
})();
