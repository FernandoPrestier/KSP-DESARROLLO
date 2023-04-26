<?php
header("Acess-Control-Allow-Origin: *");
header("Content-Type: Application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../class/empleado.php';

$database = new Database();
$db = $database->getConnection();

$item = new Empleado($db);

$item->idEmpleado = isset($_GET['idEmpleado']) ? $_GET['idEmpleado'] : die();

$item->getSingleObra();

if ($item->nombre != null) {
    // create array
    $obra_arr = [
        'idEmpleado'      => $item->idEmpleado,
        'foto'   => $item->foto,
        'nombre' => $item->nombre,
        'puesto' => $item->puesto,
        'salario' => $item->salario,
        'estatus' => $item->estatus,
        'fechaContratacion' => $item->fechaContratacion
    ];

    http_response_code(200);
    echo json_encode($obra_arr);
} else {
    http_response_code(404);
    echo json_encode("Record not found.");
}
