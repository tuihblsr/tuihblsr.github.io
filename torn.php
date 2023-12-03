<?php
    $jsonurl = "http://api.torn.com/user/3062354?selections=networth&key=kEfEFncWpA4zptaj";
    $json = file_get_contents($jsonurl); //gets output of API
        
    $decodedString = json_decode($json, true); //parses API JSON output
    $nwtotal = $decodedString["networth"]; //Pulls networth out of JSON array
    echo "Stock Market: ".$nwtotal["stockmarket"]."</br>"; // Spits out networth from stocks
    echo "Networth Total: ".$nwtotal["total"]."</br>"; // Spits out total networth
?>
