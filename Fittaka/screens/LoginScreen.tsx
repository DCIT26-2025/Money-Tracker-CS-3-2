import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons"; // For Google icon

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <LinearGradient
      colors={["#6a0dad", "#1e1e30"]} // Purple grayscale gradient
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require("../assets/images/logo.png")} // Update the path based on your project structure
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Fittaka</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#b8a9c9" // Subtle lavender color for placeholder
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#b8a9c9"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Google Login Button */}
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => {
            console.log("Google Login Pressed");
          }}
        >
          <FontAwesome name="google" size={20} color="#EA4335" />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text style={styles.link}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 2, // Moves everything slightly upward
  },
  logo: {
    width: 300,
    height: 300,
    position: "relative", // Ensures the title can overlap
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    position: "absolute", // Makes the text overlap the logo
    bottom: 440, // Adjusts the overlap height
    textAlign: "center",
  },
  label: {
    color: "#e3cfff",
    fontSize: 18,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    backgroundColor: "#3e0d57",
    color: "#ffffff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#7c5295",
  },
  button: {
    backgroundColor: "#8c00a8",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    width: "90%",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 12,
    width: "90%",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  googleButtonText: {
    color: "#757575",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  link: {
    color: "#d4a5ff",
    fontSize: 16,
    marginTop: 15,
    textDecorationLine: "underline",
  },
});



export default LoginScreen;
