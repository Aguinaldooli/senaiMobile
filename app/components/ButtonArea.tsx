import { View } from "react-native";
import styles from "../css/style";
import { Link } from "expo-router";
import Button from "./Button";

type ButtonAreaProps = {
  text: string;
  href?: string;
};

export default function ButtonArea({ text, href = "" }: ButtonAreaProps) {
  return (
    <View>
      <Link href={href} style={styles.botao}>
        <Button>{text}</Button>
      </Link>
    </View>
  );
}