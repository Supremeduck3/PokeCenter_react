import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Sign Up</Text>
      </View>
      <View style={styles.containerLogin}>
        <Text style={styles.textoContainerLogin}>Seja bem-vindo ao PokeCenter</Text>
        <TextInput style={styles.inputEmail}></TextInput>
        <TextInput style={styles.inputSenha}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  inputEmail: {
    height: 40,
    width: 230,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84, 
  },
  inputSenha: {
    height: 40,
    width: 230,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84, 
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffff",
    marginBottom: 20,
  },
  containerLogin: {
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    height: 550,
    width: 260,
    borderRadius: 5,
    gap: 20,
  },
  textoContainerLogin:{
    fontWeight:'700',
    color:'#818181',
    fontSize:15
  },
});
