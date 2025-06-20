
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import MovieList from './MovieList';
import './App.css'
import { Col, Container, Row } from 'react-bootstrap';
const App = () => {
  return (
    <div>
      
      <Container fluid className="app-container" style={{display:'flex', alignItems:'center'}}>
        <div className="movie-list-container">
          <MovieList />
        </div>
      </Container>
    </div>
  )
}

export default App