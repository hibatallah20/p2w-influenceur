import {View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, ActivityIndicator,Alert,Image, ScrollView} from 'react-native';
import styles from '../../assets/styles/signup.styles';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/colors';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../../store/authStore.js';

export default function Signup() {
  const [step, setStep] = useState('choice'); 

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');

  const { user, isLoading, register } = useAuthStore();
  const router = useRouter();

  const handleSignup = async () => {
    const result = await register(firstname, lastname, username, email, phone, password);
    if (!result.success) Alert.alert('Error', result.error);

  };

  const handleCommercant = () => {
    Alert.alert('Info', "La section Commerçant n'est pas encore disponible.");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <ScrollView
     style={styles.container}               
     contentContainerStyle={{              
     justifyContent: 'center',            
     flexGrow: 1                         
    }}
    >

        <View >
          {step === 'choice' ? (
            // Écran de choix
             <View >
    <Text style={styles.choiceTitle}>Comment souhaitez-vous nous intégrer ?</Text>

    <View style={styles.optionsWrapper}>
      <TouchableOpacity style={styles.influencerBox} onPress={() => setStep('form')}>
        <Text style={styles.optionText}>INFLUENCEUR</Text>
        {/* Tu peux ajouter une icône avion ici */}
      </TouchableOpacity>

      <TouchableOpacity style={styles.commercantBox} onPress={handleCommercant}>
        <Text style={styles.optionText}>COMMERÇANT</Text>
        {/* Tu peux ajouter une icône fourchette/couteau ici */}
      </TouchableOpacity>
    </View>

    <View style={styles.infoBox}>
      <Text style={styles.infoText}>
        Pour créer un compte influenceur, vous devrez connecter votre compte Instagram.
      </Text>
    </View>

    <TouchableOpacity onPress={() => router.back()}>
    <Text style={styles.loginText}>
    Vous avez déjà un compte ? 
    <Text style={styles.loginLink}>Se connecter</Text>
    
  </Text>
</TouchableOpacity>
  </View >
          ) : (
            // Formulaire existant inchangé
            <>
             
            <Image 
              source={require("../../assets/images/p2w.png")}
              style={styles.illustrationImage}
              resizeMode="contain"
            />
           
             <Text style={styles.subtitle}>Rejoignez notre communauté exclusive!</Text>
            <View style= {styles.card}>
             <View style={styles.header}>
               
              </View>

              <View style={styles.formContainer}>
                {/* FIRSTNAME INPUT */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Prénom</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Doe"
                      placeholderTextColor={COLORS.placeholderText}
                      value={firstname}
                      onChangeText={setFirstname}
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                {/* LASTNAME INPUT */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Nom</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="John"
                      placeholderTextColor={COLORS.placeholderText}
                      value={lastname}
                      onChangeText={setLastname}
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                {/* USERNAME INPUT */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Identifiant</Text>
                  <View style={styles.inputContainer}>
                    <Ionicons
                      name="person-outline"
                      size={20}
                      color={COLORS.primary}
                      style={styles.inputIcon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Johndoe"
                      placeholderTextColor={COLORS.placeholderText}
                      value={username}
                      onChangeText={setUsername}
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                {/* EMAIL INPUT */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Email</Text>
                  <View style={styles.inputContainer}>
                    <Ionicons
                      name="mail-outline"
                      size={20}
                      color={COLORS.primary}
                      style={styles.inputIcon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="johndoe@gmail.com"
                      value={email}
                      placeholderTextColor={COLORS.placeholderText}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                {/* PHONE NUMBER INPUT */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Numéro de téléphone</Text>
                  <View style={styles.inputContainer}>
                    <Ionicons
                      name="call-outline"
                      size={20}
                      color={COLORS.primary}
                      style={styles.inputIcon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="00-00-00-00-00"
                      value={phone}
                      placeholderTextColor={COLORS.placeholderText}
                      onChangeText={setPhone}
                      keyboardType="phone-pad"
                    />
                  </View>
                </View>

                {/* PASSWORD INPUT */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Mot de passe</Text>
                  <View style={styles.inputContainer}>
                    <Ionicons
                      name="lock-closed-outline"
                      size={20}
                      color={COLORS.primary}
                      style={styles.inputIcon}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="******"
                      placeholderTextColor={COLORS.placeholderText}
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                      style={styles.eyeIcon}
                    >
                      <Ionicons
                        name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                        size={20}
                        color={COLORS.primary}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* SIGNUP BUTTON */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSignup}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text style={styles.buttonText}>S’inscrire</Text>
                  )}
                </TouchableOpacity>

                {/* Footer */}
                <View style={styles.footer}>
                  <Text style={styles.footerText}>Vous avez déjà un compte?</Text>
                  <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.link}>Se connecter</Text>
                  </TouchableOpacity>
                </View>
            </View> 
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}