import api from "./services/api"
import { useState } from "react"

function App() {

  const [pessoas, setPessoas] = useState([])

  // Função para carregar as pessoas
  const loadPessoas = async () => {
    try {
      const data = await api();
      setPessoas(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }; // Fim da função loadPessoas
  
  return (
    <div>

      <h1>API Simples</h1>

      <button onClick={loadPessoas}>Carregar Pessoas</button>

      <ul>

        {pessoas.map((pessoa) => (
          <li key={pessoa.id}>
            {pessoa.nome} - {pessoa.idade}
          </li>
        ))}
        
      </ul>
  
    </div>

  ) // Fim do return

} // Fim do componente App

export default App
