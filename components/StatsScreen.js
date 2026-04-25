import React from "react"
import { View, Text, ScrollView, StyleSheet, Button, Alert } from "react-native"

export default function StatsScreen({ history, setHistory }) {
  const handleReset = () => {
    Alert.alert("Resetare", "Ștergi tot istoricul?", [
      { text: "Nu", style: "cancel" },
      { text: "Da", style: "destructive", onPress: () => setHistory([]) },
    ])
  }

  return (
    <View style={styles.container}>
      {history.length > 0 && (
        <Text style={styles.title}>Istoric Utilizatori:</Text>
      )}
      <ScrollView>
        {history.map((user, i) => (
          <View key={i} style={styles.card}>
            <Text style={{ color: "#fff" }}>
              {user.name} | Câștigător: {user.results[0]?.name}
            </Text>
          </View>
        ))}
      </ScrollView>
      {history.length > 0 && (
        <Button title="Reset" onPress={handleReset} color="red" />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { height: 200, width: "100%", padding: 10 },
  title: { color: "#aaa", marginBottom: 5 },
  card: {
    backgroundColor: "#222",
    padding: 8,
    borderRadius: 4,
    marginBottom: 5,
  },
})
