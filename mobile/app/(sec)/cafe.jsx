import { View, Text, Button, TouchableOpacity, ImageBackground, TextInput, Image } from "react-native";
import { useRouter } from "expo-router";
import styles  from "../../assets/styles/cafe.styles.js";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react"

export default function Cafe() {
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
    <Text style={styles.priceNote} >*Prix total de la commande : 10€</Text>
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
    <Text style={styles.priceNote} >*Prix total de la commande : 10€</Text>
    <View style={styles.winRow}>
      <Text style={styles.winText}>Win 3</Text>
      <Ionicons name="logo-bitcoin" size={16} color="#FFD700" />
    </View>
  </TouchableOpacity>
  {/* CARD 3 */}
  <TouchableOpacity style={styles.card} onPress={() => router.push("/(cafe)/cafe3")}>
    <Image source={require('../../assets/images/maisonceleste.jpg')} style={styles.image} />
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>Maison Celeste</Text>
      <View style={styles.rating}>
        <FontAwesome name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>4.7</Text>
      </View>
    </View>
    <Text style={styles.category} numberOfLines={1}>Café</Text>
    <Text style={styles.priceNote} >*Prix total de la commande : 10€</Text>
    <View style={styles.winRow}>
      <Text style={styles.winText}>Win 3</Text>
      <Ionicons name="logo-bitcoin" size={16} color="#FFD700" />
    </View>
  </TouchableOpacity>
  {/* CARD 4 */}
  <TouchableOpacity style={styles.card} onPress={() => router.push("/(cafe)/cafe4")}>
    <Image source={require('../../assets/images/madeinm.jpg')} style={styles.image} />
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>Made in M</Text>
      <View style={styles.rating}>
        <FontAwesome name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>4.5</Text>
      </View>
    </View>
    <Text style={styles.category} numberOfLines={1}>Café</Text>
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