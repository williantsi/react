CREATE DATABASE IF NOT EXISTS movie_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE movie_db;

CREATE TABLE movies (
  id int primary key auto_increment,
  title varchar(255) NOT NULL,
  description text NOT NULL,
  release_year int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

TRUNCATE TABLE movies;

INSERT INTO movies (id, title, description, release_year) VALUES
(1, 'Inception', 'A mind-bending thriller by Christopher Nolan.', 2010),
(2, 'The Matrix', 'A sci-fi classic about virtual reality.', 1999),
(3, 'Interstellar', 'A journey through space and time.', 2014),
(4, 'The Dark Knight', 'A gritty superhero film by Christopher Nolan.', 2008),
(5, 'Pulp Fiction', 'A classic crime film by Quentin Tarantino.', 1994),
(6, 'Forrest Gump', 'The story of a man with a big heart.', 1994),
(7, 'The Shawshank Redemption', 'A story of hope and friendship.', 1994),
(8, 'The Godfather', 'A classic mafia drama.', 1972),
(9, 'The Godfather Part II', 'The continuation of the Corleone saga.', 1974),
(10, 'The Lord of the Rings: The Fellowship of the Ring', 'The beginning of an epic journey.', 2001),
(11, 'The Lord of the Rings: The Two Towers', 'The second chapter of the epic trilogy.', 2002),
(12, 'The Lord of the Rings: The Return of the King', 'The conclusion of the epic trilogy.', 2003),
(13, 'Star Wars: A New Hope', 'The beginning of the Star Wars saga.', 1977),
(14, 'Star Wars: The Empire Strikes Back', 'The second installment of the Star Wars saga.', 1980),
(15, 'Star Wars: Return of the Jedi', 'The conclusion of the original Star Wars trilogy.', 1983),
(16, 'Avengers: Endgame', 'The epic conclusion to the Avengers saga.', 2019),
(17, 'Avengers: Infinity War', 'The beginning of the battle against Thanos.', 2018),
(18, 'Iron Man', 'The origin story of Tony Stark.', 2008),
(19, 'Spider-Man: No Way Home', 'A multiverse adventure with Spider-Man.', 2021),
(20, 'Black Panther', 'The story of the king of Wakanda.', 2018),
(21, 'Joker', 'The origin story of the iconic villain.', 2019),
(22, 'Parasite', 'A dark comedy thriller from South Korea.', 2019),
(23, 'The Lion King', 'A Disney classic about a lion cub.', 1994),
(24, 'Frozen', 'A Disney animated musical about two sisters.', 2013),
(25, 'Toy Story', 'The story of toys that come to life.', 1995),
(26, 'Finding Nemo', 'A father searches for his lost son in the ocean.', 2003),
(27, 'Coco', 'A story about family and music.', 2017),
(28, 'Up', 'An adventure of an old man and a young boy.', 2009),
(29, 'The Incredibles', 'A family of superheroes.', 2004),
(30, 'Ratatouille', 'A rat who dreams of becoming a chef.', 2007);