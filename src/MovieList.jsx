import { useState } from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Filter } from "./Filter";
import AddMovieModal from "./AddMovieModal";

const MovieList = () => {
  
  const initialMovies = [
  {
    id : 1,
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    trailerId: "PLl99DlL6b4",
    rating: 9.3,
  },
  {
    id : 2,
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    trailerId: "UaVTIH8mujA",
    rating: 9.2,
  },
  {
    id : 3,
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    trailerId : "EXeTwQWrcwY",
    rating: 9.0,
  },
  { 
    id: 4,
    title: "The Godfather Part II",
    description: "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    trailerId : "9O1Iy9od7-A",
    rating: 9.0,
  },
  {
    id : 5,
    title: "12 Angry Men",
    description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    trailerId : "TEN-2uTi2c0",
    rating: 9.0,
  },
  
  {
    id : 6,
    title: "Schindler's List",
    description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 9.0,
    trailerId : "mxphAlJID9U",
  },
  {
    id : 7,
    title: "Pulp Fiction",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 8.8,
    trailerId : "s7EdQ4FqbhY",
  }
];

 
  const [movies, setMovies] = useState(initialMovies);
  const [filters, setFilters] = useState({
    searchTerm: "",
    minRating: 0
  });
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredMovies = Filter(movies, filters);

  const handleAddMovie = (newMovie) => {
    const newId = movies.length > 0 ? Math.max(...movies.map(m => m.id)) + 1 : 1;
    setMovies([{ ...newMovie, id: newId }, ...movies ]);
    setShowAddModal(false);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">MOVIES</h1>
        <Button 
          variant="dark"
          onClick={() => setShowAddModal(true)}
        >
          Add New Movie
        </Button>
      </div>

      <Row className="mb-4 g-3">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search movies..."
            value={filters.searchTerm}
            onChange={(e) => setFilters({...filters, searchTerm: e.target.value})}
          />
        </Col>
        <Col md={6}>
          <Form.Select
            value={filters.minRating}
            onChange={(e) => setFilters({...filters, minRating: Number(e.target.value)})}
          >
            <option value={0}>All Ratings</option>
            <option value={8}>8+ Stars</option>
            <option value={8.5}>8.5+ Stars</option>
            <option value={9}>9+ Stars</option>
            <option value={9.5}>9.5+ Stars</option>
          </Form.Select>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Col key={movie.id}>
              <MovieCard 
                id={movie.id}
                title={movie.title}
                description={movie.description}
                posterURL={movie.posterURL}
                rating={movie.rating}
                trailerId={movie.trailerId}
              />
            </Col>
          ))
        ) : (
          <Col className="text-center py-5">
            <h4>No movies found matching your criteria</h4>
          </Col>
        )}
      </Row>

      <AddMovieModal 
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleAddMovie}
      />
    </Container>
  );
};

export default MovieList;