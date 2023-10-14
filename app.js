let inputqr= document.getElementById("inputqr");
let imgqr= document.getElementById("imgqr");
let boxb=document.getElementsByClassName("box");
const getqr =()=>{
imgqr.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputqr.value;


}
btnqr.addEventListener("click",getqr);
