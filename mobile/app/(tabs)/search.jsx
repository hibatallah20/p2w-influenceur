import { ScrollView, View, Text, Button, TouchableOpacity, ImageBackground, TextInput, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../assets/styles/search.styles.js";

import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function Search() {
  const router = useRouter();

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Exemple : rediriger vers une page searchResult avec la query en paramètre
    router.push(`/sec/searchResults?query=${encodeURIComponent(searchText)}`);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 20, gap: 20 }}
    >
      <View style={styles.searchWrapper}>
        {/* Barre de recherche */}
        <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />
      </View>

      {/* RESTAURANT */}
      <TouchableOpacity onPress={() => router.push("/(sec)/restaurant")}>
        <ImageBackground
          source={require("../../assets/images/profile1.png")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Restaurants</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* CAFE */}
      <TouchableOpacity onPress={() => router.push("/(sec)/cafe")}>
        <ImageBackground
          source={require("../../assets/images/profile2.png")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Café</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* Bar */}
      <TouchableOpacity onPress={() => router.push("/(sec)/bar")}>
        <ImageBackground
          source={require("../../assets/images/Profile3.jpg")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Bar</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* Titre partenaires */}
      <Text style={{ fontSize: 20, marginLeft: 5 }}>
        Nos meilleurs <Text style={{ fontWeight: "bold", fontSize: 20 }}>partenaires</Text>
      </Text>

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
    </ScrollView>
  );
}
