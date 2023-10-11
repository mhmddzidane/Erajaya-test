import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { StarIcon } from "../assets";
import { WARNA_UTAMA } from "../utils/constant";

const Card = ({ image, title, rate }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.section}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>06 June 2023</Text>
        <View style={styles.ratingContainer}>
          {Array.from({ length: rate }).map((_, index) => (
            <StarIcon key={index} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: WARNA_UTAMA,
    width: "45%",
    height: 200,
    position: "relative",

    marginTop: 10,
  },
  cardImage: {
    width: "100%",
    height: 100,
    position: "absolute",
    resizeMode: "cover",
  },
  section: {
    padding: 10,
    marginTop: "auto",
  },
  date: {
    marginTop: 6,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
