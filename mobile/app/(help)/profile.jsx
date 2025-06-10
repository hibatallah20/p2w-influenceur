import React from 'react';
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons  } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useAuthStore } from "../../store/authStore";
import COLORS from "../../constants/colors";


const Profil = () => {
  const router = useRouter();
  const { logout } = useAuthStore();
  const instagramHandle = 'votre_compte';
  const instagramUrl = `https://instagram.com/${instagramHandle}`;

  return (
    <View style={styles.mainContainer}>
    <TouchableOpacity 
        style={styles.goBackButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* USERNAME */}
      <View style={styles.sectionContainer}>
        <View style={styles.usernameContainer}>
          
          <Image
            source={require('../../assets/images/avatar1.webp')}
            style={styles.profileImage}
          />
          <Text style={styles.username}>John</Text>
        </View>
      </View>


       <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Prénom:</Text>
        <View style={styles.bioContainer}>
          <Text style={styles.bio}>
            izack
          </Text>
        </View>
      </View>

       <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Nom:</Text>
        <View style={styles.bioContainer}>
          <Text style={styles.bio}>
        John
          </Text>
        </View>
      </View>

      {/* BIO */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Bio:</Text>
        <View style={styles.bioContainer}>
          <Text style={styles.bio}>
            Passionné(e) par la mode, les voyages et la création de contenu. 
            Disponible pour des collaborations ✨
          </Text>
        </View>
      </View>

      {/* INSTAGRAM */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Instagram:</Text>
        <View style={styles.instagramContainer}>
          <TouchableOpacity
            style={styles.instagramLink}
            onPress={() => Linking.openURL(instagramUrl)}
          >
            <FontAwesome name="instagram" size={24} color="#E1306C" style={{ marginRight: 8 }} />
            <Text style={styles.instagramText}>@{instagramHandle}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
         <Text style={styles.logoutButtonText}>Déconnexion</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  // USERNAME container
  usernameContainer: {
    alignItems: 'center', 
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10, 
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },

  // BIO container
  bioContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  bio: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    
    
  },

  // INSTAGRAM container
  instagramContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 50,
  },
  instagramLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  instagramText: {
    fontSize: 16,
    color: '#E1306C',
    fontWeight: '600',
  },
  logoutButton: {
  backgroundColor: '#16B8E7',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 25,
  alignItems: 'center',
  marginTop: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},
logoutButtonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
},
goBackButton: {
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
});

export default Profil;
