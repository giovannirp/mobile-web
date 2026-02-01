import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('./pomodoro.png')
  },
  {
    id: 'focus',
    initialValue: 5,
    image: require('./short.png')
  },
  {
    id: 'focus',
    initialValue: 25,
    image: require('./long.png')
  }
]

export default function Index() {

  const [timerType, settimerType] = useState(pomodoro[0])

  return (
      <View
        style={styles.container}
      >
        <Image source={timerType.image} />
        <View style={styles.actions}>
          <View style={styles.content}>
              <Pressable style={styles.contextButtonActive}>
                <Text style={styles.contextButtonText}>
                  Foco
                </Text>
              </Pressable>
              <Pressable>
                <Text style={styles.contextButtonText}>
                  Pausa curta
                </Text>
              </Pressable>
              <Pressable>
                <Text style={styles.contextButtonText}>
                  Pausa longa
                </Text>
              </Pressable>
            </View>
          <Text style={styles.timer}>
            { new Date(timerType.initialValue * 1000).toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit'})}
          </Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Começar</Text>
          </Pressable>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Projeto fictício e sem fins comerciais. </Text>
            <Text style={styles.footerText}>Desenvolvido por Alura. </Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
    content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  contextButtonText: {
    fontSize: 12.2,
    color: '#fff',
    padding: 8
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8
  },
  text: {
    color: '#fff'
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  },
  timer: {
    fontSize: 54,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#b872ff',
    borderRadius: 10,
    padding: 8
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18
  },
  footer: {
    width: '100%'
  },
  footerText: {
    textAlign: 'center',
    color: '#98a0a8',
    fontSize: 12.5
  }
});