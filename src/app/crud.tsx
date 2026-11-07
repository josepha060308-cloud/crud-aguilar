
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const crud = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Crear CRUD</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Coloca tus Nombres'
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Coloca tu DNI'
          style={styles.input}
          keyboardType='numeric'
          maxLength={8}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Coloca tu Correo Electronico'
          style={styles.input}
          keyboardType='email-address'
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Coloca tu Celular'
          style={styles.input}
          keyboardType='number-pad'
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:'white'}}>CREATE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={{color:'white'}}>READ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={{color:'white'}}>UPDATE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={{color:'white'}}>DELETE</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default crud

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    padding: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '100%'
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 25,
    width: '100%',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 3,
    alignItems: 'center',
  },
});
