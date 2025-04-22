<?php
// filepath: movie-api/db.php

$host = 'localhost';
$dbname = 'movie_db';
$username = 'root'; // Substitua pelo seu usuário do MySQL
$password = ''; // Substitua pela sua senha do MySQL

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro ao conectar ao banco de dados: " . $e->getMessage());
}