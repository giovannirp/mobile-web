import { Entypo, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.title}>Siga nas Redes</Text>

      <View style={styles.iconsContainer}>
        <FontAwesome name="instagram" size={40} color="#fff" />
        <Entypo name="youtube" size={50} color="#ff0000" />
        <FontAwesome name="spotify" size={50} color="#fff" />
      </View>

      <View style={styles.line} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    color: "#ffff",
    fontSize: 18,
    marginBottom: 20
  },
  line: {
    height: 1,
    backgroundColor: '#333',
    width: '100%',
    marginVertical: 15
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30
  }
});