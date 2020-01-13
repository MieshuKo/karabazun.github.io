function parallax(event) {
 console.log(event.clientX, " x ",event.clientY, " y ");
this.querySelectorAll('.br').forEach(br =>{
br.style.transform = "translateX(" + event.clientX/50 + "px) ";
});
}

document.addEventListener('mousemove',parallax);

var modal = document.getElementById('myModal');
var btn= document.getElementById("myBtn");
var span=document.getElementsByClassName("close")[0];
var span=document.getElementsByClassName("btn btn-primary")[0];
btn.onclick=function(){
	modal.style.display="block";
}
span.onclick=function(){
	modal.style.display="none";
}
window.onclick=function(event){
	if(event.target==modal){
		modal.style.display="none";
  }
}
