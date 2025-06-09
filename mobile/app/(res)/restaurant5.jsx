import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "../../assets/styles/restaurant1.styles.js";
import MapView, { Marker } from 'react-native-maps';

export default function Restaurant5() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* IMAGE AVEC BOUTON */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/duplex.jpg')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.goBackButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* CONTENU */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.restaurantName}>Duplex Steakhouse</Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Détails</Text>
        <View style={styles.detailsContainer}>
        <Text style={styles.detailBadge}>Steakhouse</Text>
       <Text style={styles.detailBadge}>Viandes grillées</Text>
       <Text style={styles.detailBadge}>Spécialités américaines</Text>
      <Text style={styles.detailBadge}>Plat conseillé: Côte de bœuf grillée</Text>
      </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Régimes spéciaux : Options sans gluten et keto disponibles.{"\n"}
          Repas : Déjeuner, Dîner.{"\n"}
          Fonctionnalités : Bar à cocktails, Réservations recommandées, Parking privé, Service en salle, Musique live certains soirs.
        </Text>

         <Text style={styles.sectionTitle}>Localisation</Text>
        <View style={styles.mapContainer}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 34.04082,
              longitude: -4.99919,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: 34.04082,
                longitude: -4.99919,
              }}
              title="Duplex Steak"
              description="Voici la localisation du restaurant"
            />
          </MapView>
        </View>

        
      </ScrollView>
    </View>
  );
}
