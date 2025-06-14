import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../../store/authStore';

export default function CustomProfileScreen() {
  const router = useRouter();

  // Récupération du user depuis le store
  const { user, updateUser } = useAuthStore();

  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState(user?.bio || '');
  const [selectedTags, setSelectedTags] = useState(
    Array.isArray(user?.interests) && user.interests.length > 0
      ? user.interests
      : ['Café']
  );
  const [instagram, setInstagram] = useState(user?.instagram || '');
  const [accepted, setAccepted] = useState(false);

  // Affiche user dans console pour debug
  useEffect(() => {
    console.log('User dans CustomProfileScreen:', user);
  }, [user]);

  const tags = [
    { label: 'Restaurant', color: '#38E2C4' },
    { label: 'Bar', color: '#B7C3D0' },
    { label: 'Café', color: '#A98CF8' },
  ];

  const handleTagPress = (tag) => {
    setSelectedTags([tag]);
  };

  const handleUpdateProfile = async () => {
    if (!user || !user.id) {
  Alert.alert('Erreur', 'Utilisateur non connecté.');
  return;
}
    setLoading(true);
    try {
      console.log("Updating user with ID:", user._id);
      const response = await fetch(`https://aba1b92a-dc6b-4d7e-8a0f-13dc172b5bf0-00-21h5imnegsexy.spock.replit.dev/api/auth/update-profile/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bio, instagram, interests: selectedTags }),
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert('Erreur', data.message || 'Erreur lors de la mise à jour');
        return;
      }

      updateUser(data.user || data); // Met à jour user dans le store
      Alert.alert("Profil mis à jour !");
    } catch (error) {
      console.error(error);
      Alert.alert("Erreur lors de la mise à jour");
    } finally {
      setLoading(false);
    }
  };

  const handleAddPress = async () => {
    if (!accepted) {
      Alert.alert('Erreur', 'Veuillez accepter les conditions.');
      return;
    }
    if (!instagram) {
      Alert.alert('Erreur', 'Veuillez ajouter Instagram.');
      return;
    }
    await handleUpdateProfile();
    router.replace("/(tabs)");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
            <TouchableOpacity 
          style={styles.backBtn} 
          onPress={() => router.back()} 
        >
          <Ionicons name="chevron-back" size={26} color="#222" />
        </TouchableOpacity>
        
        
        <TouchableOpacity style={styles.infoBtn}>
          <Ionicons name="information-circle-outline" size={24} color="#222" />
        </TouchableOpacity>
      </View>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarCircle}>
          <Image
            source={{ uri: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=1' }}
            style={styles.avatar}
          />
        </View>
        <TouchableOpacity style={styles.photoBtn}>
          <Text style={styles.photoBtnText}>Choisir une photo</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.bioInput}
        placeholder="Bio"
        placeholderTextColor="#B7C3D0"
        value={bio}
        onChangeText={setBio}
        multiline
      />

      <Text style={styles.helpText}>
        Aidez-nous à trouver ce qui vous intéresse le plus, dans l'ordre que vous désirez*
      </Text>
      <View style={styles.tagsRow}>
        {tags.map((tag) => (
          <TouchableOpacity
            key={tag.label}
            style={[
              styles.tagBtn,
              { backgroundColor: tag.color + '22', borderColor: tag.color },
              selectedTags.includes(tag.label) && { backgroundColor: tag.color },
            ]}
            onPress={() => handleTagPress(tag.label)}
          >
            <Text
              style={[
                styles.tagText,
                selectedTags.includes(tag.label) && { color: '#fff' },
                { color: tag.color },
              ]}
            >
              {tag.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.selectedTagBox}>
  {selectedTags.length > 0 ? (
    <Text style={[styles.selectedTagText, { color: '#A98CF8' }]}>1. {selectedTags[0]}</Text>
  ) : null}
</View>

      <Text style={styles.instagramLabel}>
        Associez votre compte Instagram à <Text style={{ fontWeight: 'bold' }}>P2W</Text> pour vérifier vos stories et remporter des récompenses*
      </Text>
      <View style={styles.instagramInputRow}>
        <FontAwesome name="instagram" size={22} color="#E1306C" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.instagramInput}
          value={instagram}
          onChangeText={setInstagram}
          placeholder="Votre compte Instagram"
          placeholderTextColor="#B7C3D0"
        />
      </View>

      <TouchableOpacity style={styles.addLinkRow}>
        <Ionicons name="add-circle-outline" size={22} color="#38BDF8" />
        <Text style={styles.addLinkText}>Ajoutez autres liens</Text>
      </TouchableOpacity>

      <View style={styles.checkboxRow}>
        <TouchableOpacity onPress={() => setAccepted(!accepted)} style={styles.checkbox}>
          {accepted ? (
            <Ionicons name="checkbox" size={22} color="#38BDF8" />
          ) : (
            <Ionicons name="square-outline" size={22} color="#B7C3D0" />
          )}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          J'accepte les <Text style={{ textDecorationLine: 'underline' }}>politiques</Text> et <Text style={{ textDecorationLine: 'underline' }}>conditions d'utilisations</Text>
        </Text>
      </View>

      <TouchableOpacity 
  style={[styles.addBtn, (!accepted || loading) && styles.disabledBtn]} 
  onPress={handleAddPress}
  disabled={!accepted || loading}
>
  <Text style={styles.addBtnText}>{loading ? "Chargement..." : "Ajouter"}</Text>
</TouchableOpacity>
    </ScrollView>
  );
}





const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F8FAFC',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
  },
  backBtn: {
    padding: 5,
  },
  infoBtn: {
    padding: 5,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarCircle: {
    borderWidth: 3,
    borderColor: '#38BDF8',
    borderRadius: 60,
    padding: 4,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#E4E7EC',
  },
  photoBtn: {
    marginTop: 8,
    backgroundColor: '#0F172A',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 16,
  },
  photoBtnText: {
    color: '#fff',
    fontWeight: '500',
  },
  bioInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E4E7EC',
    color: '#222',
  },
  helpText: {
    color: '#64748B',
    fontSize: 13,
    marginBottom: 10,
  },
  tagsRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tagBtn: {
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginRight: 8,
  },
  tagText: {
    fontSize: 13,
    fontWeight: '500',
  },
  selectedTagBox: {
    backgroundColor: '#F3F2FD',
    borderRadius: 10,
    padding: 8,
    marginBottom: 18,
    alignSelf: 'flex-start',
  },
  selectedTagText: {
    fontWeight: '500',
    fontSize: 14,
  },
  instagramLabel: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 5,
  },
  instagramInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E4E7EC',
    marginBottom: 10,
  },
  instagramInput: {
    flex: 1,
    fontSize: 15,
    color: '#222',
  },
  addLinkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  addLinkText: {
    color: '#38BDF8',
    fontSize: 15,
    marginLeft: 6,
    fontWeight: '500',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 13,
    color: '#64748B',
    flex: 1,
    flexWrap: 'wrap',
  },
  addBtn: {
    backgroundColor: '#0F172A',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    opacity: 1,
  },
  addBtnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
