import { useState, useEffect } from "react"

// Data
import genresData from "../data/genres.json"

export default function useTournament(onFinish) {
  const [list, setList] = useState(genresData)
  const [ranking, setRanking] = useState([])

  useEffect(() => {
    if (list.length === 1) {
      onFinish([list[0], ...ranking])
    }
  }, [list])

  const vote = (winner, loser) => {
    setRanking((prev) => [loser, ...prev])
    setList((current) => {
      const filtered = current.filter(
        (item) => item.id !== winner.id && item.id !== loser.id
      )
      return [...filtered, winner]
    })
  }

  return { list, vote }
}
