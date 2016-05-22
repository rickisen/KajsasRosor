<?php
spl_autoload_register(function ($class_name) {
    include 'Classes/'.$class_name.'.class.php';
});

$url  = URL::getUrlParts();
switch (count($url)) {
case 1: 
    $site = array_shift($url);
    break;
case 2: 
    $site = array_shift($url);
    $mode = array_shift($url);
    break;
}

if ( isset($site) ){
    if ( isset($mode) && $mode == 'mini' ) {
        echo '<!DOCTYPE HTML> <html><head><meta charset="utf-8"></head><body>'; 
        include 'Templates/'.$site.'.php'; 
        echo '</body></html>'; 
    } else {
        include 'Templates/header.php'; 
        include 'Templates/'.$site.'.php';
        include 'Templates/footer.php'; 
    }
} else {
    include 'Templates/header.php'; 
    include 'Templates/main.php';
    include 'Templates/footer.php'; 
}

