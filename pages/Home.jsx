import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import {
  TRAINING,
  WARNA_ABU_ABU,
  WARNA_SEKUNDER,
  WARNA_UTAMA,
} from "../utils/constant";

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={styles.hi}>Hi! Zidane</Text>
        <Text style={styles.text}>HR SUPER APPS</Text>
        <Text style={styles.subtext}>
          satu tempat untuk penuhi seluruh kebutuhanmu!
        </Text>
        <View style={styles.featureList}>
          <View style={styles.feature}></View>
          <View style={styles.feature}></View>
          <View style={styles.feature}></View>
          <View style={styles.feature}></View>
          <View style={styles.feature}></View>
          <View style={styles.feature}></View>
          <View style={styles.feature}></View>
          <View style={styles.feature}></View>
        </View>
        <Text style={styles.text}>UPCOMING ERAJAYA EVENT</Text>
        <Carousel />
        <Text style={styles.text}>ERACREW TRAINING</Text>
        <View style={styles.training}>
          {TRAINING.map((training, index) => (
            <Card
              key={index}
              image={training.image}
              title={training.title}
              rate={training.rate}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: WARNA_SEKUNDER,
    height: "100%",
  },

  hi: {
    color: WARNA_UTAMA,
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
  text: {
    color: WARNA_UTAMA,
    fontSize: 17,
    marginTop: 15,
    fontWeight: "bold",
  },
  subtext: {
    color: WARNA_UTAMA,
    fontSize: 15,
    marginTop: 10,
  },
  featureList: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  feature: {
    marginTop: 20,
    backgroundColor: WARNA_UTAMA,
    width: 60,
    borderRadius: 10,
    height: 60,
    margin: 5,
  },
  training: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
