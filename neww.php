<html>
<body>
<?php $con=mysqli_connect("localhost","root","","warehouse") or die(mysqli_error($con));
if(!isset($_SESSION))
{
session_start();
}
$w_n=$_POST['w_n'];
$city=$_POST['city'];
$country=$_POST['country'];
$state=$_POST['state'];
$zc=$_POST['zc'];
$ph=$POST['ph'];
$email=$_POST['email'];
$emailValid=FALSE;
$email_pattern='/^([a-zA-Z0-9.$%]{3,})@([a-zA-Z0-9]{3,})([.][a-z]{2,}|[.][a-z]{2,}[.][a-z]{2,})$/';
$insert_query="insert into warehouse(w_n,city,country,state,zc,ph,email) values('$w_n','$city','$country','$state','$zc','$ph','$email')";
if(preg_match($email_pattern,$email)){
$emailValid=true;
}else{?>
<center><h2>Invalid email</h2></center>
<?php
}
if($emailValid){
	$insert_submit_query=mysqli_query($con,$insert_query) or die(mysqli_error($con));
     $_SESSION ['email']=$email;

?><script>
alert('Successfully Inserted details');
</script>
<?php
}
?>
</body>
</html>