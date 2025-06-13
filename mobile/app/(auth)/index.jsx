import { Alert, View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Link } from "expo-router";
import styles from "../../assets/styles/login.styles";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons"
import COLORS from "../../constants/colors";
import { useAuthStore } from "../../store/authStore";
import SafeScreen from "../../components/SafeScreen";
import { useRouter } from "expo-router";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const {isLoading, login, isCheckingAuth } = useAuthStore();

    const router = useRouter();

    
    const handleLogin = async () => {
      const result = await login(email, password);

      if(!result.success) Alert.alert("Error", result.error);
    };

    if (isCheckingAuth) return null;

    return (
      <KeyboardAvoidingView
       style={{flex:1}}
       behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
       <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
      <View style={styles.topIllustration}>
            <Image 
              source={require("../../assets/images/login.png")}
              style={styles.illustrationImage}
              resizeMode="cover"
            />
           </View>
    <View style={styles.container}>
        {/* ILLUSTRATION */}
        

           <View style={styles.card}>
           <View style={styles.formContainer}>
             {/* Email */}
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
                      placeholder="Entrez votre email"
                      placeholderTextColor={COLORS.placeholderText}
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                </View> 
              </View>

             {/* Password */}
             <View style={styles.inputGroup}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputContainer}>
                   {/* Left Icon */}
                   <Ionicons 
                     name="lock-closed-outline"
                     size={20}
                     color={COLORS.primary}
                     style={styles.inputIcon}
                   />
                   <TextInput 
                      style={styles.input}
                      placeholder="Entrez votre mot de passe"
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
                      name={showPassword ? "eye-outline" : "eye-off-outline"}
                      size={20}
                      color={COLORS.primary}
                    />

                   </TouchableOpacity>

                </View>
             </View>
             
             <TouchableOpacity style={styles.button} onPress={handleLogin}
             disabled={isLoading}>
                {isLoading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Se connecter</Text>
                )}
             </TouchableOpacity>

             <TouchableOpacity onPress={() => router.push("/(auth)/ForgotPassword")}>
               <Text style={styles.footerText}>Mot de passe oublié ?</Text>
             </TouchableOpacity>
            
            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Vous n’avez pas de compte ?</Text>
                <Link href="/signup" asChild>
                 <TouchableOpacity>
                    <Text style={styles.link}>S’inscrire</Text>
                 </TouchableOpacity>
                </Link>
            </View>

           </View>
           </View>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    
    );
}