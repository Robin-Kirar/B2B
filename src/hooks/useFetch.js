import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      try {
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error("Couldn't access the data")
        }
        const data = await res.json()

        setData(data)

        setLoading(false)
      } catch (error) {
        setError(error.message)
        console.log('error')

        setLoading(false)
      }
    })()
  }, [url])

  return { data, loading, error }
}

export default useFetch
