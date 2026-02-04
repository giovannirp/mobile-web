import { Pressable, StyleSheet, Text } from 'react-native';

export default function Index({ onPress, title, icons }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icons}
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#b872ff',
    borderRadius: 10,
    padding: 8,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18
  }
})