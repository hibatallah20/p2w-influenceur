import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from "expo-router";
import { FontAwesome, Feather, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

const Settings = () => {
  const router = useRouter();
  
 

  return (
    <View style={styles.mainContainer}>
         <TouchableOpacity 
        style={styles.goBackButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Settings</Text>

      {/* MOT DE PASSE */}
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.option} onPress={() => router.push("/(help)/password") }>
          <Feather name="lock" size={20} color="#555" />
          <Text style={styles.optionText}>Changer le mot de passe</Text>
        </TouchableOpacity>
      </View>

     {/* Changer la photo de profil */}
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.option} onPress={() => router.push("/(help)/pdp")}>
          <Entypo name="image" size={20} color="#555" />
          <Text style={styles.optionText}>Changer la photo de profil</Text>
        </TouchableOpacity>
      </View>

      {/* Modifier la bio */}
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.option} onPress={() => router.push("/(help)/bio")}>
          <FontAwesome name="edit" size={20} color="#555" />
          <Text style={styles.optionText}>Modifier la bio</Text>
        </TouchableOpacity>
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionContainer: {
    marginBottom: 15,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 12,
    borderRadius: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default Settings;
