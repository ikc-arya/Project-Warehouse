<html>
<body>
<?php 
if(isset($_POST['submit']))
{
$con=mysqli_connect("localhost","root","","wh") or die(mysqli_error($con));//the empty string is the password
if($con){}
else
die("ERROR: could not connect.".myssqli_connect_error());
$wname=$_POST['wname'];
$ciname=$_POST['ciname'];
$coname=$_POST['coname'];
$email=$_POST['email'];
$emailValid=false;
$sname=$_POST['sname'];
$zc=$_POST['zc'];
$ph=$_POST['ph'];
$address=$_POST['address'];
$mname=$_POST['mname'];
$email_pattern='/^([a-zA-Z0-9.$%]{3,})@([a-zA-Z0-9]{3,})([.][a-z]{2,}|[.][a-z]{2,}[.][a-z]{2,})$/';
$insert_query="insert into wh values('$wname','$ciname','$coname','$email','$sname','$zc','$ph','$address','$mname')";
if(preg_match($email_pattern,$email)){
$emailValid=true;
}else{?>
<center><h2>Invalid email</h2></center>
<?php
}
if($emailValid){
$insert_submit_query=mysqli_query($con,$insert_query) or die(mysqli_error($con));
$_SESSION ['email']=$email;

header("Location:nwh.php");

}
}
?>
</body>
</html>