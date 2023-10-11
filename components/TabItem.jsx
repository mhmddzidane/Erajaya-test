import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { IconAkun, IconAkunActive, IconHome, IconHomeActive } from "../assets";
import { WARNA_DISABLE, WARNA_SEKUNDER } from "../utils/constant";

const TabItem = ({ onPress, onLongPress, isFocused, label }) => {
  const Icon = () => {
    if (label === "Home") return isFocused ? <IconHomeActive /> : <IconHome />;

    if (label === "Profile")
      return isFocused ? <IconAkunActive /> : <IconAkun />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: (isFocused) => ({
    fontSize: 13,
    color: isFocused ? WARNA_SEKUNDER : WARNA_DISABLE,
    marginTop: 8,
  }),
});
