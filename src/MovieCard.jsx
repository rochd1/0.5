import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({ title, description, rating, posterURL }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL} style={{ height: '400px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>Rating: {rating}/10</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;