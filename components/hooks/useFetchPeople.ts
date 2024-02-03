import { useEffect, useState } from "react"

interface Person {
  positivePercentage: number
  negativePercentage: number
  _id: string
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: string
}

type PeopleArray = Person[]

interface UsePeopleDataResult {
  data: PeopleArray
  loading: boolean
  error: string | null
  refetchData: () => void
}

export const usePeopleData = (): UsePeopleDataResult => {
  const [data, setData] = useState<PeopleArray>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/people')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const result = await response.json()
      setData(result)
      setLoading(false)
    } catch (error: any) {
      console.error('Error fetching data:', error.message)
      setError('Error fetching data')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetchData = () => {
    fetchData()
  }

  return { data, loading, error, refetchData }
}

interface UseVoteProps {
  thumbUp: string
  thumbDown: string
  refetchData: () => void
}

interface UseVoteResult {
  handleVoteClick: () => void
  error?: string | null
}

export const useVote = ({ thumbUp, thumbDown, refetchData }: UseVoteProps): UseVoteResult => {
  const [error, setError] = useState<string | null>(null)

  const handleVoteClick = async () => {
    try {
      if (thumbUp || thumbDown) {
        const response = await fetch(`http://localhost:4000/people/${thumbUp || thumbDown}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ votes: { [thumbUp ? 'positive' : 'negative']: 1 } }),
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        refetchData()
        const data = await response.json()
        console.log(data)
      }
    } catch (error: any) {
      console.error('Error updating votes:', error.message)
      setError(error.message)
    }
  }

  return { handleVoteClick, error }
}

