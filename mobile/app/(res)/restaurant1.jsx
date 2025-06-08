import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "../../assets/styles/restaurant1.styles.js";

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
        <Text style={styles.detailBadge}>Asiatique</Text>
       <Text style={styles.detailBadge}>Chinois</Text>
       <Text style={styles.detailBadge}>Vitenamienne</Text>
      <Text style={styles.detailBadge}>Plat conseillé: Crepe Vitenamienne</Text>
      </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Voici une brève description du restaurant. Délicieuses pizzas faites maison.
        </Text>

        
      </ScrollView>
    </View>
  );
}
