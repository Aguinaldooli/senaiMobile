import { Text, ScrollView, View,} from "react-native";
import { useState } from "react";
import styles from "./css/style";
import HeaderImage from "./components/HeaderImage";
import CourseCard from "./components/CourseCard";
import ButtonArea from "./components/ButtonArea";
import CourseModal from "./components/CourseModal";

export default function DashBoard() {

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedCourse, setSelectedCourse] = useState({
    title: "",
    description: "",
    professor: "",
    hours: "",
    image: null
  });

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

        onPress={function () {

          setSelectedCourse({
            title: "React Native",
            description: "Aprenda a criar aplicativos mobile utilizando React Native.",
            professor: "Carlos",
            hours: "40h",
            image: require("../assets/cursoreactnative.png")
          });

          setModalVisible(true);

        }}
      />

      <CourseCard
        title="Power BI"
        describe="Dados e Business Intelligence"
        likes={20}
        image={require("../assets/powerbi.jpg")}

        onPress={function () {

          setSelectedCourse({
            title: "Power BI",
            description: "Aprenda análise de dados e dashboards profissionais.",
            professor: "Fernanda",
            hours: "32h",
            image: require("../assets/powerbi.jpg")
          });

          setModalVisible(true);

        }}
      />

      <CourseCard
        title="IoT"
        describe="Internet das Coisas"
        likes={8}
        image={require("../assets/iot.png")}

        onPress={function () {

          setSelectedCourse({
            title: "IoT",
            description: "Conheça sensores, automação e dispositivos inteligentes.",
            professor: "Ricardo",
            hours: "28h",
            image: require("../assets/iot.png")
          });

          setModalVisible(true);

        }}
      />

      <CourseModal
        visible={modalVisible}

        onClose={function () {
          setModalVisible(false);
        }}

        title={selectedCourse.title}
        description={selectedCourse.description}
        professor={selectedCourse.professor}
        hours={selectedCourse.hours}
        image={selectedCourse.image}
      />

      <ButtonArea text="Sair" href="/login" />

    </ScrollView>
  );
}