import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "../../assets/styles/restaurant1.styles.js";
import MapView, { Marker } from 'react-native-maps';


export default function Restaurant1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* IMAGE AVEC BOUTON */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/cozy-corner.webp')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.goBackButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* CONTENU */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.restaurantName}>The Cozy Corner</Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Détails</Text>
        <View style={styles.detailsContainer}>
        <Text style={styles.detailBadge}>Cuisine marocaine</Text>
       <Text style={styles.detailBadge}>Cuisine traditionnelle</Text>
       <Text style={styles.detailBadge}>Cuisine méditerranéenne</Text>
      <Text style={styles.detailBadge}>Plat conseillé: Tajine d'agneau aux pruneaux</Text>
      </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Régimes spéciaux : Végétariens bienvenus.{"\n"}
          Repas : Déjeuner, Dîner.{"\n"}
          Fonctionnalités : Plats à emporter, Réservations, Places assises, Accessible en fauteuil roulant, Cartes bancaires acceptées, Service de table.
        </Text>
        {/* LOCALISATION */}
         <Text style={styles.sectionTitle}>Localisation</Text>
        <View style={styles.mapContainer}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 34.28103,
              longitude: -5.01761,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: 34.28103,
                longitude: -5.01761,
              }}
              title="The Cozy Corner"
              description="Voici la localisation du restaurant"
            />
          </MapView>
        </View>

        
      </ScrollView>
    </View>
  );
}
