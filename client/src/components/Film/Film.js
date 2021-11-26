import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Film = (props) => {
 return (
  <Card style={{ width: '18rem', margin: '5px' }}>
  <Card.Img variant="top" src={props.src}/>
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>{props.desc}</Card.Text>
    <Button variant="secondary">Read more</Button>
  </Card.Body>
</Card>
 );
};

export default Film;