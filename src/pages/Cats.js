import React from 'react';
import catPic from '../assets/blog/dogGrooming/Andy.jpg'

const Cats = () =>{
  return (
    <div>
      <h3>Cats</h3>
      <div>
        <img 
          src={catPic}
          width="50%"
        />
        
      </div>
    </div>
  );
}
export default Cats;

