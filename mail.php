<?php
    $nombre = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $empresa= $_REQUEST['empresa'];
    $producto = $_REQUEST['producto'];
    $mensaje = $_REQUEST['mensaje'];
    $to = ['el.ventas@iudc.com.mx', 'cv.ventas@iudc.com.mx', 'antclientes01@iudc.com.mx'];
    $subject = 'Solicitud de información';
    $message = '<html><body>De: '.$nombre.'<br> Email: '.$email.'<br>Empresa: '.$empresa.'<br>Producto: '.$producto.'<br>Mensaje: '.$mensaje.'</body></html>';
    $headers = 'From: brmc1986@gmail.com' . "\r\n" .  
    'CC: bouchanreyes@gmail.com'. "\r\n" .
        'Reply-To: brmc1986@gmail.com' . "\r\n" .
        'Content-Type: text/html; charset=ISO-8859-1 \r\n';
        'X-Mailer: PHP/' . phpversion();

    for($i = 0; $i < 3; $i++) {
        mail($to[$i], $subject, $message, $headers);
    }
    echo "true";
?>