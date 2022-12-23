const body=document.querySelector("body");
const button=document.querySelector("button");

const colors=["pink","yellow","green","#2596be","#2596be"];

 button.addEventListener("click", changeBackground)
 function changeBackground(){
   const rastgeleSayı= Math.floor(Math.random() * colors.length);
   const secilenRenk = colors[rastgeleSayı];
  console.log(rastgeleSayı,secilenRenk)

    body.style.backgroundColor= secilenRenk

 }
