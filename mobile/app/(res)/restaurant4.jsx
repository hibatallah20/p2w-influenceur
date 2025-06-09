import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "../../assets/styles/restaurant1.styles.js";
import MapView, { Marker } from 'react-native-maps';

export default function Restaurant4() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* IMAGE AVEC BOUTON */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/postiano.jpg')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.goBackButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* CONTENU */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.restaurantName}>Positano Italian</Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Détails</Text>
        <View style={styles.detailsContainer}>
        <Text style={styles.detailBadge}>Cuisine italienne</Text>
       <Text style={styles.detailBadge}>Pizzas artisanales</Text>
       <Text style={styles.detailBadge}>Pâtes maison</Text>
      <Text style={styles.detailBadge}>Plat conseillé: Lasagnes à la bolognaise</Text>
      </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Régimes spéciaux : Options végétariennes disponibles.{"\n"}
          Repas : Déjeuner, Dîner.{"\n"}
          Fonctionnalités : Réservations en ligne, Terrasse extérieure, Service de vin, Accessible aux personnes à mobilité réduite, Parking à proximité.
        </Text>

         <Text style={styles.sectionTitle}>Localisation</Text>
        <View style={styles.mapContainer}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 34.03745,
              longitude: -5.01309,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: 34.03745,
                longitude: -5.01309,
              }}
              title="Positano"
              description="Voici la localisation du restaurant"
            />
          </MapView>
        </View>

        
      </ScrollView>
    </View>
  );
}
