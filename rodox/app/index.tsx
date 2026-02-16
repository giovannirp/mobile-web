import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LatestRelease from "../Components/LatestRelease";
import Menu from "../Components/Menu";
import SocialMedia from "../Components/SocialMedia";
import UpcomingShows from "../Components/UpcomingShows";

export default function index() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Menu />
      <Banner />
      <LatestRelease />
      <UpcomingShows />
      <SocialMedia />
      <Footer />
    </ScrollView>
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
