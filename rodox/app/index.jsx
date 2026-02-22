import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Footer from "../Components/Footer";
import SocialMedia from "../Components/SocialMedia";

export default function index({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')} // sua textura aqui
      style={styles.container}
      resizeMode="cover"
    >

        <StatusBar style="light" />

        <View style={styles.overlay}>
          <View style={styles.centerContent}>
            <Text style={styles.logo}>RODOX</Text>


            <Text style={styles.subtitle}>O peso que transforma.</Text>

            <Link href="/home" asChild>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>ENTRAR te</Text>
              </TouchableOpacity>
            </Link>


          </View>
        </View>
        <SocialMedia />
        <Footer />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  logo: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "bold",
  },
  largLogo: {
    width: 180,
    height: 180
  },  
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // 👈 diminui aqui
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#c40000",
    paddingVertical: 16,
    paddingHorizontal: 70,
    borderRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  footer: {
    color: "#555",
    fontSize: 13,
    textAlign: "center",
  },
});
