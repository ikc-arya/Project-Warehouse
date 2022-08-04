<html>
<body>
<?php 
if(isset($_POST['submit']))
{
$con=mysqli_connect("localhost","root","","user") or die(mysqli_error($con));//the empty string is the password
if($con){}
else
die("ERROR: could not connect.".myssqli_connect_error());
$name=$_POST['name'];

$Cname=$_POST['Cname'];
$Phone=$_POST['Phone'];
$Address=$_POST['Address'];
$eid=$_POST['eid'];
$emailValid=false;
$password1=$_POST['password1'];
$email_pattern='/^([a-zA-Z0-9.$%]{3,})@([a-zA-Z0-9]{3,})([.][a-z]{2,}|[.][a-z]{2,}[.][a-z]{2,})$/';
$insert_query="insert into user values('$name','$Cname','$Phone','$Address','$eid','$password1')";
if(preg_match($email_pattern,$eid)){
$emailValid=true;
}else{?>
<center><h2>Invalid email</h2></center>
<?php
}
if($emailValid){
$insert_submit_query=mysqli_query($con,$insert_query) or die(mysqli_error($con));
$_SESSION ['eid']=$eid;
header("Location:login.html");

}
}
?>
</body>
</html>