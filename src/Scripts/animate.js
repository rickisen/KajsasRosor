"use strict"


var tl = new TimelineMax({paused:true}); 

tl.add( TweenMax.to('main', 1, {backgroundColor:"blue"})); 
tl.add( TweenMax.to('main', 1, {backgroundColor:"maroon"})); 
tl.add( TweenMax.to('main', 1, {backgroundColor:"pink"})); 

$(document).ready(function(){
    tl.play();
}); 

