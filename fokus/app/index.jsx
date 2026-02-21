import { Image, StyleSheet, Text, View } from 'react-native';
import FokusButtonNew from "../Components/FokusButtonNew";

export default function index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua{'\n'} produtividade,{'\n'}
          <Text style={styles.bold}>
            mergulhe no que{'\n'} importa
          </Text>
        </Text>

        <Image source={require('../assets/images/home.png')} />
        <FokusButtonNew 
          title="Quero iniciar" 
          onPress={() => console.log('navegar')} 
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto fictício e sem fins comerciais. </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura. </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  inner: {
    gap: 16
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 26
  },
  bold: {
    fontWeight: 'bold'
  },
  footer: {
    width: '100%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98a0a8',
    fontSize: 12.5
  }
});