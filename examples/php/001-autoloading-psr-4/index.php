<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

include 'autoloading.php';

$obj = new Foo\Bar\Example();

echo $obj->helloWorld();