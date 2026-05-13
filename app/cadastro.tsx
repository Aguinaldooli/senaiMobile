import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import styles from "./css/style";
import FormField from "./components/FormField";
import HeaderImage from "./components/HeaderImage";
import ButtonArea from "./components/ButtonArea";
import BottomLinks from "./components/BottomLinks";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <HeaderImage />

      <View style={styles.form}>
        <FormField
          placeholder="Insira seu nome"
          label="Nome"
          secure={false}
        />
        <FormField
          placeholder="Insira seu email"
          label="Email"
          secure={false}
        />
        <FormField
          placeholder="Crie uma senha"
          label="Senha"
          secure={true}
        />

        <BottomLinks links={[{text: "Voltar para login", href: "/login"}]} />
      </View>

      <ButtonArea text="CADASTRAR" />

      <StatusBar style="auto" />
    </View>
  );
}
