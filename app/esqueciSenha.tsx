import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import styles from "./css/style";
import FormField from "./components/FormField";
import HeaderImage from "./components/HeaderImage";
import ButtonArea from "./components/ButtonArea";
import BottomLinks from "./components/BottomLinks";

export default function EsqueciSenha() {
  return (
    <View style={styles.container}>
      <HeaderImage />

      <View style={styles.form}>
        <FormField
          placeholder="Insira seu email"
          label="Email"
          secure={false}
        />

        <BottomLinks links={[{text: "Voltar para login", href: "/login"}]} />
      </View>

      <ButtonArea text="ENVIAR EMAIL" />

      <StatusBar style="auto" />
    </View>
  );
}
