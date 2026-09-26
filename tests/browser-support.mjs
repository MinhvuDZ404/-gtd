import packaged from '@sparticuz/chromium';
import {brotliDecompressSync} from 'node:zlib';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {resolve,dirname} from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
export async function browserOptions(){
 const root=dirname(dirname(require.resolve('@sparticuz/chromium'))),dir=resolve('artifacts/browser-libs');
 mkdirSync(dir,{recursive:true});writeFileSync(`${dir}/libraries.tar`,brotliDecompressSync(readFileSync(`${root}/bin/al2023.tar.br`)));execFileSync('tar',['xf',`${dir}/libraries.tar`,'-C',dir]);
 return {executablePath:await packaged.executablePath(),args:[...packaged.args,'--disable-gpu'],env:{...process.env,LD_LIBRARY_PATH:`${dir}/lib:${process.env.LD_LIBRARY_PATH||''}`},headless:true};
}
