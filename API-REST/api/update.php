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

$data = json_decode(file_get_contents("php://input"));

foreach ($data as $key => $value) {
    switch ($key) {
        case 'idEmpleado':
            $item->idEmpleado = $value;
            break;
        case 'foto':
            $item->foto = $value;
            break;
        case 'nombre':
            $item->nombre = $value;
            break;
        case 'puesto':
            $item->puesto = $value;
            break;
        case 'salario':
            $item->salario = $value;
            break;
        case 'estatus':
            $item->estatus = $value;
            break;
        case 'fechaContratacion':
            $item->fechaContratacion = $value;
            break;
    }
}

if ($item->updatePost()) {
    echo json_encode("Record data updated.");
} else {
    echo json_encode("Data could not be updated");
}