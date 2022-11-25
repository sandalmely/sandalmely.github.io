<?php
$servername = "sql300.epizy.com";
$username = "epiz_33071198";
$password = "pUwLp18QEWTpmBI";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>