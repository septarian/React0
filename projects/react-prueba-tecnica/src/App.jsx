import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // recuperar la imagen cada vez que tengamos una cita nueva
  useEffect(() => {
    if (!fact) return

    // const firstWord = fact.split(' ').slice(0, 3).join(' ')
    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`)
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1> App de gatos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img
          src={imageUrl} alt={`Imagen extraida del Url de las 3 
            primeras pabras de ${fact}`}
                     />}
      </section>

    </main>
  )
}
