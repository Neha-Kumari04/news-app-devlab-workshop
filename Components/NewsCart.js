import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import NewsImage from "../assets/NewsImage.jpg";
const NewsCart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageConatiner}>
        <Image source={NewsImage} style={styles.image} />
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.title}>
          hello this is a title .very cool titlehello this is a title .very cool
          title
        </Text>
        <View style={styles.row}>
          <Text style={styles.otherDesc}>abc</Text>
          <Text style={styles.otherDesc}>abc</Text>
        </View>
      </View>
    </View>
  );
};

export default NewsCart;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: "row",
    backgroundColor: "#005585",
    borderRadius: 10,
    borderColor: "#005585",
    marginVertical: 10,
  },
  imageConatiner: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#005585",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  descContainer: {
    width: "70%",
    padding: 5,
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  otherDesc: {
    color: "#c5c5c5",
  },
});
