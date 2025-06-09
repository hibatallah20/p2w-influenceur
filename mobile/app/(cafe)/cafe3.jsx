import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "../../assets/styles/cafe1.styles.js";
import MapView, { Marker } from 'react-native-maps';


export default function Cafe3() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* IMAGE AVEC BOUTON */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/maisonceleste.jpg')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.goBackButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* CONTENU */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.restaurantName}>Maison Celeste</Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Détails</Text>
        <View style={styles.detailsContainer}>
        <Text style={styles.detailBadge}>Asiatique</Text>
       <Text style={styles.detailBadge}>Chinois</Text>
       <Text style={styles.detailBadge}>Vitenamienne</Text>
      <Text style={styles.detailBadge}>Plat conseillé: Crepe Vitenamienne</Text>
      </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Voici une brève description du restaurant. Délicieuses pizzas faites maison.
        </Text>

          <Text style={styles.sectionTitle}>Localisation</Text>
        <View style={styles.mapContainer}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 34.03155,
              longitude: -5.01289,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: 34.03155,
                longitude: -5.01289,
              }}
              title="Maison Celeste"
              description="Voici la localisation du Café"
            />
          </MapView>
        </View>

        
      </ScrollView>
    </View>
  );
}
