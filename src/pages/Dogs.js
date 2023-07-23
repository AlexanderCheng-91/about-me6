import React from 'react';
import dogPic1 from '../assets/blog/dogGrooming/Duke.jpg'
import dogPic2 from '../assets/blog/dogGrooming/Fatty.jpg'

const Dogs = () =>{
  return (
    <div>
      <h3>Dogs</h3>
      <div>
        <img 
          src= {dogPic1} 
          width= "50%"
          alt= "Duke"
        />
        <img 
          src= {dogPic2}
          width= "50%"
          alt="Fatty"
        />
      </div>
    </div>
  );
}
export default Dogs;

