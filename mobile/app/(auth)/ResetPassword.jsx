import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';
import { useAuthStore } from '../../store/authStore';

const ResetPasswordConfirmation = ({ navigation }) => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { forgotEmail } = useAuthStore();

    const handleResetConfirm = async () => {
        try {
            const response = await axios.post(
                'https://aba1b92a-dc6b-4d7e-8a0f-13dc172b5bf0-00-21h5imnegsexy.spock.replit.dev/api/auth/resetPasswordConfirm',
                {
                    email: forgotEmail,
                    verificationCode: code,
                    password: newPassword,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.data.success) {
                setSuccess('Password changed successfully. You can now login.');
                setTimeout(() => {
                    navigation.navigate('Login');
                }, 2000);
            } else {
                setError('Invalid code or password too weak.');
            }
        } catch (err) {
            console.error(err);
            setError('Error resetting password.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Confirmation Code</Text>
            <TextInput
                label="Reset Code"
                value={code}
                mode="outlined"
                onChangeText={setCode}
                style={styles.input}
            />
            <TextInput
                label="New Password"
                value={newPassword}
                secureTextEntry
                mode="outlined"
                onChangeText={setNewPassword}
                style={styles.input}
            />
            <Button mode="contained" onPress={handleResetConfirm} style={styles.button}>
                Confirm Password Reset
            </Button>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            {success ? <Text style={styles.success}>{success}</Text> : null}
        </View>
    );
};



export default ResetPasswordConfirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    paddingVertical: 8,
  },
  error: {
    marginTop: 12,
    color: 'red',
    textAlign: 'center',
  },
  success: {
    marginTop: 12,
    color: 'green',
    textAlign: 'center',
  },
});
