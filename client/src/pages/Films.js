import React from 'react';
import Film from '../components/Film/Film';
import { films } from '../data/Data';

const Films = () => {
 return (
  <div className="d-flex justify-content-center" style={{padding: "50px"}}>
    {films.map((el)=> <Film title={el.title} src={el.src} desc={el.desc} />)}
  </div>
 );
};

export default Films;