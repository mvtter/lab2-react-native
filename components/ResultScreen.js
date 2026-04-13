import React from "react"
import { View, Text, FlatList, Button, StyleSheet } from "react-native"

export default function ResultScreen({ results, onRestart }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Text style={styles.item}>
            {index + 1}. {item.name}
          </Text>
        )}
      />

      <Text style={styles.description}>{results[0]?.description}</Text>

      <Button title="Restart" onPress={onRestart} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: "#111",
  },

  title: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 10,
  },

  item: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 4,
  },

  description: {
    color: "#aaa",
    marginVertical: 20,
  },
})
