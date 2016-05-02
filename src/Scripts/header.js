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

    $('.hamburger').on('click', handleHamburger ); 
}); 

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

function handleHamburger(event) {
   toggleHamburger(); 
}

function toggleHamburger(direction = 'auto') {
        var nav = $('.wrapper > header > nav')

        // depending on if the header is currently fixed or static, 
        // we might have to toggle/animate the height of the headerSpacer as well.
        if ( $('.wrapper > header').css('position') == 'fixed' ){
            var navHeight = getHeightOfHiddenElem(nav); 
            // toggle/animate the nav, and the height of the header spacer
            if (nav.css('display') == 'none' ){
                $('#headerSpacer').animate({ height : '+=' + navHeight}, 400); 
                nav.slideDown(); 
            } else {
                $('#headerSpacer').animate({ height : '-=' + navHeight}, 400); 
                nav.slideUp(); 
            }
        } else {
            nav.slideToggle(); 
        }
}

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
