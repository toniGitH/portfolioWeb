<?php
$destinatario = 'antonio@inexpertosweb.com';

$nombre = $_POST['nom'];
$email = $_POST['correo'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];
$privacidad = $_POST['accept'];


    $cuerpo  = "<span style='color:#781D22'><b>Nombre</b></span>: " . $nombre ."<p>"; 
    $cuerpo .= "<span style='color:#781D22'><b>Correo electrónico</b></span>: " . $email . "<p>";
    $cuerpo .= "<span style='color:#781D22'><b>Asunto</b></span>: " . $asunto . "<p>";
    $cuerpo .= "<span style='color:#781D22'><b>Mensaje</b></span>: " . $mensaje . "<p>";
    $cuerpo .= "<span style='color:#781D22'><b>Privacidad</b></span>: " . $privacidad . "<p>";

	
    $headers = "MIME-Version: 1.0\r\n"; 
    $headers .= "Content-type: text/html; charset=utf-8\r\n"; 
    $headers .= "From:".$email."\r\n"; 
    

    mail($destinatario, '=?UTF-8?B?'.base64_encode($asunto).'?=',$cuerpo, $headers);
    mail($destinatario,$nombre,$email,$telefono,$asunto,$mensaje);
    include 'confirma.html';
?>