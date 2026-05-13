import { View, Image } from "react-native";
import styles from "../css/style";

export default function HeaderImage() {
  return (
    <View>
      <Image
        style={styles.img}
        source={require("../../assets/sesisenai.png")}
      />
    </View>
  );
}