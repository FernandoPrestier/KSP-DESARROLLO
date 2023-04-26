<?php
class Database
{
    // private $host = "localhost";
    // private $database_name = "bd_administracion_empleados";
    // private $username = "root";
    // private $password = "123456";
    
    private $host = "localhost";
    private $database_name = "id20661955_bd_administracion_empleados";
    private $username = "id20661955_php";
    private $password = "531*tT?Vg(/KHHvz";

    public $conn;

    
    public function getConnection()
    {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
            echo "Database connected: "
        } catch (PDOException $exeption) {
            echo "Database could not be connected: " . $exeption->getMessage();
        }
        return $this->conn;
    }
}
