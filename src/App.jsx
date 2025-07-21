import { useState } from 'react'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Job titles for random assignment
  const jobTitles = [
    'Senior Consulting Representative',
    'Design Liaison',
    'Human Manufacturing Producer',
    'Technology Coordinator',
    'Quality Assurance Manager',
    'Data Analytics Specialist',
    'Product Development Manager',
    'Customer Success Specialist',
    'Software Engineering Lead',
    'Marketing Communications Director'
  ]

  const fetchRandomCharacters = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Fetch random users from JSONPlaceholder API
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      
      const users = await response.json()
      
      // Randomly select 4 users and transform the data
      const shuffled = [...users].sort(() => 0.5 - Math.random())
      const selected = shuffled.slice(0, 4).map((user, index) => ({
        id: user.id,
        name: user.name,
        title: jobTitles[Math.floor(Math.random() * jobTitles.length)],
        avatar: `https://robohash.org/${user.id}?set=set1&size=200x200`,
        description: user.company.catchPhrase || 'Dedicated professional',
        email: user.email,
        website: user.website
      }))
      
      setCharacters(selected)
    } catch (error) {
      console.error('Error fetching characters:', error)
      setError('Failed to load character data. Please try again.')
      setCharacters([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <button 
          className="fetch-button"
          onClick={fetchRandomCharacters}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Fetch Random'}
        </button>
      </header>

      <main className="characters-grid">
        {error && (
          <div className="error-state">
            <p>{error}</p>
          </div>
        )}
        
        {!error && characters.map((character) => (
          <div key={character.id} className="character-card">
            <div className="character-avatar">
              <img src={character.avatar} alt={character.name} />
            </div>
            <div className="character-info">
              <h3 className="character-name">{character.name}</h3>
              <p className="character-title">{character.title}</p>
              <p className="character-description">{character.description}</p>
              <div className="character-contact">
                <p className="character-email">{character.email}</p>
                {character.website && (
                  <p className="character-website">
                    <a href={`http://${character.website}`} target="_blank" rel="noopener noreferrer">
                      {character.website}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {!error && characters.length === 0 && !loading && (
          <div className="empty-state">
            <p>Click "Fetch Random" to load character information</p>
          </div>
        )}
        
        {loading && (
          <div className="loading-state">
            <p>Loading characters...</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
