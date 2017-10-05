<?php require_once 'header.php'; 

// Get a
$sql = "SELECT * FROM `exercises` WHERE `recipe` =  '" . $_GET['a'] . "'";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$a = $row['gif'];
$adef = $row['description'];

// b
$sql = "SELECT *  FROM `exercises` WHERE `recipe` =  '" . $_GET['b'] . "'";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$b = $row['gif'];
$bdef = $row['description'];

// c
$sql = "SELECT *  FROM `exercises` WHERE `recipe` =  '" . $_GET['c'] . "'";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$c = $row['gif'];
$cdef = $row['description'];

// d
$sql = "SELECT *  FROM `exercises` WHERE `recipe` =  '" . $_GET['d'] . "'";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$d = $row['gif'];
$ddef = $row['description'];

// e
$sql = "SELECT *  FROM `exercises` WHERE `recipe` =  '" . $_GET['e'] . "'";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$e = $row['gif'];
$edef = $row['description'];

// f
$sql = "SELECT *  FROM `exercises` WHERE `recipe` =  '" . $_GET['f'] . "'";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$f = $row['gif'];
$fdef = $row['description'];

// g
$sql = "SELECT *  FROM `exercises` WHERE `recipe` =  '" . $_GET['g'] . "'";
$result = mysqli_query($conn, $sql) OR DIE('Query failed');
$row = mysqli_fetch_assoc($result) OR DIE('Couldn\'t fetch data');
$g = $row['gif'];
$gdef = $row['description'];


echo '<script type="text/javascript">' . 
        'var v = ["/gifs/'.$a.'.webm", "/gifs/'.$b.'.webm", "/gifs/'.$c.'.webm","/gifs/'.$d.'.webm","/gifs/'.$e.'.webm","/gifs/'.$f.'.webm","/gifs/'.$g.'.webm"];' .
        'var e = ["'.$adef.'", "'.$bdef.'","'.$cdef.'","'.$ddef.'","'.$edef.'","'.$fdef.'","'.$gdef.'"];' .
        '</script>';
?>

<script type="text/javascript">
    var num = 0;
    //var v = ["/gifs/BlindSlightGalapagoshawk.webm", "/gifs/LeadingEnchantedErin.webm", "/gifs/GoldenAngryAkitainu.webm"];
    //var e = ["Exercise 1", "Exercise 2", "Exercise 3"];
    var pause = 0;
    
    function vidplay() {
       var video = document.getElementById("Video1");
       var button = document.getElementById("play");
       if (button.textContent == "Play") {
          //video.play();
          button.textContent = "Pause";
          pause = 0;
       } else {
          //video.pause();
          button.textContent = "Play";
          pause = 1;
       }
       
    }
            
    function changeVid(){
        // set data elements
        var video = document.getElementById("Video1");
        console.log(video);
        video.setAttribute("src", v[num]);
        console.log(v[num]);
        
        // load and play next video
        video.load();
        video.crossOrigin = 'anonymous';
        exer.textContent = e[num];
        console.log(e[num]);
        video.play();
        
        // get exercise
        responsiveVoice.speak(e[num], "US English Female");
    }
    
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            if (pause == 1) { return; }
            
            //minutes = parseInt(timer / 60, 10)
            //seconds = parseInt(timer % 60, 10);
			seconds = parseInt(timer, 10);
			workout = 60;

            //minutes = minutes < 10 ? "0" + minutes : minutes;
            //seconds = seconds < 10 ? "0" + seconds : seconds;
            
            if (timer > workout) { display.textContent = "You have " + (seconds - workout) + " seconds to get ready!"; }
            if (timer == workout) { 
                display.textContent = "Start!"; 
                responsiveVoice.speak("Start!"); 
            }
            if (timer < workout) { display.textContent = "You have " + seconds + " remaining!"; }
			if (timer == 30) { 
				document.getElementById("sound_element").innerHTML= 
				"<embed src='196106__aiwha__ding.wav' hidden=true autostart=true loop=false>";
			}
            if (timer == 10) { responsiveVoice.speak("You have 10 seconds left!", "US English Female"); }
            if (timer < 10) { display.textContent = "Keep going! " + seconds + " remaining!"; }

            if (--timer < 0) {
                timer = duration;
                
                if(num < 6)
                {
                    responsiveVoice.speak("Stop!", "US English Female");
                    display.textContent = "Loading next video...";
                    num++
                    console.log("number = " + num);
                    changeVid();
                } else
                {
                    window.location.href = "stop.php";
                }
            }
        }, 1000);
        
    }
    
    window.onload = function () {        
        var countdown = 75;
        display = document.querySelector('#time');
        exer = document.querySelector("#exercise");
        exer.textContent = e[0];
        changeVid();
        startTimer(countdown, display);  
        responsiveVoice.speak("Get ready!", "US English Female");
    }
   
</script>
<html>
<body>        
    <div><h2><span id="exercise">Loading...</span></h2></div>
    <video id="Video1" width="75%" height="75%" src="" crossOrigin = "Anonymous" type="video/webm" autoplay loop="loop"/>
</video>

<div><span id="time"></span></div>
<div id="buttonbar">
    <button id="play" onclick="vidplay()">Pause</button>
</div>   
    <div id="sound_element"></div>
</body>
</html>