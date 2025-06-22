import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import YouTube from 'react-youtube';

function TrailerPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  if (!state) {
    return (
      <Container className="text-center my-5">
        <h2>Movie not found</h2>
        <Button onClick={() => navigate('/')}>Back to Movies</Button>
      </Container>
    );
  }

  const { title, description, rating, posterURL, trailerId } = state;

  return (
    <Container>
      <Button 
        variant="dark" 
        onClick={() => navigate(-1)}
        className="mb-4"
      >
        &larr; Back to Movies
      </Button>
      
      <Row className="g-4">
        <Col lg={5}>
          <Card className="h-100 shadow-sm">
            <Card.Img 
              variant="top" 
              src={posterURL} 
              alt={title}
              style={{ maxHeight: '500px', objectFit: 'contain' }}
            />
            <Card.Body>
              <Card.Title className="fs-2">{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Badge bg="warning" className="fs-5 text-dark">
                Rating: {rating}/10
              </Badge>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={7}>
          <div className="ratio ratio-16x9 mb-4">
            <YouTube
              videoId={trailerId}
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 0,
                  rel: 0,
                  modestbranding: 1
                },
              }}
            />
          </div>
          
          <Card>
            <Card.Body>
              <Card.Title>About the Movie</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TrailerPage;