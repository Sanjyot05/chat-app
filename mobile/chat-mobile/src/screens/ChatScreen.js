import React, { useEffect, useState, useRef } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import io from "socket.io-client";
import API from "../api/api";

export default function ChatScreen({ route }) {
  const { otherUser, currentUser, token } = route.params;
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const socketRef = useRef();

  const SERVER_URL = "http://192.168.0.105:4000"; // Your backend

  useEffect(() => {
    socketRef.current = io(SERVER_URL);

    socketRef.current.emit("user:connect", { userId: currentUser._id });

    socketRef.current.on("message:new", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = async () => {
    if (!text.trim()) return;
    socketRef.current.emit("message:send", {
      senderId: currentUser._id,
      text,
      conversationId: otherUser._id, // simplified for demo
    });
    setText("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <Text style={item.sender === currentUser._id ? styles.me : styles.them}>
            {item.text}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        placeholder="Type a message..."
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  me: { alignSelf: "flex-end", backgroundColor: "#DCF8C6", padding: 10, margin: 5 },
  them: { alignSelf: "flex-start", backgroundColor: "#ECECEC", padding: 10, margin: 5 },
});
