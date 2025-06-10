import React, { useState, useRef, useEffect } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, 
  Image, ScrollView, StyleSheet, Platform 
} from 'react-native';

const users = {
  influencer: {
    id: 1,
    name: 'Influenceur',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    align: 'right',
    color: '#003348',
  },
  merchant: {
    id: 2,
    name: 'Commerçant',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
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
  const scrollViewRef = useRef();

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages(prevMessages => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        text: input.trim(),
        user: currentUser,
        date: new Date(),
      },
    ]);
    setInput('');
    setCurrentUser(currentUser.id === users.influencer.id ? users.merchant : users.influencer);
  };


  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#f8fafd' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat Room</Text>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.chatBox}
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
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
          returnKeyType="send"
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 15,
    backgroundColor: '#003348',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#004f6f',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom:20,
  },
  chatBox: {
    flex: 1,
    backgroundColor: '#f8fafd',
  },
  messageContainer: {
    marginBottom: 12,
    maxWidth: '80%',
    alignItems: 'flex-start',
  },
  bubble: {
    borderRadius: 16,
    padding: 12,
    maxWidth: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 6,
    opacity: 0.85,
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  inputBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: '#f0f4f8',
    color: '#000',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#003348',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
