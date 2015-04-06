

<?php


   $request_body = file_get_contents('php://input');



     $filename = 'current.json'; 
     $file = fopen($filename,'w+');
     fwrite($file, $request_body);
     fclose($file);
   
?>

	
	
