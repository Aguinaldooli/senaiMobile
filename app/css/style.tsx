import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dashboardContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 30,
  },
  input: {
    padding: 10,
    margin: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    width: 350,
  },
  esquerda: {
    width: 350,
    textAlign: "left",
  },
  direita: {
    width: 350,
    textAlign: "right",
    fontWeight: 'bold'
  },

  form: {
    justifyContent: "center",
    width: 350,
    marginTop: 30,
  },

  btn: {
    width: 200,
    height: 50,
    backgroundColor: "#dd0000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },

  img: {
    width: 300,
    height: 45,
    marginTop: 40,
  },

  baixo: {
    flexDirection: "column",
    alignItems: "flex-end",
  },

  entrar: {
    color: "white",
    fontWeight: "bold",
  },

  contBaixo: {
    width: 350,
    height: 40,
    justifyContent: "flex-end",
    marginTop: 10,
  },

  botao: {
    marginTop: 20,
  },

  card: {
    width: 350,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  cardDescribe: {
    marginTop: 10,
    color: "#555",
  },

  likeButton: {
    marginTop: 15,
    backgroundColor: "#dd0000",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  likeText: {
    color: "#fff",
    fontWeight: "bold",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
});

export default styles;
