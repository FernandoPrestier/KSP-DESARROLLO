<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../class/empleado.php';

$database = new Database();
$db       = $database->getConnection();

$items = new Empleado($db);

$stmt      = $items->getObras();
$itemCount = $stmt->rowCount();

if ($itemCount > 0) {
    $responseArr = [];
    $responseArr['body'] = [];
    $responseArr['items'] = $itemCount;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $e = [
            'idEmpleado'      => $idEmpleado,
            'foto'   => $foto,
            'nombre' => $nombre,
            'puesto' => $puesto,
            'salario' => $salario,
            'estatus' => $estatus,
            'fechaContratacion' => $fechaContratacion
        ];
        array_push($responseArr['body'], $e);
    }

    echo json_encode($responseArr);
} else {
    http_response_code(404);
    echo json_encode(['message' => 'No records found.']);
}
