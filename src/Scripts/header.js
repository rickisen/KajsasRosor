"use strict"

var previousWasMobile = false;
var headerSpacer = {};
var header       = {};
var nav          = {};

$(document).ready(function(){
    headerSpacer = $('#headerSpacer');
    header       = $('.wrapper > header');
    nav          = $('.wrapper > header > nav');

    header.css('position', 'fixed'); 
    matchSpacerWithHeader();

    $(window).resize(handleResize);

    $('.hamburger').on('click', toggleHamburger ); 
}); 

function matchSpacerWithHeader() {
    headerSpacer.css('height', header.height());
}

function handleResize(event) {
    if (!previousWasMobile && areWeMobile()){
        nav.css('display','none'); 
        matchSpacerWithHeader();
    } else if ( previousWasMobile && !areWeMobile() ){
        nav.css('display','block'); 
        matchSpacerWithHeader();
    }

    previousWasMobile = areWeMobile();
 }

function toggleHamburger(event) {
    var navHeight = getHeightOfHiddenElem(nav); 

    if ( nav.css('display') == 'none' ){
        nav.slideDown(); 
        headerSpacer.animate({ height : '+=' + navHeight}, 400); 
    } else {
        nav.slideUp(); 
        headerSpacer.animate({ height : '-=' + navHeight}, 400); 
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
