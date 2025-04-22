<?php
// filepath: movie-api/index.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $stmt = $pdo->query("SELECT * FROM movies");
        $movies = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($movies);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["error" => "Erro ao buscar filmes: " . $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido."]);
}