/**
 * <head> içinde, ilk boyamadan önce çalışır; mod yüklenirken yanıp sönmez.
 * Öncelik sırası:
 *   1. ?theme=koyu gibi URL parametresi (yalnızca önizleme; kaydedilmez,
 *      Lighthouse CI üç modu bu şekilde ölçer)
 *   2. localStorage içindeki seçim
 *   3. Sistem tercihi (prefers-color-scheme): Normal ya da Koyu
 * Anahtar ve değerler lib/theme.ts ile aynı olmalı.
 */
export const themeScript = `(function(){
var ok=['normal','dark','color-safe'],t=null;
try{t=new URLSearchParams(location.search).get('theme');}catch(e){}
if(ok.indexOf(t)<0){try{t=localStorage.getItem('test-theme');}catch(e){}}
if(ok.indexOf(t)<0){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'normal';}
var r=document.documentElement;r.dataset.theme=t;r.style.colorScheme=t==='dark'?'dark':'light';
})();`;
