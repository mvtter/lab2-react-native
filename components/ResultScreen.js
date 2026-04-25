import React from "react"
import { View, Text, FlatList, Button, StyleSheet } from "react-native"

export default function ResultScreen({ results, onRestart }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clasament Final</Text>
      <Text style={styles.winnerDesc}>
        🥇 {results[0]?.name}: {results[0]?.description}
      </Text>

      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Text style={styles.item}>
            {index + 1}. {item.name}
          </Text>
        )}
      />
      <Button title="Începe iarăși" onPress={onRestart} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, color: "#fff", fontWeight: "bold" },
  winnerDesc: { color: "#ffd700", marginVertical: 15, fontSize: 16 },
  item: { color: "#fff", marginVertical: 5 },
})
