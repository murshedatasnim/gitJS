<?php
    if(!isset($_SESSION)){
        session_start();
    }

    if(!isset($_SESSION['Count'])){
        $_SESSION['Count'] = 0;
    }

    echo "You have refreshed : " . $_SESSION['Count'] . " times";

    $_SESSION['Count']++;
?>