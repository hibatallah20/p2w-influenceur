import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from "../../assets/styles/balance.style";

const gifts = [
  {
    id: 1,
    coins: 50,
    coupon: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/2278/2278992.png',
  },
  {
    id: 2,
    coins: 100,
    coupon: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/2278/2278992.png',
  },
  {
    id: 3,
    coins: 150,
    coupon: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/2278/2278992.png',
  },
];

export default function BalanceScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        {/* Solde Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>VOTRE SOLDE</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceValue}>100</Text>
            <FontAwesome name="bitcoin" size={32} color="#FFD600" style={{ marginLeft: 8 }} />
          </View>
          <View style={styles.balanceFooter}>
            <Text style={styles.balanceInfo}>1 WinCoin = 1 Euro</Text>
            <TouchableOpacity style={styles.retirerBtn}>
              <Ionicons name="wallet-outline" size={18} color="#fff" />
              <Text style={styles.retirerText}>Retirer</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.minInfo}>
          Le montant de retrait minimum est de 10 WinCoin
        </Text>

        {/* Cadeaux */}
        <Text style={styles.sectionTitle}>Découvrir nos meilleures surprises</Text>
        {gifts.map(gift => (
          <View key={gift.id} style={styles.giftRow}>
            <Image source={{ uri: gift.image }} style={styles.giftImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.giftText}>
                Débloquez ce cadeau et gagner <Text style={styles.giftBold}>{gift.coins} WinCoin</Text> et 1 coupon de <Text style={styles.giftBold}>{gift.coupon}€</Text> du restaurant de votre choix
              </Text>
              <TouchableOpacity style={styles.unlockBtn}>
                <Text style={styles.unlockBtnText}>Débloquer</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      
    </View>
  );
}