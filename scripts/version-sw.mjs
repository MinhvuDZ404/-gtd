import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const hash=createHash('sha256').update(readFileSync('dist/index.html')).digest('hex').slice(0,12);
writeFileSync('dist/sw.js',readFileSync('public/sw.js','utf8').replace('goldward-v1',`goldward-${hash}`));
// A single-file distribution also works on first launch with no server/cache.
let html=readFileSync('dist/index.html','utf8');
html=html.replace(/<script type="module" crossorigin src="\.\/([^\"]+)"><\/script>/,(_,path)=>`<script type="module">${readFileSync('dist/'+path,'utf8').replace(/<\/script/gi,'<\\/script')}</script>`);
html=html.replace(/<link rel="stylesheet" crossorigin href="\.\/([^\"]+)">/,(_,path)=>`<style>${readFileSync('dist/'+path,'utf8')}</style>`);
writeFileSync('dist/offline.html',html);
