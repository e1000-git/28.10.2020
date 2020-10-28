'use strict'
 var btn=document.querySelectorAll(".accordion button")
 var p=document.querySelectorAll(".accordion p")

 for(var i=0;i<btn.length;i++){
     btn[i].onclick=function(){
         btn[i].index
         for(var j=0;j<p.length;j++){
             p[j].style.display="none"
             
         }
         this.nextElementSibling.style.display="block"
         
     }
 }


 var mySlider=[
     "img/about_01.jpg",
     "img/about_02.jpg",
     "img/about_03.jpg",

]
var currentSlide=0
var img=document.querySelector(".slider img")
img.src=mySlider[0]
var next=document.querySelector(".next")
var prev=document.querySelector(".prev")
next.onclick=function(){
    currentSlide++
    if(currentSlide>=mySlider.length){
        currentSlide=0
    }
    img.src=mySlider[currentSlide]
}
prev.onclick=function(){
    currentSlide--
    if(currentSlide==-1){
        currentSlide=mySlider.length-1
    }
    img.src=mySlider[currentSlide]
}
