import React, { useEffect, useState } from "react";
import { Text, View, Button, Image } from "react-native";

import { styles } from "./styles";
import logo from "../../../assets/logo.png";
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import BuyButton from "../BuyButton";
import { loadCarData, rendleNextItem, rendlePreviusItem } from "./acteions";
import { ICarModel } from "./props";

export default function CardView() {
  const [carData, setCarData] = useState<ICarModel | null>(null);
  const [id, setId] = useState<number>(1);

  const renderLogoBox = () => {
    return (
      <View style={styles.logoContainer}>
        <Image style={styles.imageLogo} source={logo} />
      </View>
    );
  };

  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image 
      style={styles.image}
      source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`}}
    />
  );

  const renderPriceControls = () => (
    <View style={styles.priceLabel}>
      <Button
        title="<"
        color="#01a6b3"
        onPress={async () => await rendlePreviusItem(carData, setCarData)}
      />
      <Text style={styles.priceText}>{carData?.price}</Text>
      <Button
        title=">"
        color="#01a6b3"
        onPress={async () => await rendleNextItem(carData, setCarData)} />
    </View>
  );

  useEffect(() => {
    (async () => {
      await loadCarData(id, setCarData);
    })();
  }, [])
  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}

      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  )
}