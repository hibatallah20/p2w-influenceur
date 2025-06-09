import { View, Text, Button, TouchableOpacity, ImageBackground, TextInput, Image } from "react-native";
import { useRouter } from "expo-router";
import styles  from "../../assets/styles/bar.styles.js";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react"

export default function Bar() {
  const router = useRouter();


  return (
    <View style={styles.container}>

      {/* GO BACK  */}
      <TouchableOpacity 
        style={styles.goBackButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* 4 RES */}
       <View style={styles.cardGrid}>
      {/* CARD 1 */}
     <TouchableOpacity style={styles.card} onPress={() => router.push("/(bar)/bar1")}>
    <Image source={require('../../assets/images/pub-house.webp')} style={styles.image} />
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>Pub House</Text>
      <View style={styles.rating}>
        <FontAwesome name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>4.5</Text>
      </View>
    </View>
    <Text style={styles.category} numberOfLines={1}>Bar</Text>
    <Text style={styles.priceNote} >*Prix total de la commande : 10€</Text>
    <View style={styles.winRow}>
      <Text style={styles.winText}>Win 3</Text>
      <Ionicons name="logo-bitcoin" size={16} color="#FFD700" />
    </View>
  </TouchableOpacity>
  {/* CARD 2 */}
  <TouchableOpacity style={styles.card} onPress={() => router.push("/(bar)/bar2")}>
    <Image source={require('../../assets/images/rooftop-lounge.webp')} style={styles.image} />
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>Rooftop Lounge</Text>
      <View style={styles.rating}>
        <FontAwesome name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>4.8</Text>
      </View>
    </View>
    <Text style={styles.category} numberOfLines={1}>Bar</Text>
    <Text style={styles.priceNote} >*Prix total de la commande : 10€</Text>
    <View style={styles.winRow}>
      <Text style={styles.winText}>Win 3</Text>
      <Ionicons name="logo-bitcoin" size={16} color="#FFD700" />
    </View>
  </TouchableOpacity>
  
  
  </View>



    </View>
  );
}