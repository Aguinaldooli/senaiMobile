import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import styles from "../css/style";

type buttonProps = {
    children: React.ReactNode;
}

export default function Button(props: buttonProps) {
    return (
        <View style={styles.btn}>
            <Text style={styles.entrar}>{props.children}</Text>
        </View>
    )
}
