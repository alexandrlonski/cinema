import React from 'react';
import Button from '@restart/ui/esm/Button';
import { Card } from 'react-bootstrap';

const Film = () => {
 return (
  <Card style={{ width: '18rem', margin: '5px' }}>
  <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/jOaOjY4N2JYGC38SkvMq_He4E7MvEFzzcnncvcQpMXGfNsWffp9iJ1j3lbTh5xYvisiFcsqAPn3qkZhwhIGLRwqEIqYLURWzXTjIIWoA7kRSjw8INT7bA5dSPg"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
 );
};

export default Film;