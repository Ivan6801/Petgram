import { useState, useEffect } from 'react'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-serve-jorge-vicuna.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { error, categories, loading }
}

export default useCategoriesData
