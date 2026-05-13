import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import styles from "./css/style";
import { Link } from "expo-router";
import FormField from "./components/FormField";
import HeaderImage from "./components/HeaderImage";
import ButtonArea from "./components/ButtonArea";
import BottomLinks from "./components/BottomLinks";

export default function Login() {
  return (
    <View style={styles.container}>
      <HeaderImage />
      <View style={styles.form}>
        <FormField
          placeholder="Insira o E-mail"
          label="Login"
          secure={false}
        />
        <FormField
          placeholder="Insira a Senha"
          label="Senha"
          secure={true}
        />
        <BottomLinks links={[{text: "Cadastrar", href: "/cadastro"}, {text: "Esqueci a senha", href: "/esqueciSenha"}]} />
      </View>
      
      <ButtonArea text="ENTRAR" href="/dashboard" />
      <StatusBar style="auto" />
    </View>
  );
}
