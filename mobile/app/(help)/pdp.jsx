import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import {Ionicons  } from '@expo/vector-icons';

const ChangeProfilePicture = () => {
    const router = useRouter();
  const [profileImage, setProfileImage] = useState(null);

  const handleChoosePhoto = () => {
  
    Alert.alert('Choisir une photo');

 
    setProfileImage(require('../../assets/images/avatar1.webp'));
  };

  return (
    <View style={styles.mainContainer}>
        
      <Text style={styles.title}>Changer la photo de profil</Text>

      <View style={styles.imageContainer}>
        {profileImage ? (
          <Image source={profileImage} style={styles.profileImage} />
        ) : (
          <View style={styles.placeholder}>
            <AntDesign name="user" size={50} color="#aaa" />
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
        <Text style={styles.buttonText}>Choisir une photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  placeholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#16B8E7',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangeProfilePicture;
