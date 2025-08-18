import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

export default function BuyButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.button}>
        <AntDesign name="shoppingcart" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Buy this</Text>
      </View>
    </TouchableOpacity>
  );
}