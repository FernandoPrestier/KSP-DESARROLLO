<?php
class Empleado
{
    // conexión
    private $conn;

    // tabla
    private $db_table = "empleado";

    // columnas
    public $idEmpleado;
    public $foto;
    public $nombre;
    public $puesto;
    public $salario;
    public $estatus;
    public $fechaContratacion;

    // conexión a la base de datos
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // GET ALL
    public function getObras()
    {
        $sqlQuery = "SELECT * FROM " . $this->db_table . "";
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }

    // READ single
    public function getSingleObra()
    {
        $sqlQuery = "SELECT * FROM " . $this->db_table . "
            WHERE
                idEmpleado = ?
            LIMIT 0,1";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam(1, $this->idEmpleado);
        $stmt->execute();
        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->idEmpleado   = $dataRow['idEmpleado'];
        $this->foto = $dataRow['foto'];
        $this->nombre = $dataRow['nombre'];
        $this->puesto = $dataRow['puesto'];
        $this->salario = $dataRow['salario'];
        $this->estatus = $dataRow['estatus'];
        $this->fechaContratacion = $dataRow['fechaContratacion'];
    }

    // CREATE
    public function createObra()
    {
        $sqlQuery = "INSERT INTO ". $this->db_table. "
            SET
                foto   = :foto,
                nombre = :nombre,
                puesto = :puesto,
                salario = :salario,
                estatus = :estatus,
                fechaContratacion = :fechaContratacion
            ";

        $stmt = $this->conn->prepare($sqlQuery);

        // sanitize
        $this->foto   = htmlspecialchars(strip_tags($this->foto));
        $this->nombre = htmlspecialchars(strip_tags($this->nombre));
        $this->puesto = htmlspecialchars(strip_tags($this->puesto));
        $this->salario = htmlspecialchars(strip_tags($this->salario));
        $this->estatus = htmlspecialchars(strip_tags($this->estatus));
        $this->fechaContratacion = htmlspecialchars(strip_tags($this->fechaContratacion));

        // bind data
        $stmt->bindParam(":foto", $this->foto);
        $stmt->bindParam(":nombre", $this->nombre);
        $stmt->bindParam(":puesto", $this->puesto);
        $stmt->bindParam(":salario", $this->salario);
        $stmt->bindParam(":estatus", $this->estatus);
        $stmt->bindParam(":fechaContratacion", $this->fechaContratacion);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    

    // UPDATE
    public function updatePost()
    {
        $sqlQuery = "UPDATE ". $this->db_table . "
            SET
                foto   = :foto,
                nombre = :nombre,
                puesto = :puesto,
                salario = :salario,
                estatus = :estatus,
                fechaContratacion = :fechaContratacion
            WHERE
                idEmpleado = :idEmpleado";

        $stmt = $this->conn->prepare($sqlQuery);

        // sanitize
        $this->idEmpleado = htmlspecialchars(strip_tags($this->idEmpleado));
        $this->foto   = htmlspecialchars(strip_tags($this->foto));
        $this->nombre = htmlspecialchars(strip_tags($this->nombre));
        $this->puesto = htmlspecialchars(strip_tags($this->puesto));
        $this->salario = htmlspecialchars(strip_tags($this->salario));
        $this->estatus = htmlspecialchars(strip_tags($this->estatus));
        $this->fechaContratacion = htmlspecialchars(strip_tags($this->fechaContratacion));
        

        // bind data
        $stmt->bindParam(":idEmpleado", $this->idEmpleado);
        $stmt->bindParam(":foto", $this->foto);
        $stmt->bindParam(":nombre", $this->nombre);
        $stmt->bindParam(":puesto", $this->puesto);
        $stmt->bindParam(":salario", $this->salario);
        $stmt->bindParam(":estatus", $this->estatus);
        $stmt->bindParam(":fechaContratacion", $this->fechaContratacion);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    // DELETE
    function deletePost()
    {
        $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE idEmpleado = ?";
        $stmt = $this->conn->prepare($sqlQuery);
        $this->idEmpleado = htmlspecialchars(strip_tags($this->idEmpleado));
        $stmt->bindParam(1, $this->idEmpleado);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
}
