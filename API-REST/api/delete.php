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
    }
}


if ($item->deletePost()) {
    echo json_encode("Record deleted.");
} else {
    echo json_encode("Data could not be deleted.");
}