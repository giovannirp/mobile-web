import { Text, TouchableOpacity } from 'react-native'

export default function index({ texto, cor, corTexto }) {
  return (
    <TouchableOpacity style={{ backgroundColor: cor, color: corTexto}}>
      <Text style={{ color: corTexto}}>{texto}</Text>
    </TouchableOpacity>
  )
}
