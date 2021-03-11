import React from 'react';
import Tilt from 'react-tilt'

const Card = ({ name, email, id }) => {
  return (
    <Tilt className="Tilt tc dib ma6" options={{ max : 100 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"> 
    <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    
    </div>
</Tilt>
  );
}

export default Card;
