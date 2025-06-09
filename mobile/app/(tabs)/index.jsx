import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from "../../assets/styles/home.styles";
import { useAuthStore } from "../../store/authStore";

export default function HomeScreen() {
    const { logout } = useAuthStore();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="settings-outline" size={24} color="#222" />
        <View style={styles.headerRight}>
          <Ionicons name="notifications-outline" size={24} color="#222" style={{ marginRight: 16 }} />
          <TouchableOpacity style={styles.avatarCircle}>
            <Ionicons name="person" size={22} color="#fff" />
          </TouchableOpacity>
          <Ionicons name="chevron-down" size={18} color="#222" style={{ marginLeft: 4 }} />
        </View>
      </View>

      {/* Bienvenue */}
      <Text style={styles.welcome}>Bienvenue,</Text>
      <Text style={styles.username}>Paul</Text>
      <TouchableOpacity onPress={logout}>
      <Text>Logout</Text>
     </TouchableOpacity>

      {/* Classement */}
      <View style={styles.rankCard}>
        <Text style={styles.rankNumber}>#10</Text>
        <View style={styles.coinContainer}>
          <Ionicons name="ios-ellipse" size={18} color="#FFD600" />
          <Text style={styles.coinText}>100</Text>
        </View>
        <Text style={styles.rankLabel}>Parmi Les Top Influenceurs De Cette Semaine</Text>
      </View>

      {/* Partenaires */}
      <Text style={styles.sectionTitle}>
        Découvrir certains de nos <Text style={{ fontWeight: 'bold' }}>partenaires</Text>
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsScroll}>
        {/* Carte partenaire 1 */}
        <View style={styles.partnerCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80' }}
            style={styles.partnerImage}
          />
          <View style={{ padding: 12 }}>
            <View style={styles.partnerTitleRow}>
              <Text style={styles.partnerName}>Le vingt 4</Text>
              <View style={styles.ratingRow}>
                <Text style={styles.partnerRating}>4.5</Text>
                <Ionicons name="star" size={14} color="#FFD600" />
              </View>
            </View>
            <View style={styles.partnerTagsRow}>
              <View style={styles.partnerTag}>
                <Text style={styles.partnerTagText}>Restaurant</Text>
              </View>
              <View style={styles.partnerTag}>
                <Text style={styles.partnerTagText}>Bar</Text>
              </View>
            </View>
            <Text style={styles.partnerInfo}>• Prix totale de la commande {'>'} 10 €</Text>
            <View style={styles.partnerWinRow}>
              <Text style={styles.partnerWinText}>Win</Text>
              <Ionicons name="ios-ellipse" size={16} color="#FFD600" style={{ marginHorizontal: 2 }} />
              <Text style={styles.partnerWinText}>3</Text>
            </View>
          </View>
        </View>

        {/* Carte partenaire 2 (exemple) */}
        <View style={styles.partnerCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=400&q=80' }}
            style={styles.partnerImage}
          />
          <View style={{ padding: 12 }}>
            <View style={styles.partnerTitleRow}>
              <Text style={styles.partnerName}>Ivory</Text>
              <View style={styles.ratingRow}>
                <Text style={styles.partnerRating}>4.7</Text>
                <Ionicons name="star" size={14} color="#FFD600" />
              </View>
            </View>
            <View style={styles.partnerTagsRow}>
              <View style={styles.partnerTag}>
                <Text style={styles.partnerTagText}>Restaurant</Text>
              </View>
            </View>
            <Text style={styles.partnerInfo}>• Prix totale de la commande {'>'} 15 €</Text>
            <View style={styles.partnerWinRow}>
              <Text style={styles.partnerWinText}>Win</Text>
              <Ionicons name="ios-ellipse" size={16} color="#FFD600" style={{ marginHorizontal: 2 }} />
              <Text style={styles.partnerWinText}>5</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Besoin d'aide */}
      <Text style={styles.helpText}>Besoin de l'aide ?</Text>

      
    </View>
  );
}


