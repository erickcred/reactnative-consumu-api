import React from "react";
import { Text, View, Button, Image } from "react-native";

import { styles } from "./styles";
import logo from "../../../assets/logo.png";
import Divider from "../Divider";

export default function CardView() {

  const renderLogoBox = () => {
    return (
      <View style={styles.logoContainer}>
        <Image style={styles.imageLogo} source={logo} />
      </View>
    );
  }

  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>MODEL</Text>
    </View>
  )

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      
      <Divider />
      {renderCarDetails()}
    </View>
  )
}