(() => {
 const q = new URLSearchParams(location.search);
 const summary = document.querySelector('#route-summary');
 if (!summary) return;
 const timing = q.get('timing');
 if (['at-need','pre-need'].includes(timing)) summary.textContent = timing === 'at-need' ? 'Your starting path: a death has happened.' : 'Your starting path: planning ahead.';
 let container = document.querySelector('#related-states');
 if (!container) {
  const section = document.createElement('section'); section.className = 'section';
  const heading = document.createElement('h2'); heading.textContent = 'Other locations involved';
  container = document.createElement('div'); container.id = 'related-states';
  section.append(heading, container); document.querySelector('main').append(section);
 }
 fetch('/states.json').then(r => {if (!r.ok) throw Error(); return r.json();}).then(states => {
  const selected = ['provider','service','origin','disposition'].map(k=>states.find(s=>s.code===q.get(k))).filter(Boolean);
  const unique = [...new Map(selected.map(s=>[s.code,s])).values()];
  for (const state of unique) {
   const p=document.createElement('p'),a=document.createElement('a'); a.href=`/states/${state.slug}/`;a.textContent=`${state.name} starting page`;p.append(a);container.append(p);
  }
  if(unique.length>1 || q.get('crossing')==='yes') {
   let status = document.querySelector('#transport-status');
   if (!status) { status=document.createElement('p'); status.id='transport-status'; container.prepend(status); }
   status.textContent='Your answers involve more than one state or possible interstate transport. Confirm the actual transport route and check release, transit, and destination requirements before arranging collection.';
  }
 }).catch(()=>{container.textContent='Use All states above to find pages for the other locations involved.';});
})();
