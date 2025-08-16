import React from "react";
import { Text, View, Button, Image } from "react-native";

import { styles } from "./styles";
import logo from "../../../assets/logo.png";

export default function CardView() {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.imageLogo}
          source={logo}
        />
      </View>
    </View>
  )
}