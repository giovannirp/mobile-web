import { Image, StyleSheet, View } from 'react-native';
import Banner from "../../assets/images/banner.png";

export default function index() {
  return (
    <View>
      <Image
        style={styles.banner}
        source={Banner}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  banner: {
    width: 400,
    height: 180,
  },
  texto: {
    color: "#ffff",
  },
});
