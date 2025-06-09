import { ScrollView, View, Text, Button, TouchableOpacity, ImageBackground, TextInput, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../assets/styles/search.styles.js";

import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const places = [
  { id: 1, type: "restaurant", name: "The Cozy Corner", image: require('../../assets/images/cozy-corner.webp'), rating: 4.5, price: 10, win: 3, route: "/(res)/restaurant1" },
  { id: 2, type: "restaurant", name: "Bistro 54", image: require('../../assets/images/bistro-54.webp'), rating: 4.8, price: 15, win: 2, route: "/(res)/restaurant2" },
  { id: 3, type: "restaurant", name: "Medi Grill", image: require('../../assets/images/mediterranean-grill.webp'), rating: 4.7, price: 10, win: 3, route: "/(res)/restaurant3" },
];

export default function Search() {
  const router = useRouter();

    const [searchText, setSearchText] = useState("");
  const [hasTyped, setHasTyped] = useState(false);

  
  const onChangeText = (text) => {
    setSearchText(text);
    if (!hasTyped) setHasTyped(true);
  };

  
  const filteredPlaces = searchText.trim() === ""
    ? []
    : places.filter(place =>
        place.name.toLowerCase().includes(searchText.toLowerCase())
      );


  return (
     <ScrollView style={styles.container} contentContainerStyle={{ padding: 20, gap: 20 }}>
      <View style={styles.searchWrapper}>
        <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={onChangeText}
          returnKeyType="search"
        />
      </View>

      
      {hasTyped && (
       <View style={styles.cardGrid}>
  {searchText.trim() !== "" && filteredPlaces.length === 0 && (
    <Text>Aucun résultat trouvé</Text>
  )}

  {filteredPlaces.map(place => (
    <TouchableOpacity key={place.id} style={styles.card} onPress={() => router.push(place.route)}>
      <Image source={place.image} style={styles.image} />
      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={1}>{place.name}</Text>
        <View style={styles.rating}>
          <FontAwesome name="star" size={14} color="#FFD700" />
          <Text style={styles.ratingText}>{place.rating}</Text>
        </View>
      </View>
      <Text style={styles.category} numberOfLines={1}>{place.type}</Text>
      <Text style={styles.priceNote}>*Prix total de la commande : {place.price}€</Text>
      <View style={styles.winRow}>
        <Text style={styles.winText}>Win {place.win}</Text>
        <Ionicons name="logo-bitcoin" size={16} color="#FFD700" />
      </View>
    </TouchableOpacity>
     ))}
   </View>
      )}

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
