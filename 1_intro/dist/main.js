(()=>{var e={784:(e,r,o)=>{const t=o(765);modul.exports=class{constructor(){this.error=document.querySelector("#error")}tampilkanErrorPenjumlahan=(e,r)=>{const o=e.reduce(((e,o,n)=>t(r[n])?e+"":e+`${o} itu bukan angka! `),"Silahkan masukkan angka yang benar: ");error.classList.remove("d-none"),error.innerText=o};sembunyikanError=()=>error.classList.add("d-none")}},475:(e,r,o)=>{const t=o(765),n=o(621);e.exports=(e,r,o)=>{e.sembunyikanError(),r.onClick((()=>{alert.sembunyikanError();const e=r.getInput(),o=n(...e);if(t(...o)){const[e,t]=o;r.setResult(e+t)}else r.setResult(""),pesanErrorPenjumlahan(e,o)})),o.onClick((()=>{fetch("https://candaan-api.vercel.app/api/text/random").then((e=>e.json())).then((e=>{o.setModal(e.data)}))}))}},351:e=>{e.exports=class{constructor(){document.querySelector("#operand1"),document.querySelector("#operand2"),document.querySelector("#tombol-tambah"),document.querySelector("#hasil"),document.querySelector("#error")}getInput(){return[this.operand1.value,this.operand2.value]}getResult(e,r){hasil.innerText=e+r}onClick(e){this.tombolTambah.addEventListener("click",e)}}},217:()=>{document.querySelector("#jokes-receh"),document.querySelector(".modal-body"),modul.exports=class{constructor(){this.tombolJokes=document.querySelector("#jokes-receh"),this.modalBody=document.querySelector(".modal-Body")}setModal(e){this.modalBody.innerHTML=e}onclick(e){this.tombolJokes.addEventListener("click",e)}}},765:e=>{e.exports=(...e)=>e.every((e=>"number"==typeof e&&!isNaN(e)))},621:e=>{e.exports=(...e)=>e.map((e=>parseInt(e)))}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var s=r[t]={exports:{}};return e[t](s,s.exports,o),s.exports}const t=o(475),n=o(784),s=o(351),a=o(217);t(new n,new s,new a)})();