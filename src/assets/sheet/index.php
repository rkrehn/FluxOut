<!DOCTYPE html>
<?php require_once 'header.php'; 

// Get count of biceps arms
$sql = "SELECT * FROM `exercises` WHERE `bodypart` =  1 AND `section` = 1 ORDER BY RAND() LIMIT 1";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$a = $row['recipe'];

// triceps / deltoids
$sql = "SELECT * FROM `exercises` WHERE `bodypart` =  1 AND (`section` = 2 OR `section` = 3) ORDER BY RAND() LIMIT 1";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$b = $row['recipe'];

// abs (rectus abdominis)
$sql = "SELECT * FROM `exercises` WHERE `bodypart` =  2 AND `section` = 1 ORDER BY RAND() LIMIT 1";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$c = $row['recipe'];

// abs obliques
$sql = "SELECT * FROM `exercises` WHERE `bodypart` =  2 AND `section` = 2 ORDER BY RAND() LIMIT 1";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$d = $row['recipe'];

// back
$sql = "SELECT * FROM `exercises` WHERE `bodypart` =  3 AND `section` = 1 ORDER BY RAND() LIMIT 1";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$e = $row['recipe'];

// legs - quads / hams / glutes
$sql = "SELECT * FROM `exercises` WHERE `bodypart` =  4 AND (`section` = 1 OR `section` = 2 OR `section` = 4) ORDER BY RAND() LIMIT 1";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$f = $row['recipe'];

// legs - calves / abductors
$sql = "SELECT * FROM `exercises` WHERE `bodypart` =  4 AND (`section` = 3 OR `section` = 5) ORDER BY RAND() LIMIT 1";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$f = $row['recipe'];

// random
$sql = "SELECT * FROM `exercises` ORDER BY RAND() LIMIT 1";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$g = $row['recipe'];

$values=array($a,$b,$c,$d,$e,$f,$g);
shuffle($values);
?>



<html lang="en"><head>

   <!-- Header end -->
   <!-- Main start -->
    <form action="start.php" method="get">
        <?php 
        echo '<input type="hidden" name="a" value="' . $values[0] . '">'; 
        echo '<input type="hidden" name="b" value="' . $values[1] . '">'; 
        echo '<input type="hidden" name="c" value="' . $values[2] . '">'; 
        echo '<input type="hidden" name="d" value="' . $values[3] . '">'; 
        echo '<input type="hidden" name="e" value="' . $values[4] . '">'; 
        echo '<input type="hidden" name="f" value="' . $values[5] . '">'; 
        echo '<input type="hidden" name="g" value="' . $values[6] . '">'; 
        ?>
        
        <div class="round-button"><div class="round-button-circle"><a onclick="document.forms[0].submit()" type="submit" class="round-button">Start!</a></div></div>
   
   </form>
  </body>
</html>