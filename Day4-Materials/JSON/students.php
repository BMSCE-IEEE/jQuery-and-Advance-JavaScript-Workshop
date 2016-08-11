<?php
$dbserver='mysql.hostinger.in';
$dbuser='u319795320_uma';
$dbpassword='umadevi';
$database='u319795320_class';

/* Connect to database */
$connection=mysqli_connect($dbserver,$dbuser,$dbpassword,$database);
if(! $connection ) {
  die('Could not connect: ' . mysqli_error());
}
/*echo 'Connected successfully';*/
$sql="SELECT * FROM  students";
$result=mysqli_query($connection, $sql);
if(! $result )
{
  die('Could not retrieve data: ' . mysqli_error($connection));
}
/*echo "Data Retrieved Successfully";*/
$array_students=array();
while($data=mysqli_fetch_assoc($result)){
$array_students[]=$data;
/*echo $data['usn'];*/
}
echo json_encode($array_students);

?>
