import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MovieCard({ id, title, description, rating, posterURL, trailerId }) {
  const navigate = useNavigate();
  
  const handleTrailerClick = () => {
    navigate(`/trailer/${id}`, {
      state: {
        title,
        description,
        rating,
        posterURL,
        trailerId
      }
    });
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={posterURL} 
        style={{ height: '400px', objectFit: 'cover' }}
        alt={`${title} poster`}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="badge bg-warning text-dark">Rating: {rating}/10</span>
          <Button variant="dark" onClick={handleTrailerClick}>
            Watch Trailer
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;