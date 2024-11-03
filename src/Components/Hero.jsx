import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  // State to keep track of the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // Array of image URLs to rotate
  const images = [
    'https://damu-sasa.co.ke/wp-content/uploads/2022/09/slider-1.png',
    'https://damu-sasa.co.ke/wp-content/uploads/2022/09/slider-2.png',
    'https://damu-sasa.co.ke/wp-content/uploads/2022/09/damu-sasa-app.png'
  ];

  // Rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, [images.length]);

  return (
    <Container fluid className="hero-section">
      <Row className="align-items-center">
        <Col md={6} className="hero-left order-md-1 order-2">
          <h1>Save Lives, Donate Blood</h1>
          <h3>Your donation can make a difference</h3>
          <Button className="donate-button">Donate</Button>
        </Col>
        <Col md={6} className="hero-right order-md-2 order-1 d-flex justify-content-center">
          <img src={images[currentImage]} alt="Blood Donation" className="hero-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
