
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddMovieModal = ({ show, onClose, onSave }) => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave({
      ...movie,
      rating: parseFloat(movie.rating)
    });
    onClose();
  };

  const isFormValid = movie.title && movie.description && movie.posterURL;

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            name="title"
            placeholder="Title"
            className="mb-3"
            value={movie.title}
            onChange={handleChange}
          />
          
          <Form.Control
            name="description"
            as="textarea"
            placeholder="Description"
            rows={2}
            className="mb-3"
            value={movie.description}
            onChange={handleChange}
          />
          
          <Form.Control
            name="posterURL"
            type="url"
            placeholder="Poster URL"
            className="mb-3"
            value={movie.posterURL}
            onChange={handleChange}
          />
          
          <Form.Select
            name="rating"
            value={movie.rating}
            onChange={handleChange}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={num} value={num}>
                {num === 0 ? "Select rating..." : `${num}/10`}
              </option>
            ))}
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button 
          variant="primary" 
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddMovieModal;