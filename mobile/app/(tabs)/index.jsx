import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from "../../assets/styles/home.styles";


export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/(help)/settings")}>
          <Ionicons name="settings-outline" size={24} color="#222" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <Ionicons name="notifications-outline" size={24} color="#222" style={{ marginRight: 16 }} />
          <TouchableOpacity style={styles.avatarCircle} onPress={() => router.push("/(help)/profile")}>
            <Ionicons name="person" size={22} color="#fff" />
          </TouchableOpacity>
          <Ionicons name="chevron-down" size={18} color="#222" style={{ marginLeft: 4 }} />
        </View>
      </View>

      {/* Bienvenue */}
      <Text style={styles.welcome}>Bienvenue,</Text>
      <Text style={styles.username}>John</Text>
      

      {/* Classement */}
      <View style={styles.rankCard}>
        <Text style={styles.rankNumber}>#10</Text>
        <View style={styles.coinContainer}>
          <Ionicons name="logo-bitcoin" size={16} color="#FFD700" />
          <Text style={styles.coinText}>100</Text>
        </View>
        <Text style={styles.rankLabel}>Parmi Les Top Influenceurs De Cette Semaine</Text>
      </View>

      {/* Partenaires */}
      <Text style={styles.sectionTitle}>
        Découvrir certains de nos <Text style={{ fontWeight: 'bold' }}>partenaires</Text>
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardsScroll}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        <View style={styles.cardGrid}>
          {/* CARD 1 */}
          <TouchableOpacity style={styles.card} onPress={() => router.push("/(cafe)/cafe1")}>
            <Image source={require('../../assets/images/paul.jpg')} style={styles.image} />
            <View style={styles.row}>
              <Text style={styles.title} numberOfLines={1}>Paul</Text>
              <View style={styles.rating}>
                <FontAwesome name="star" size={14} color="#FFD700" />
                <Text style={styles.ratingText}>3.5</Text>
              </View>
            </View>
            <Text style={styles.category} numberOfLines={1}>Café</Text>
            <Text style={styles.priceNote}>*Prix total de la commande : 10€</Text>
            <View style={styles.winRow}>
              <Text style={styles.winText}>Win 3</Text>
              <Ionicons name="logo-bitcoin" size={16} color="#FFD700" />
            </View>
          </TouchableOpacity>

          {/* CARD 2 */}
          <TouchableOpacity style={styles.card} onPress={() => router.push("/(cafe)/cafe2")}>
            <Image source={require('../../assets/images/barista.jpg')} style={styles.image} />
            <View style={styles.row}>
              <Text style={styles.title} numberOfLines={1}>Barista</Text>
              <View style={styles.rating}>
                <FontAwesome name="star" size={14} color="#FFD700" />
                <Text style={styles.ratingText}>4.5</Text>
              </View>
            </View>
            <Text style={styles.category} numberOfLines={1}>Café</Text>
            <Text style={styles.priceNote}>*Prix total de la commande : 10€</Text>
            <View style={styles.winRow}>
              <Text style={styles.winText}>Win 3</Text>
              <Ionicons name="logo-bitcoin" size={16} color="#FFD700" />
            </View>
          </TouchableOpacity>

         
        </View>
      </ScrollView>
      

      <TouchableOpacity onPress={() => router.push("/(help)/about")}>
         <Text style={styles.helpText}>Besoin de l'aide ?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
