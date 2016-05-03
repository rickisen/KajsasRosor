<?php
class URL{
    private function __construct(){} 
    private function __clone(){} 

    // Function that extracts the first
    // GET-"declaration" in the URL
    // and returns an array of whatever was specified 
    // as the key name sepparated by slashes.
    // So if we had an URL like this:
    // "example.com/?/foo/bar"
    // it would return:
    // [ 0 => 'foo', 1 => 'bar' ]
    public static function getUrlParts(){
        $get_params = array_keys($_GET);
        if ( count($get_params) == 0 ){
            return null; 
        }

        $url = $get_params[0];

        $url_parts = explode("/", $url);
        foreach($url_parts as $part){
            $part = stripslashes($part);
            if( $part ){
                $array[] = $part;
            }
        }

        $url_parts = $array;
        return $url_parts;
    }

}
