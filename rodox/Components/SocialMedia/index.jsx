import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

export default function index() {
  const openLink = (url) => {
    Linking.openURL(url);
  }

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.title}>Siga nas Redes</Text>

      <View style={styles.iconsContainer}>
        <Pressable onPress={() => openLink('https://instagram.com')}>
          <FontAwesome name="instagram" size={40} color="#fff" />
        </Pressable>
        <Pressable onPress={() => openLink('https://youtube.com')}>
          <Entypo name="youtube" size={50} color="#ff0000" />
        </Pressable>
        <Pressable onPress={() => openLink("https://spotify.com")}>
          <FontAwesome name="spotify" size={50} color="#09c021" />
        </Pressable>
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