import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import MovieList from './MovieList';
import './App.css';
import { Container , Row , Col} from 'react-bootstrap';
import TrailerPage from './TrailerPage';

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar sticky="top" className="fixed-top" />
        
        <Container fluid className="flex-grow-1 mt-5 pt-3">
          <Row className="justify-content-center">
            <Col xs={12} lg={10} xl={8}>
              <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/trailer/:id" element={<TrailerPage />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;