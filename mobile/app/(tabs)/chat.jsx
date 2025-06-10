import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,KeyboardAvoidingView, Image, ScrollView, StyleSheet, Platform } from 'react-native';
import SafeScreen from "../../components/SafeScreen";

const users = {
  influencer: {
    id: 1,
    name: 'Influenceur',
    avatar: 'https://placeimg.com/40/40/people',
    align: 'right',
    color: '#003348',
  },
  merchant: {
    id: 2,
    name: 'Commerçant',
    avatar: 'https://placeimg.com/40/40/tech',
    align: 'left',
    color: '#18c5d9',
  },
};

const initialMessages = [
  {
    id: 1,
    text: 'Bonjour, je suis influenceur et je souhaite collaborer.',
    user: users.influencer,
    date: new Date(Date.now() - 1000 * 60),
  },
  {
    id: 2,
    text: 'Bonjour, comment puis-je vous aider ?',
    user: users.merchant,
    date: new Date(),
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [currentUser, setCurrentUser] = useState(users.influencer);

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        text: input,
        user: currentUser,
        date: new Date(),
      },
    ]);
    setInput('');
    // Alterne l'utilisateur pour simuler une discussion
    setCurrentUser(currentUser.id === users.influencer.id ? users.merchant : users.influencer);
  };

  return (
    <KeyboardAvoidingView
           style={{flex:1}}
           behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
    <View style={styles.container}>
      <ScrollView 
        style={styles.chatBox}
        contentContainerStyle={{ paddingVertical: 16 }}
      >
        {messages.map(msg => (
          <View
            key={msg.id}
            style={[
              styles.messageContainer,
              { 
                flexDirection: msg.user.align === 'right' ? 'row-reverse' : 'row',
                alignSelf: msg.user.align === 'right' ? 'flex-end' : 'flex-start',
              }
            ]}
          >
            <Image source={{ uri: msg.user.avatar }} style={styles.avatar} />
            <View
              style={[
                styles.bubble,
                { 
                  backgroundColor: msg.user.color,
                  marginLeft: msg.user.align === 'right' ? 0 : 8,
                  marginRight: msg.user.align === 'right' ? 8 : 0,
                }
              ]}
            >
              <Text style={styles.name}>{msg.user.name}</Text>
              <Text style={styles.messageText}>{msg.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Écrivez un message..."
          placeholderTextColor="#888"
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafd',
  },
  chatBox: {
    flex: 1,
    paddingHorizontal: 16,
  },
  messageContainer: {
    marginBottom: 12,
    maxWidth: '80%',
    alignItems: 'flex-start',
  },
  bubble: {
    borderRadius: 16,
    padding: 10,
    maxWidth: '100%',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    opacity: 0.8,
  },
  messageText: {
    color: '#fff',
    fontSize: 15,
  },
  inputBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    padding: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 0,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f4f8',
    marginRight: 8,
    color: '#000',
  },
  button: {
    backgroundColor: '#003348',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});