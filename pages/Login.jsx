import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";
import { QleapLogo } from "../assets";
import { WARNA_SEKUNDER, WARNA_UTAMA } from "../utils/constant";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const validEmail = "dane@gmail.com";
    const validPassword = "password";

    if (email === validEmail && password === validPassword) {
      navigation.replace("App");
    } else {
      Alert.alert("Login Failed", "Invalid username or password.");
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image source={QleapLogo} style={styles.logo} />
        <Text style={styles.title}>Sign in using your account</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder={"Email Address"}
          style={styles.input}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder={"Password"}
          style={styles.input}
          secureTextEntry={true}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            title="Sign in"
            onPress={handleLogin}
            style={{ backgroundColor: WARNA_SEKUNDER }}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 60,
    resizeMode: "contain",
  },
  page: {
    padding: 40,
    backgroundColor: WARNA_UTAMA,
    height: "100%",
  },
  container: {
    marginTop: 170,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  label: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
  },
  button: {
    marginTop: 90,
  },
});
