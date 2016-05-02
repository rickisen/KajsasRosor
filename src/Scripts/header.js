"use strict"
var previousSize = 0;
var previousWasMobile = false;

$(document).ready(function(){
    headerFix();

    $(window).resize(handleResize);

    $('.hamburger').on('click', toggleHamburger ); 
}); 

function headerFix() {
    var headerSpacer = $('#headerSpacer'); 
    var header = $('.wrapper > header'); 

    header.css('position', 'fixed'); 
    headerSpacer.css('height', header.height()); 
}

function handleResize(event) {
    var nav = $('.wrapper > header > nav'); 

    if (!previousWasMobile && areWeMobile()){
        nav.css('display','none'); 
    } else if ( previousWasMobile && !areWeMobile() ){
        nav.css('display','block'); 
        headerFix();
    }

    previousWasMobile = areWeMobile();
 }

function toggleHamburger(event) {
    var nav = $('.wrapper > header > nav'); 

    var navHeight = getHeightOfHiddenElem(nav); 
    if ( nav.css('display') == 'none' ){
        nav.slideDown(); 
        $('#headerSpacer').animate({ height : '+=' + navHeight}, 400); 
    } else {
        nav.slideUp(); 
        $('#headerSpacer').animate({ height : '-=' + navHeight}, 400); 
    }
}

function areWeMobile() {
    if ( $('.wrapper > header > nav > ul > li ').css('display') == 'inline-block'){
        return false;
    } else {
        return true;
    }
}

function getHeightOfHiddenElem(hiddenElement) {
    var prevCss = hiddenElement.attr('style'); 

    hiddenElement.css({
        position:   'absolute', 
        visibility: 'hidden',
        display:    'block'
    });

    var height = hiddenElement.height();
    hiddenElement.attr("style", prevCss ? prevCss : "");

    return height;
}

