import { Image, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { ACCOUNT, WARNA_SEKUNDER, WARNA_UTAMA } from "../utils/constant";
import { ProfilePic } from "../assets";

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image source={ProfilePic} style={styles.profileImage} />
        <Text style={styles.userName}>{ACCOUNT.fullName}</Text>
        <Text style={styles.userEmail}>{ACCOUNT.email}</Text>
        <Text style={styles.userBio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Button title="Update Profile" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: WARNA_SEKUNDER,
    height: "100%",
  },
  container: {
    backgroundColor: WARNA_UTAMA,
    width: "100%",
    borderRadius: 10,
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userEmail: {
    fontSize: 16,
  },
  userBio: {
    margin: 20,
    textAlign: "center",
  },
});
