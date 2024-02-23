import { useEffect, useState } from 'react'
import './App.css'
import Quote from './components/Quote'

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api')
      const data = await response.json()
      setQuotes(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <main className='bg-red-500 min-h-screen p-10'>
        <section>
          {quotes.map(quote => (
            <Quote key={quote.id} quote={quote.quote} author={quote.author} />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
