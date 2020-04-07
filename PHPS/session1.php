<?php
    session_start();
    $_SESSION['a']="alfred";
    $_SESSION['b']="bob";

    foreach($_SESSION as $s => $b) {
        unset($_SESSION[$s]);
    }
    echo $_SESSION['a'];
    echo $_SESSION['b'];

?>