<?php
    if(isset($_POST['submitButton'])){
        echo "Your name is: " . $_POST['firstname'];
    }
    if (isset($_GET['submitButton'])) {
        echo "Your name is: " . $_GET['firstname'];
    }
?>