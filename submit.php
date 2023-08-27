<?php

$to = "info@designerashish.org";
$from = "info@designerashish.org";
//$from =$_POST[email];
//$subject=$_POST[subject];
//$redirect=$_POST[redirect];




	$message  =  "<html><body>";
	$message .= "<table><tr><td><font face=Verdana size=2><b>Dear Sir/Madam,</b></font></td></tr>";
	$message .= "<tr><td align='left'><font face=Verdana size=2>I am sending my information. Please check it and response to me ASAP.</font></td></tr>";
	$message .= "<tr><td>========================================</td></tr>";
	$message .= "<tr><td align='left'><font face=Verdana size=2>IP Address			: <b>".$_SERVER['REMOTE_ADDR']."</b></font></td></tr>";
	$message .= "<tr><td align='left'><font face=Verdana size=2>Name					: <b>$_POST[name] </b></font></td></tr>";
	$message .= "<tr><td align='left'><font face=Verdana size=2>EmailID					: <b>$_POST[email]</b></font></td></tr>";
	//$message .= "<tr><td align='left'><font face=Verdana size=2>Contact					: <b>$_POST[contact]</b></font></td></tr>";
	
	$message .= "<tr><td align='left'><font face=Verdana size=2>Message		: <b>$_POST[message]</b></font></td></tr>";

	$message .= "<tr><td>========================================</td></tr>";
	$message .= "<tr><td align='left'>Regards,<br><font face=Verdana size=2> <b>$_POST[name]</b></font></td></tr>";
	$message .="<tr><td align='left'><font face=Verdana size=2><b>Mail From : </b>".$_SERVER["HTTP_REFERER"]."</font></td></tr>";
	$message .= "</table></body></html>";
	$headers = "MIME-Version: 1.0 \r\n";
	$headers .= "Content-type: text/html; charset=windows-874 \r\n";
	$headers .= "From: $from  \r\n" .
	$headers .= "X-Priority: 1\r\n";
	$headers .= "Bcc: \r\n";
	$headers .= "cc: \r\n";
	$headers .= "X-MSMail-Priority: High\r\n";
	$headers .= "X-Mailer: Just My Server";
	echo $message;
	//echo $message;
	mail($to, "Mail From designerashish Resume", $message, $headers);
	//header("Location:".$redirect);
	echo('Success');

?>


