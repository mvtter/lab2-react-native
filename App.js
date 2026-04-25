import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet, Alert } from "react-native"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"

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
      const idx = prev.findIndex((u) => u.name === name)
      if (idx > -1) {
        const newHist = [...prev]
        newHist[idx].results = finalResults
        return newHist
      }
      return [...prev, { name, results: finalResults }]
    })
  }

  const renderContent = () => {
    if (!started)
      return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Numele tău"
            value={name}
            onChangeText={setName}
          />
          <Button
            title="Start"
            onPress={() =>
              name.length > 2
                ? setStarted(true)
                : Alert.alert("Eroare", "Nume prea scurt")
            }
          />
          <StatsScreen history={history} setHistory={setHistory} />
        </View>
      )
    if (results)
      return (
        <ResultScreen
          results={results}
          onRestart={() => {
            setResults(null)
            setStarted(false)
          }}
        />
      )
    return <VoteScreen onFinish={handleFinish} />
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#111" }}>
        {renderContent()}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  input: {
    backgroundColor: "#eee",
    width: 250,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
})
