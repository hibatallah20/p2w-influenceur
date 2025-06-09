import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/colors";

export default function About() {
  const router = useRouter();

  
  const contactSupport = () => {
    Linking.openURL('mailto:p2w@example.com');
  };

  return (
    <View style={styles.container}>
      {/* Bouton retour */}
      <TouchableOpacity style={styles.gobackButton} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingTop: 20, paddingBottom: 40 }}>
        {/* Titre */}
        <Text style={styles.title}>Besoin d'aide ?</Text>

        {/* Texte explicatif */}
        <Text style={styles.text}>
          Si vous rencontrez des difficultés, vous pouvez consulter les réponses aux questions les plus fréquentes ci-dessous ou contacter notre support.
        </Text>

        {/* FAQ simple */}
        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>Q : Comment créer un compte ?</Text>
          <Text style={styles.faqAnswer}>R : Allez sur la page d'inscription et remplissez le formulaire avec vos informations.</Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>Q : Comment réinitialiser mon mot de passe ?</Text>
          <Text style={styles.faqAnswer}>R : Sur la page de connexion, cliquez sur "Mot de passe oublié" et suivez les instructions.</Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>Q : Puis-je contacter le support directement ?</Text>
          <Text style={styles.faqAnswer}>R : Oui, utilisez le bouton ci-dessous pour envoyer un email à notre équipe d'assistance.</Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>Q : Comment mettre à jour mes informations personnelles ?</Text>
          <Text style={styles.faqAnswer}>R : Vous pouvez modifier vos informations depuis la page profil dans les paramètres de votre compte.</Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>Q : Que faire si l'application plante ou ne répond plus ?</Text>
          <Text style={styles.faqAnswer}>R : Essayez de redémarrer l'application. Si le problème persiste, désinstallez et réinstallez l'application ou contactez le support.</Text>
        </View>


        {/* Bouton contact */}
        <TouchableOpacity style={styles.contactButton} onPress={contactSupport}>
          <Text style={styles.contactButtonText}>Contacter le support</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
    backgroundColor: COLORS.white,
    paddingTop: 90,
  },
 gobackButton: {
  position: 'absolute',
  top: 40,
  left: 20,
  width: 36,
  height: 36,
  borderRadius: 6,
  borderWidth: 1,
  borderColor: COLORS.white,
  backgroundColor: COLORS.white,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  zIndex: 100, 
},
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: COLORS.black,
    
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: COLORS.black,
   
  },
  faqItem: {
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
  },
  faqQuestion: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: COLORS.black,
  },
  faqAnswer: {
    color: COLORS.darkGray,
  },
  contactButton: {
    backgroundColor: '#16B8E7',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
