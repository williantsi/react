import React, { useState } from "react";
import { ScrollView, View, Text, RefreshControl, StyleSheet, Button } from "react-native";
import { useEffect } from "react";
import api from "./services";

function App() {
  const [users, setUsers] = useState([]);

  const useEffect = () => {
    buscarUsuarios();
  }

  const buscarUsuarios = async () => {
    api.get('').then(response => {  // localhost:8000/get works
     //alert("Usuários encontrados com sucesso!");
     //console.log(response);
     setUsers(response.data);
  }).catch(error => {
      console.log(error);
  });
  };

  return (
   <View style={styles.container}>
   
      <Text style={styles.titulo}>Lista de Usuários</Text>
      <Text key={users.id} style={styles.texto}>Usuários encontrados:</Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={buscarUsuarios} />
        }
      >
      {users.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.texto}>Nome: {item.name}</Text>
          <Text style={styles.texto}>Email: {item.email}</Text>
          <Text style={styles.texto}>Username: {item.username}</Text>
        </View>
      ))}
      </ScrollView>
      <Button title="limpar" onPress={() => setUsers([])} />
   </View>
     
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    shadowColor: "#000"},
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  texto: {
    fontSize: 18,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
 
  },
});