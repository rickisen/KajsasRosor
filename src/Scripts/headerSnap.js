"use strict"
var previousSize = 0;
$(document).ready(function(){
    if ( areWeMobile() ){
        snapHeader();
    }

    $(window).resize(function() {
        let newSize = $(window).width(); 

        if ( newSize < previousSize && areWeMobile() ){
            snapHeader();
            $('.wrapper > header > nav').css('display','none'); 
        } else if (newSize > previousSize && !areWeMobile() ){
            $('.wrapper > header > nav').css('display','block'); 
        }

        previousSize = newSize; 
    });
}); 

function snapHeader() {
    var headerSpacer = $('#headerSpacer'); 
    var header = $('.wrapper > header'); 

    $(window).scroll(function() {
        if( $(window).scrollTop() < 1 ) {
            // make sure spacer is zero
            headerSpacer.css('height','0');
        
            // make header static
            header.css('position', 'static'); 
        } else {
            // make sure spacer is height of the header, 
            // which might include a toggled hamburger menu
            headerSpacer.css('height', $('.wrapper > header').height());

            // make header fixed
            header.css('position', 'fixed'); 
        }
    }); 
}

function areWeMobile() {
    if ( $('.wrapper > header > nav > ul > li ').css('display') == 'inline-block'){
        return false;
    } else {
        return true;
    }
}
