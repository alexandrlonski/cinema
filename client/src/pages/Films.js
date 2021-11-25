import React from 'react';
import {  Container } from 'react-bootstrap';
import Film from '../components/Film';

const Films = () => {

 return (
  <Container className="d-flex justify-content-center  ">
    <Film/>
    <Film/>
    <Film/>
    <Film/>
   </Container>
 );
};

export default Films;