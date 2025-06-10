import React, { useState } from 'react';
import { useRouter } from "expo-router";
import {Ionicons  } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';

const EditBio = ({ initialBio = '', onSave }) => {
    const router = useRouter();
  const [bio, setBio] = useState(initialBio);

  const handleSave = () => {
    if (bio.trim() === '') {
      Alert.alert('Erreur', 'La bio ne peut pas être vide.');
      return;
    }

    if (onSave) {
      onSave(bio);
    }
    Alert.alert('Succès', 'Votre bio a été mise à jour.');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
     <TouchableOpacity 
        style={styles.goBackButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>   
      <Text style={styles.title}>Modifier votre bio</Text>

      <TextInput
        style={styles.textInput}
        multiline
        maxLength={200}
        placeholder="Écrivez votre nouvelle bio ici..."
        value={bio}
        onChangeText={setBio}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Enregistrer</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:10,
    
  },
  textInput: {
    height: 120,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    textAlignVertical: 'top', 
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 50,
  
  },
  button: {
    marginTop: 20,
    backgroundColor: '#16B8E7',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 500,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditBio;
