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
  console.log(genere);

  const [filteredMovies, setFilteredMovies] = useState(movies)

  useEffect(() => {

    const results = movies.filter((movie) => movie.genre === genere)
    console.log(results);
    setFilteredMovies(results)
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

    </>
  )
}

export default App

{/* <ul className="">
  {movies.map(movie => (
    <li key={movie.index}>{movie.title}</li>
  ))}
</ul> */}