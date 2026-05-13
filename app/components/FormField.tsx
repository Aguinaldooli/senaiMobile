import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import styles from "../css/style";

type propsFormField = {
    placeholder: string;
    label: string;
    secure: boolean;
}

export default function FormField(props: propsFormField) {
    return (
        <View>
            <Text style={styles.esquerda}>{props.label}</Text>
            <TextInput placeholder={props.placeholder} style={styles.input} secureTextEntry={props.secure} />
        </View>
    );
}

