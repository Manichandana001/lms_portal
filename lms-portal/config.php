<?php
$servername = "your-rds-endpoint.amazonaws.com";
$username = "your-db-username";
$password = "your-db-password";
$dbname = "your-db-name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully!";
?>
