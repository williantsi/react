export default function App() {
  function handleClick() {
    console.log('Olá, mundo!')
  }

  const pessoas = [
    { id: 1, nome: 'João', idade: 30 },
    { id: 2, nome: 'Maria', idade: 25 },
    { id: 3, nome: 'Pedro', idade: 35 },
    { id: 4, nome: 'Ana', idade: 28 },
    { id: 5, nome: 'Lucas', idade: 22 },
    { id: 6, nome: 'Fernanda', idade: 27 },
    { id: 7, nome: 'Carlos', idade: 40 },
    { id: 8, nome: 'Juliana', idade: 32 },
    { id: 9, nome: 'Roberto', idade: 29 },
    { id: 10, nome: 'Patrícia', idade: 31 },
    { id: 11, nome: 'Ricardo', idade: 26 },
    { id: 12, nome: 'Mariana', idade: 24 },
    { id: 13, nome: 'Eduardo', idade: 33 },
    { id: 14, nome: 'Sofia', idade: 21 },
    { id: 15, nome: 'Gabriel', idade: 34 },
    { id: 16, nome: 'Larissa', idade: 23 },
    { id: 17, nome: 'Thiago', idade: 36 },
    { id: 18, nome: 'Isabela', idade: 30 },
    { id: 19, nome: 'André', idade: 25 },
    { id: 20, nome: 'Camila', idade: 28 },
    { id: 21, nome: 'Felipe', idade: 22 },
    { id: 22, nome: 'Tatiane', idade: 27 },
    { id: 23, nome: 'Bruno', idade: 40 },
    { id: 24, nome: 'Aline', idade: 32 },
    { id: 25, nome: 'Vinícius', idade: 29 },
    { id: 26, nome: 'Juliano', idade: 31 },
    { id: 27, nome: 'Natália', idade: 26 },
    { id: 28, nome: 'Gustavo', idade: 24 },
    { id: 29, nome: 'Renata', idade: 33 },
    { id: 30, nome: 'Rafael', idade: 21 },  
    { id: 31, nome: 'Tatiane', idade: 34 },
    { id: 32, nome: 'Eduarda', idade: 23 },
    { id: 33, nome: 'Leonardo', idade: 36 },
    { id: 34, nome: 'Amanda', idade: 30 },
    { id: 35, nome: 'Diego', idade: 25 },
    { id: 36, nome: 'Priscila', idade: 28 },
    { id: 37, nome: 'Samuel', idade: 22 },
    { id: 38, nome: 'Jéssica', idade: 27 },
    { id: 39, nome: 'Fábio', idade: 40 },
    { id: 40, nome: 'Marcos', idade: 32 }
  ]
  return (
    <div>
      <button onClick={handleClick}>Clique aqui</button>
      
      <h3>Lista de Pessoas</h3>
      <ul>
        {pessoas.map((pessoa) => (
          <li key={pessoa.id}>
           {pessoa.id}: {pessoa.nome} - {pessoa.idade} anos
          </li>
        ))}
      </ul>
    </div>
  )
}
