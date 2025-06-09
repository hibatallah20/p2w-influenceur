import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "../../assets/styles/bar1.styles.js";
import MapView, { Marker } from 'react-native-maps';

export default function Bar1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* IMAGE AVEC BOUTON */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/pub-house.webp')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.goBackButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* CONTENU */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.restaurantName}>Pub House</Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Détails</Text>
        <View style={styles.detailsContainer}>
         <Text style={styles.detailBadge}>Bar à bières</Text>
         <Text style={styles.detailBadge}>Cocktails variés</Text>
         <Text style={styles.detailBadge}>Ambiance musicale</Text>
         <Text style={styles.detailBadge}>Plat conseillé: Planche apéritive</Text>
      </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Régimes spéciaux : Snacks végétariens disponibles.{"\n"}
          Repas : Apéritifs, Soirées.{"\n"}
          Fonctionnalités : Happy hour, Wi-Fi gratuit, Terrasse extérieure, Service au bar, Animations régulières.
        </Text>

        <Text style={styles.sectionTitle}>Localisation</Text>
        <View style={styles.mapContainer}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 34.10547,
              longitude: -5.01620,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: 34.10547,
                longitude: -5.01620,
              }}
              title="Pub House"
              description="Voici la localisation du Bar"
            />
          </MapView>
        </View>

        
      </ScrollView>
    </View>
  );
}
