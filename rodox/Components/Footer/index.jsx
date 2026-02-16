import { StyleSheet, Text, View } from 'react-native';


export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        © 2026 Rodox - Todos os direitos reservados.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    alignItems: 'center',
  },
  text: {
    color: "#ffff",
  },
});
