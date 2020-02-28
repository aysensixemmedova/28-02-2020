var btLeft=document.getElementById("btnLeft")
var btRight=document.getElementById("btnRight")
var sliderlist=document.querySelectorAll(".slide")
var hazirki=0
btLeft.onclick=function(){
Slider(hazirki-1)
}
btRight.onclick=function(){
    Slider(hazirki+1)
}
function Slider(say){
    sliderlist[hazirki].className="slide";
    hazirki = (say+sliderlist.length)%sliderlist.length
    sliderlist[hazirki].className="slide active"
}