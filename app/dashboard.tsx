import { View, Text, ScrollView } from "react-native";
import styles from "./css/style";
import HeaderImage from "./components/HeaderImage";
import CourseCard from "./components/CourseCard";
import ButtonArea from "./components/ButtonArea";

export default function DashBoard() {
  return (
    <ScrollView contentContainerStyle={styles.dashboardContainer}>
      <HeaderImage />

      <Text style={styles.titulo}>
        Cursos em Destaque
      </Text>

      <CourseCard
        title="React Native"
        describe="Desenvolvimento Mobile"
        likes={12}
        image={require("../assets/cursoreactnative.png")}
      />

      <CourseCard
        title="Power BI"
        describe="Dados e Business Intelligence"
        likes={20}
        image={require("../assets/powerbi.jpg")}
      />

      <CourseCard
        title="IoT"
        describe="Internet das Coisas"
        likes={8}
        image={require("../assets/iot.png")}
      />
      <ButtonArea text="Sair" href="/login" />
    </ScrollView>
  );
}