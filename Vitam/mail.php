<?php

$recepient = "gashkov321@gmail.com";
$sitename = "www.socorrista.cat";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["messages"]);
$message = "Name: $name \nEmail: $email \nMessage: $text";

$pagetitle = "New mail from Vitam \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>