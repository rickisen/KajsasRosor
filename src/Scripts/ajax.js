"use strict"; 

$(document).ready(function(){
    $('a').click(loadWithAjax); 
}); 

function loadWithAjax(event) {
    event.preventDefault();
    var link = $(event.currentTarget).attr('href');

    // add the key to make the server reply with a minified answer
    link += '/mini'; 

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        handleNewMain(this.responseXML);
    }
    xhr.open("GET", link);
    xhr.responseType = "document";
    xhr.send();

    return false; 
}

function handleNewMain(dom) {
    var newMain = dom.getElementsByTagName('main')[0];
    var oldMain = document.getElementsByTagName('main')[0]; 

    oldMain.innerHTML = newMain.innerHTML ;
}
