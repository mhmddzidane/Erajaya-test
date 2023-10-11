import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { Banner1, Banner2, Banner3 } from "../assets";

const Carousel = () => {
  return (
    <View style={{ height: 200, marginTop: 20 }}>
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
        <View style={styles.slide1}>
          <Image source={Banner1} style={styles.banner} />
        </View>
        <View style={styles.slide1}>
          <Image source={Banner2} style={styles.banner} />
        </View>
        <View style={styles.slide1}>
          <Image source={Banner3} style={styles.banner} />
        </View>
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    width: 350,
    height: 230,
    resizeMode: "contain",
  },
});
