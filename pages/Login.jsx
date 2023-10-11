import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { QleapLogo } from "../assets";
import { ACCOUNT, WARNA_UTAMA } from "../utils/constant";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === ACCOUNT.email && password === ACCOUNT.password) {
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
          <Button title="Sign in" onPress={handleLogin} />
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
