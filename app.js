let inputqr= document.getElementById("inputqr");
let imgqr= document.getElementById("imgqr");
let boxB=document.getElementById("box");
const getqr =()=>{
imgqr.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputqr.value;
inputqr.value="";
boxB.style.width= "384px";
boxB.style.height="384px";

}
btnqr.addEventListener("click",getqr);
