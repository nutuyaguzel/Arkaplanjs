const body=document.querySelector("body");
const button=document.querySelector("button");

const colors=["pink","yellow","green","#2596be","#2596be"];

 button.addEventListener("click", changeBackground)
 function changeBackground(){
   const rastgeleSayÄ±= Math.floor(Math.random() * colors.length);
   const secilenRenk = colors[rastgeleSayÄ±];
  console.log(rastgeleSayÄ±,secilenRenk)

    body.style.backgroundColor= secilenRenk

 }
