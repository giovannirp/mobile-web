import { Image, StyleSheet, Text, View } from "react-native";
import Capa from '../../assets/images/capa.png';


export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
        Último Lançamento
      </Text>

      <View style={styles.card}>
        <Image
          source={Capa}
          style={styles.cover}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  sectionTitle: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
    paddingBottom: 8
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cover: {
    width: 120,
    height: 100,
    borderRadius: 4,
    marginRight: 15
  }
});
