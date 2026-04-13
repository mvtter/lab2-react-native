import { useState } from "react"

// Data
import genres from "../data/genres.json"

export default function useTournament(onFinish) {
  const [list, setList] = useState(genres)
  const [ranking, setRanking] = useState([])

  const vote = (winner, loser) => {
    const updatedList = list.filter(
      (item) => item.id !== winner.id && item.id !== loser.id
    )

    setRanking((prev) => {
      const newRanking = [loser, ...prev]

      if (updatedList.length === 0) {
        const finalRanking = [winner, ...newRanking]
        onFinish(finalRanking)
        return newRanking
      }

      return newRanking
    })

    if (updatedList.length === 0) return

    updatedList.push(winner)
    setList(updatedList)
  }

  return { list, vote }
}
