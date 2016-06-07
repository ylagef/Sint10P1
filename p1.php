<html lang="es">

<head>
    <script src="p1.js" type="text/javascript"></script>
    <meta charset="UTF-8">
    <title> Formulario consulta </title>
    <link rel="stylesheet" href="p1.css">
    <link href='https://fonts.googleapis.com/css?family=Poiret+One' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css'>
</head>

<body>

<!--PARA HACER MÁS FÁCIL LA SELECCIÓN DEL MÉTODO POR EL QUE SE ENVIÓ LA INFORMACIÓN, SE HACE POR LA VARIABLE "getpost"-->

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $getpost = $_POST;
} else {
    $getpost = $_GET;
}
?>

<header>Formulario musical</header>
<h1> Confirmación de datos </h1>

<!--PARA MOSTRAR CON BUENA PRESENTACIÓN LA INFO, SE CREA UNA TABLA-->

<table class="tabla">
    <tr>
        <td class="izq">Nombre y Apellidos</td>
        <td class="der"><?php echo $getpost['nombre'] . ' ' . $getpost['apellido'] ?></td>
    </tr>
    <tr>
        <td class="izq">Email</td>
        <td class="der"><?php echo $getpost['email'] ?></td>
    </tr>
    <tr>
        <td class="izq">Contraseña</td>
        <td class="der"><?php echo $getpost['psw'] ?></td>
    </tr>
    <tr>
        <td class="izq">Nacimiento</td>
        <td class="der"><?php echo $getpost['dia'] . " " . $getpost['mes'] . " " . $getpost['año'] ?></td>
    </tr>
    <tr>
        <td class="izq">Sexo</td>
        <td class="der"><?php echo $getpost['sexo'] ?></td>
    </tr>
    <tr>
        <td class="izq">Teléfono</td>
        <td class="der"><?php echo $getpost['tel'] ?></td>
    </tr>
    <tr>
        <td class="izq">Estilos musicales</td>
        <td class="der"><?php
            for ($i = 0; $i < 9; $i++) {
                echo $getpost['check'][$i] . " ";
            }

            ?></td>
    </tr>
    <tr>
        <td class="izq">Info adicional</td>
        <td class="der"><?php echo $getpost['añadir'] ?></td>
    </tr>
    <tr>
        <td class="izq">URL</td>
        <td class="der"><?php echo $getpost['PHPURL'] ?></td>
    </tr>
    <tr>
        <td class="izq">Método</td>
        <td class="der"><?php echo $_SERVER['REQUEST_METHOD'] ?></td>
    </tr>
    <tr>
        <td class="izq">Cifrado</td>
        <td class="der"><?php echo $getpost['APPMULTI'] ?></td>
    </tr>

    <tr>
        <td class="izq">Hora envío</td>
        <td class="der"><?php echo date("h:i:sa"); ?></td>
    </tr>

    <tr>
        <td class="izq">Dirección IP desde la cual está viendo la página actual el usuario</td>
        <td class="der"><?php echo $_SERVER['REMOTE_ADDR'] ?></td>
    </tr>

    <tr>
        <td class="izq">Versión del navegador</td>
        <td class="der"><?php echo $_SERVER['HTTP_USER_AGENT'] ?></td>
    </tr>

    <tr>
        <td class="izq">Puerto empleado por la máquina del usuario para comunicarse con el servidor web</td>
        <td class="der"><?php echo $_SERVER['REMOTE_PORT'] ?></td>
    </tr>

    <tr>
        <td class="izq">Ruta</td>
        <td class="der"><?php echo $_SERVER['SERVER_NAME'] ?></td>
    </tr>

    <tr>
        <td class="izq">Nombre y número de revisión del protocolo</td>
        <td class="der"><?php echo $_SERVER['SERVER_PROTOCOL'] ?></td>
    </tr>


</table>


<footer>
    <p><span>- Diseñado por Yeray Lage -</span></p>
    <p><span>2015</span></p>
</footer>

</body>

</html>