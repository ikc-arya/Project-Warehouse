<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>

<meta charset="utf-8">
<link rel = "stylesheet" href="nwh.css">
<title>All branches Details</title>
</head>
<body >


<a href="Dashboard.html"><button style="
            cursor: pointer;
            border-style: inherit;
            border-radius: 10px;
            background-color: transparent;
            height: 50px;
            width: 50px;
            position: fixed;
            bottom: 20px;
            right: 20px;">
            <img src="home_button.svg" alt="home button" width="40px" ></button></a> 
    
          <a href="cartpage.html"><button style="
            cursor: pointer;
            border-style: inherit;
            border-radius: 10px;
            background-color: transparent;
            height: 50px;
            width: 50px;
            position: fixed;
            bottom: 20px;
            right: 80px;
            padding: 2px;">
            <img src="cart_button.svg" alt="cart button" width="50px" ></button></a>
<nav class="navbar">
<class = "logo">
<img src="Logo.svg" height="240px" width="200px">
</class>
<ul class = "nav-link">
<li class="nav-items"><a href="#">Home</a></li>
<li class="nav-items"><a href="#">Branch</a></li>
<li class="nav-items"><a href="#">Order History </a></li>
<li class="nav-items"><a href="./report.html">Invoice</a></li>
</ul>
</nav>
<script>
  function myFunction() {
    window.location.href="example.html";
  }
 </script>
<center><input type="submit"  value="Add" onClick="myFunction()" /></center>

<?php
$db_server = "localhost"; //location of db server
$db_user = "root"; //username to access db server
$db_name = "wh";
//Step 1: Connect to the database server
$conn = mysqli_connect($db_server,$db_user)
or die("Error connecting to the database server");
//Step 2: Select the database
$db = mysqli_select_db($conn,$db_name)
or die("Error selecting the database $db_name");
//Step 3: Read the table/execute the query/perform the database operation
$db_query = "SELECT * FROM wh";
$result = mysqli_query($conn,$db_query)
or die("Error reading the table");
//Step 4: Display the table/process the result retrieved in step 3

echo '<table class="center">';
echo '<tr>';
echo '<th>Warehouse Name</th>';
echo '<th>City</th>';
echo '<th>Country</th>';
echo '<th>Email</th>';
echo '<th>State</th>';
echo '<th>Zip-Code</th>';
echo '<th>Phone</th>';
echo '<th>Address</th>';
echo '<th>Manager Name</th>';
echo '</tr>';
while($row = mysqli_fetch_array($result))
{
echo '<tr>';
echo '<td>'.$row['wname'].'</td>';
echo '<td>'.$row['ciname'].'</td>';
echo '<td>'.$row['coname'].'</td>';
echo '<td>'.$row['email'].'</td>';
echo '<td>'.$row['sname'].'</td>';
echo '<td>'.$row['zc'].'</td>';
echo '<td>'.$row['ph'].'</td>';
echo '<td>'.$row['address'].'</td>';
echo '<td>'.$row['mname'].'</td>';

echo '</tr>';

}
echo '</table>';

//Step 5: Close the connection with the database server
mysqli_close($conn);
?>
</body>
</html>