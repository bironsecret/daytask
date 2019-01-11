<?php
$servername = "sql211.epizy.com";
$username = "epiz_23276517";
$password = "1VPu77jR91kK";
$dbname = "epiz_23276517_userdata";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
var cookies = $_COOKIE;

$sql = "INSERT INTO userdata (username, password, email, date)
VALUES ('John', 'Password123', 'john@example.com', 11-01-2019)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
