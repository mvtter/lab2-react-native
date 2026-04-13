import React from "react"
import { View, Text, Image, Pressable, StyleSheet } from "react-native"

// Hooks
import useTournament from "../hooks/useTournament"

export default function VoteScreen({ onFinish }) {
  const { list, vote } = useTournament(onFinish)

  if (list.length < 2) return null

  const a = list[0]
  const b = list[1]

  return (
    <View style={styles.container}>
      <Pressable style={styles.half} onPress={() => vote(a, b)}>
        <Image source={{ uri: a.image }} style={styles.image} />
        <View style={styles.overlayBottom}>
          <Text style={styles.title}>{a.name}</Text>
          <Text style={styles.desc}>{a.description}</Text>
        </View>
      </Pressable>

      <Pressable style={styles.half} onPress={() => vote(b, a)}>
        <Image source={{ uri: b.image }} style={styles.image} />
        <View style={styles.overlayTop}>
          <Text style={styles.title}>{b.name}</Text>
          <Text style={styles.desc}>{b.description}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  half: {
    flex: 1,
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  overlayBottom: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },

  overlayTop: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },

  desc: {
    fontSize: 20,
    color: "#fff",
  },
})
