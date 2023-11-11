
let url="https://catfact.ninja/fact";
 
var btn=document.getElementById('mybtn');
let showmsg=document.getElementById('fact');
btn.addEventListener('click',function(){

    getfact();
});


async function getfact()
{
   let res=await fetch(url);
   let data=await res.json();
  showmsg.innerText=data.fact;
    
}