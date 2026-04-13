import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

// Components
import VoteScreen from "./components/VoteScreen"
import ResultScreen from "./components/ResultScreen"
import StatsScreen from "./components/StatsScreen"

export default function App() {
  const [name, setName] = useState("")
  const [started, setStarted] = useState(false)
  const [results, setResults] = useState(null)
  const [history, setHistory] = useState([])

  const handleFinish = (finalResults) => {
    setResults(finalResults)

    setHistory((prev) => {
      const exists = prev.find((u) => u.name === name)
      if (exists) {
        return prev.map((u) =>
          u.name === name ? { ...u, results: finalResults } : u
        )
      }
      return [...prev, { name, results: finalResults }]
    })
  }

  if (!started) {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Numele tău"
            value={name}
            onChangeText={setName}
          />
          <Button title="Start" onPress={() => setStarted(true)} />
          <StatsScreen history={history} />
        </View>
      </SafeAreaView>
    )
  }

  if (results) {
    return (
      <SafeAreaView style={styles.container}>
        <ResultScreen
          results={results}
          onRestart={() => {
            setStarted(false)
            setResults(null)
          }}
        />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <VoteScreen onFinish={handleFinish} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#fff",
    width: 250,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
})
