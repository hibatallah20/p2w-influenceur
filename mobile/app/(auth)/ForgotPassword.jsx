import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';
import { useAuthStore } from '../../store/authStore';
import { useRouter } from "expo-router";


const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { setForgotEmail } = useAuthStore();

   const router = useRouter();

  
 const handleResetPassword = async () => {
  try {
    const response = await axios.post(
      'https://aba1b92a-dc6b-4d7e-8a0f-13dc172b5bf0-00-21h5imnegsexy.spock.replit.dev/api/auth/resetPassword',
      { email },
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (response.data.success) {
      setForgotEmail(email);
      setSuccess(response.data.message);
      navigation.navigate('ResetPassword');
    } else {
      setError(response.data.message || 'Unable to reset password. Please try again.');
    }
  } catch (err) {
    console.error(err);
    setError('An error occurred. Please try again.');
  }
};

  const handleBackToLogin = () => {
    navigation.navigate('Login'); // ou le bon nom d’écran
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        Enter your email address below to reset your password.
      </Text>
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button mode="contained" onPress={handleResetPassword} style={styles.button}>
        Reset Password
      </Button>
      <Button onPress={() => router.push("/(auth)/index")} style={styles.backButton}>
        Back to Login
      </Button>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {success ? <Text style={styles.success}>{success}</Text> : null}
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: '#666',
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 16,
  },
  button: {
    marginTop: 10,
    paddingVertical: 8,
  },
  backButton: {
    marginTop: 12,
  },
  error: {
    marginTop: 16,
    color: 'red',
    textAlign: 'center',
  },
  success: {
    marginTop: 16,
    color: 'green',
    textAlign: 'center',
  },
});
