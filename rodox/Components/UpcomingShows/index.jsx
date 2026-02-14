import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import data from '../../data/shows.json';

export default function Index() {

  const [shows, setShows] = useState([]);

  useEffect(() => {
    setShows(data.shows);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próximos Shows</Text>

      {shows.map((show) => (
        <View key={show.id} style={styles.showItem}>
            <Text style={styles.icon}>📍</Text>
            <Text style={styles.text}>
              {show.cidade} - {show.data}
            </Text>
        </View>
      ))}
      
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver todos os shows</Text>
      </TouchableOpacity>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingTop: 25,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: '#222',
    paddingHorizontal: 20,
  },
  title: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  showItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  icon: {
    marginRight: 8
  },
  text: {
    color: '#ccc',
    fontSize: 16
  },
  button: {
    backgroundColor: '#c40000',
    marginTop: 20,
    padding: 12,
    borderRadius: 4,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'none',
  }
});