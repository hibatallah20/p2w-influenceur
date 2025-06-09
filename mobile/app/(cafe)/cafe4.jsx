import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "../../assets/styles/cafe1.styles.js";
import MapView, { Marker } from 'react-native-maps';

export default function Cafe4() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* IMAGE AVEC BOUTON */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/madeinm.jpg')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.goBackButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* CONTENU */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.restaurantName}>Made in M</Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Détails</Text>
        <View style={styles.detailsContainer}>
        <Text style={styles.detailBadge}>Café moderne</Text>
       <Text style={styles.detailBadge}>Boissons artisanales</Text>
       <Text style={styles.detailBadge}>Snacks et pâtisseries</Text>
      <Text style={styles.detailBadge}>Plat conseillé: Muffin aux myrtilles</Text>
      </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Régimes spéciaux : Options sans lactose et végétariennes disponibles.{"\n"}
          Repas : Petit-déjeuner, Déjeuner.{"\n"}
          Fonctionnalités : Wi-Fi gratuit, Prises électriques, Service à emporter, Terrasse intérieure.
        </Text>

          <Text style={styles.sectionTitle}>Localisation</Text>
        <View style={styles.mapContainer}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 34.06341,
              longitude: -4.98180,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: 34.06341,
                longitude: -4.98180,
              }}
              title="Made in M"
              description="Voici la localisation du Café"
            />
          </MapView>
        </View>


        
      </ScrollView>
    </View>
  );
}
