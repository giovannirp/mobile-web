import React from "react";
import { StyleSheet, View } from "react-native";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import LatestRelease from "../Components/LatestRelease";
import Menu from "../Components/Menu";

export default function index() {
  return (
    <View style={styles.container}>
      <Header />
      <Menu />
      <Banner />
      <LatestRelease />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  texto: {
    color: "#ffff",
  },
});
