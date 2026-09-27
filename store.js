import {makeDemo} from './demo.js';
const key='nexus-demo-v1';
export function loadDemo(){try{const d=JSON.parse(localStorage.getItem(key));if(d?.mode==='demo'&&d?.version===1&&Array.isArray(d.missions))return d}catch{}return makeDemo()}
export function saveDemo(data){try{localStorage.setItem(key,JSON.stringify(data));return true}catch{return false}}
export function resetDemo(){localStorage.removeItem(key);return makeDemo()}
export async function api(path,options={}){const r=await fetch('./api/'+path,{credentials:'same-origin',...options,headers:{'Content-Type':'application/json',...options.headers}});if(!r.ok){let detail;try{detail=(await r.json()).error}catch{}throw new Error(detail||'Private connection is unavailable ('+r.status+').')}return r.json()}
