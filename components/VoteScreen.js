import React from "react"
import { View, Text, Image, Pressable, StyleSheet } from "react-native"

// Hooks
import useTournament from "../hooks/useTournament"

export default function VoteScreen({ onFinish }) {
  const { list, vote } = useTournament(onFinish)

  if (list.length < 2) return null
  const [a, b] = [list[0], list[1]]

  return (
    <View style={styles.container}>
      {[a, b].map((item, index) => (
        <Pressable
          key={item.id}
          style={styles.half}
          onPress={() => vote(item, index === 0 ? b : a)}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.label}>
            <Text style={styles.txt}>{item.name}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  half: { flex: 1, borderBottomWidth: 1, borderColor: "#333" },
  image: { ...StyleSheet.absoluteFillObject },
  label: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 10,
  },
  txt: { color: "#fff", fontSize: 20, fontWeight: "bold" },
})
