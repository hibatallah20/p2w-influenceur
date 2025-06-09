import { View, Text, Button, TouchableOpacity, ImageBackground, TextInput, Image } from "react-native";
import { useRouter } from "expo-router";
import styles  from "../../assets/styles/restaurant.styles.js";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react"

export default function Restaurant() {
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
     <TouchableOpacity style={styles.card} onPress={() => router.push("/(res)/restaurant1")}>
    <Image source={require('../../assets/images/cozy-corner.webp')} style={styles.image} />
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>The Cozy Corner</Text>
      <View style={styles.rating}>
        <FontAwesome name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>4.5</Text>
      </View>
    </View>
    <Text style={styles.category} numberOfLines={1}>Restaurant</Text>
    <Text style={styles.priceNote} >*Prix total de la commande : 10€</Text>
    <View style={styles.winRow}>
      <Text style={styles.winText}>Win 3</Text>
      <Ionicons name="logo-bitcoin" size={16} color="#FFD700" />
    </View>
  </TouchableOpacity>
  {/* CARD 2 */}
  <TouchableOpacity style={styles.card} onPress={() => router.push("/(res)/restaurant2")}>
    <Image source={require('../../assets/images/bistro-54.webp')} style={styles.image} />
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>Bistro 54</Text>
      <View style={styles.rating}>
        <FontAwesome name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>4.8</Text>
      </View>
    </View>
    <Text style={styles.category} numberOfLines={1}>Restaurant</Text>
    <Text style={styles.priceNote} >*Prix total de la commande : 15€</Text>
    <View style={styles.winRow}>
      <Text style={styles.winText}>Win 2</Text>
      <Ionicons name="logo-bitcoin" size={16} color="#FFD700" />
    </View>
  </TouchableOpacity>
  {/* CARD 3 */}
  <TouchableOpacity style={styles.card} onPress={() => router.push("/(res)/restaurant3")}>
    <Image source={require('../../assets/images/mediterranean-grill.webp')} style={styles.image} />
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>Medi Grill</Text>
      <View style={styles.rating}>
        <FontAwesome name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>4.7</Text>
      </View>
    </View>
    <Text style={styles.category} numberOfLines={1}>Restaurant</Text>
    <Text style={styles.priceNote} >*Prix total de la commande : 10€</Text>
    <View style={styles.winRow}>
      <Text style={styles.winText}>Win 3</Text>
      <Ionicons name="logo-bitcoin" size={16} color="#FFD700" />
    </View>
  </TouchableOpacity>
  {/* CARD 4 */}
  <TouchableOpacity style={styles.card} onPress={() => router.push("/(res)/restaurant4")}>
    <Image source={require('../../assets/images/postiano.jpg')} style={styles.image} />
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>Positano Italian</Text>
      <View style={styles.rating}>
        <FontAwesome name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>4.5</Text>
      </View>
    </View>
    <Text style={styles.category} numberOfLines={1}>Restaurant</Text>
    <Text style={styles.priceNote} >*Prix total de la commande : 15€</Text>
    <View style={styles.winRow}>
      <Text style={styles.winText}>Win 4</Text>
      <Ionicons name="logo-bitcoin" size={16} color="#FFD700" />
    </View>
  </TouchableOpacity>
  {/* CARD 5 */}
  <TouchableOpacity style={styles.card} onPress={() => router.push("/(res)/restaurant5")}>
    <Image source={require('../../assets/images/duplex.jpg')} style={styles.image} />
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>Duplex Steak</Text>
      <View style={styles.rating}>
        <FontAwesome name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>4.7</Text>
      </View>
    </View>
    <Text style={styles.category} numberOfLines={1}>Restaurant</Text>
    <Text style={styles.priceNote} >*Prix total de la commande : 10€</Text>
    <View style={styles.winRow}>
      <Text style={styles.winText}>Win 3</Text>
      <Ionicons name="logo-bitcoin" size={16} color="#FFD700" />
    </View>
  </TouchableOpacity>
  {/* CARD 6 */}
  <TouchableOpacity style={styles.card} onPress={() => router.push("/(res)/restaurant6")}>
    <Image source={require('../../assets/images/katana.jpg')} style={styles.image} />
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>Katana Sushi</Text>
      <View style={styles.rating}>
        <FontAwesome name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>4.7</Text>
      </View>
    </View>
    <Text style={styles.category} numberOfLines={1}>Restaurant</Text>
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