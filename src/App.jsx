import { useEffect, useState } from "react"


function App() {

  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  const [genere, setGenere] = useState("")


  const [filteredMovies, setFilteredMovies] = useState(movies)

  useEffect(() => {

    if (genere === "") {
      setFilteredMovies(movies)
    }
    else {
      const results = movies.filter((movie) => movie.genre === genere)

      setFilteredMovies(results)
    }
  }, [genere])







  return (
    <>
      <select className="form-select" aria-label="Default select example"
        onChange={(e) => setGenere(e.target.value)}>
        <option value="">Select a genre</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>
      <ul className="">
        {filteredMovies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>

    </>
  )
}

export default App

