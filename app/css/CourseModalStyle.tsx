import { StyleSheet } from "react-native";

const courseModalStyles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalContent: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 5,
  },

  modalImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 15,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  modalDescription: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },

  modalInfoArea: {
    marginTop: 20,
    gap: 10,
  },

  modalInfo: {
    fontSize: 16,
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  modalPrimaryButton: {
    backgroundColor: "#dd0000",
    padding: 12,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },

  modalSecondaryButton: {
    backgroundColor: "#555",
    padding: 12,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

    likeText: {
    color: "#fff",
    fontWeight: "bold",
  },


});

export default courseModalStyles;