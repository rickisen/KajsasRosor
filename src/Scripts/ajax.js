"use strict"; 

$(document).ready(function(){
  addListeners();
}); 

function addListeners() {
  // select only all links that lead to somewhere local on this page
  var localLinks = $('a[href^="/?/"]'); 

  // remove any old event listeners, and add the correct one
  localLinks.off('click'); 
  localLinks.click(loadWithAjax); 
}

function loadWithAjax(event) {
  event.preventDefault();
  var link = $(event.currentTarget).attr('href');

  // add the key to make the server reply with a 
  // html document only containing the interesting bits.
  link += '/mini'; 

  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    handleNewMain(this.responseXML);
  }

  xhr.open("GET", link);
  xhr.responseType = "document"; // so that we can recieve and parse it as html
  xhr.send();

  return false; 
}

function handleNewMain(dom) {
  // replace the main tag with the new one
  var newMain = dom.getElementsByTagName('main')[0];
  var oldMain = document.getElementsByTagName('main')[0]; 
  oldMain.innerHTML = newMain.innerHTML ;
  // fadeReplace(oldMain, newMain, 100); 

  // do the same for the hero image
  var newHero = dom.getElementsByClassName('hero')[0];
  var oldHero = document.getElementsByClassName('hero')[0];
  fadeReplace(oldHero, newHero, 1000); 

  // makes sure any new local links in the 
  // document has been ajax enabled.
  addListeners();
}

function fadeReplace(original, replacment, duration) {
  // make sure they are jquery objects
  // and get the destination coordinates
  var original       = $(original);
  var replacment     = $(replacment);
  var replacmentMask = $(replacment).clone();
  var destination    = original.offset();

  // first place the replacmentMask on top of 
  // the destination, and fade it in
  replacmentMask.css('display','none'); 
  original.parent().append(replacmentMask);
  replacmentMask.css('position','absolute'); 
  replacmentMask.css('top', destination.top); 
  replacmentMask.css('left', destination.left); 
  // original.children().animate({opacity: 0}, duration/10);    
  replacmentMask.fadeIn(duration, function(){
    original.replaceWith(replacment);
    replacmentMask.remove(); 
  });
}
