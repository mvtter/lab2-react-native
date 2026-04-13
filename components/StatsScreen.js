import React from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"

export default function StatsScreen({ history }) {
  return (
    <ScrollView style={styles.container}>
      {history.map((user, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.result}>Winner: {user.results[0]?.name}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
  },

  card: {
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  name: {
    color: "#fff",
    fontWeight: "bold",
  },

  result: {
    color: "#aaa",
  },
})
