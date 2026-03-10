import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function index() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.item}>
          <Link href="/">
          Home
          </Link>
          </Text>
      </TouchableOpacity>

      <Text style={styles.separator}>|</Text>

      <TouchableOpacity>
        <Text style={styles.item}>
          <Link href="/sobre">Sobre</Link>
        </Text>
      </TouchableOpacity>

      <Text style={styles.separator}>|</Text>

      <TouchableOpacity>
        <Text style={styles.item}>Contato</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    paddingVertical: 12,
  },
  item: {
    color: "#ccc",
    fontSize: 18,
    fontWeight: '600'
  },
  separator: {
    color: "#555",
    marginHorizontal: 10,
    fontSize: 16
  },
});
