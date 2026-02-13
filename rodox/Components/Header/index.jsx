import { Image, StyleSheet, View } from 'react-native';
import Logo from '../../assets/images/rodox_white.png';

export default function index() {
  return (
    <View style={styles.header}>
      <Image
        source={Logo}
        style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 180,
  },
  texto: {
    color: "#ffff",
  },
});