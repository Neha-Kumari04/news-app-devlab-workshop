import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NewsCart from "./NewsCart";

const Category = () => {
  return (
    <>
      {/* horizontal category */}
      <View style={styles.mainConatiner}>
        <Text style={styles.textStyle}>All</Text>
        <Text style={styles.textStyle}>Sports</Text>
        <Text style={styles.textStyle}>Education</Text>
        <Text style={styles.textStyle}>Health</Text>
      </View>
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  mainConatiner: {
    marginTop: 40,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
  },
  textStyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});
