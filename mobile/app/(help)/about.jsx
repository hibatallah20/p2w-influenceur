import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import styles from "../../assets/styles/about.styles"

export default function About() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page About</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Retour</Text>
      </TouchableOpacity>
    </View>
  );
}

