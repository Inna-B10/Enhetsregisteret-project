import { useEffect, useState } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  async function fetchData(newUrl) {
    setIsLoading(true)
    try {
      const response = await fetch(newUrl)
      const newData = await response.json()
      setData(newData)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  return {
    data,
    error,
    isLoading,
    fetchData, // Return fetchData function for external use
  }
}
