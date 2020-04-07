<?php
//echo "hello world";
$welcome = "hello, guests!";
echo $welcome . "hello world"; //string conjugate
echo "<br>";
$string = "complete web dev";
$replace = str_replace("complete", "the complete", $string);
echo $replace;
echo "<br>";
echo substr($replace, 5, 9);
echo "<br>";
echo ucwords($string);
echo "<br>";
echo strtoupper("hello world");
echo "<br>";
$element = htmlentities("<font>");
echo "element is &rarr; " . $element;
$arr = array("bob", "tom", "tim");
echo "<br>";
echo $arr[0];
echo "<br>";
//associative array
$cars = array("kalob" => "audi", "RichMan" => "bently");
echo "kalob likes " . $cars["kalob"];
echo "<br>";
$str = "the quick brown fox jumps over the lazy dog.";
$exploded = explode(" ", $str, 4);
foreach ($exploded as $e) {
    echo $e . "<br>";
}
$names = implode(", ", $arr);
echo "three names are " . $names . "<br>";
$arr1 = array("Apple", "Banana", "Plum", "Pear");
foreach ($arr1 as $key => $value) {
    echo "Key: " . $key . " &rarr; " . $value . " <br>";
}
$Name = "keya";
echo "My name is $Name <br>";
echo 'My name is $Name <br>';
echo " i am taking $course <br>";
include "include.php"; //include file
echo "<button>button</button> i am taking $course <br>";
//require "kk.php";
echo "hello <br>";

$juice = "Apple";
unset($juice);

if (isset($juice)) {
    echo $juice >  "is may favorite";
} else {
    echo "variable was destroyed";
}
echo "<br>";
//constant
define("__Name__", "keya");

echo __Name__;
echo "<br>";
if (defined("__Name__")) {
    echo " is defined";
}
// forms
//get puts info to url but post does not
echo $_GET['string'];
echo "<br>";
$var = "Asjshed kjseh ij d";
$encoded = urlencode($var);
echo $encoded;
echo nl2br("this is \nnew line\n");
echo urldecode($encoded);
echo "<br>";
$now = time();
echo date("F j, Y, g:i a", $now );

?>
<form method="post" action="test.php">
    Firstname: <input type="text" name="firstname" /> <br>
    <input type="submit" name="submitButton" />
</form>

<form method="get" action="test.php">
    Firstname: <input type="text" name="firstname" /> <br>
    <input type="submit" name="submitButton" />
</form>

<form method="post" action="newLinePost.php">
<textarea name="message" placeholder="write a meddage in here"></textarea>
<button type="submit">submit</button>
</form>