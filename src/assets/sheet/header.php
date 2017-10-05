<?php 
// remote
$servername = "localhost";
$username = "raykre49_workout";
$password = "overrateddressmonkeyhammer";
$dbname = "raykre49_workout";

// home
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$conn2 = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?>

<html lang="en"><head>
    <title>FluxOut - The Random Workout Generator</title>
    <meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Things">
    <meta name="author" content="Probably God">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap -->
    <link rel="stylesheet" media="screen" href="css/fluxout.css">
    
   <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>   
   <script src='https://code.responsivevoice.org/responsivevoice.js'></script>
    
  </head>
  <body>
  <!-- Header start -->
  	<header>
  	<!-- header-main start -->            
    <div class="row header-main">
        
              <div class="centered">
                  <a href="index.php">Workout Randomizer</a>
              </div>
              
             
     <!-- header-main end -->                   
   </header>
