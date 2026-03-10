import { ScrollView, StyleSheet, Text } from 'react-native';
import Header from "../Components/Header";
import Menu from "../Components/Menu";



export default function sobre() {
  return (
  <ScrollView style={styles.container}>
    <Header />
    <Menu />
    <Text>
      Sobre
    </Text>
  </ScrollView>
  )
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