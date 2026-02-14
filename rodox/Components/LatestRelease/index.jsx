import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Capa from '../../assets/images/capa.png';


export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
        Últimos Lançamentos
      </Text>

      <View style={styles.card}>
        <Image
          source={Capa}
          style={styles.cover}
        />

        <View style={styles.info}>
          <Text style={styles.title}>Rodox - O Inimigo</Text>
          <Text style={styles.year}>2025</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>▶ Ouvir</Text>
          </TouchableOpacity>

        </View>

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
  },
  info: {
    flex: 1
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }, 
  year: {
    color: '#888',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#c40000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
