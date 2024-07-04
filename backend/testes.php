<?php
require __DIR__."/source/autoload.php";

$user = new \Source\User\User();

$user->setFirstName("Eduardo");
echo "<pre>";
var_dump($user);
echo "<pre>";