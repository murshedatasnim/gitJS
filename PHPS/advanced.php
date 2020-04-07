<?php
    if(!isset($_SESSION)) {
        session_start();
    }

    $pass = urlencode($_GET['p']);
    if($pass=="TCWD") {
        $_SESSION['Pass_Correct'] = 1;
    }
    if(isset($_SESSION['Pass_Correct'])){
        echo "You entered the correct password at least once";
    }else{
        echo "You have not entered the correct password. Try again";
        
    }
?>