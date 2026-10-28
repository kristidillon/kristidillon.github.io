const pw=require('playwright-core');(async()=>{const b=await pw.chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.goto('file:///workspace/kristidillon.github.io/resume/resume.html');
const o=await p.evaluate(()=>{const m=document.querySelector('.main'),s=document.querySelector('.side'),pg=document.querySelector('.page');const r=x=>x.lastElementChild.getBoundingClientRect().bottom;return {main:r(m),side:r(s),page:pg.getBoundingClientRect().bottom,fonts:[...document.fonts].map(f=>f.family+f.status)}});console.log(JSON.stringify(o));
await p.pdf({path:'/workspace/kristidillon.github.io/Kristi-Dillon-Resume.pdf',format:'Letter',printBackground:true,preferCSSPageSize:true});await b.close()})();
