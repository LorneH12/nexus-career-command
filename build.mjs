import {copyFile,mkdir,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist');
for(const f of ['index.html','style.css','app.js','model.js','demo.js','store.js'])await copyFile(f,'dist/'+f);
console.log('Public-only static bundle built in dist/');
