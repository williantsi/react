create database IF NOT EXISTS api_simples;
use api_simples;

-- Tabela de pessoas
CREATE TABLE pessoas (
  id int AUTO_INCREMENT PRIMARY KEY,
  nome varchar(100) NOT NULL,
  idade int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO pessoas (id, nome, idade) VALUES
(1, 'João', 25),
(2, 'Maria', 30),
(3, 'Carlos', 35);