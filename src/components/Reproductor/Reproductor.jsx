import React from 'react';
import SpeedSlider from './SpeedSlider';
import './Reproductor.css';

export default function Reproductor({ speed, setSpeed }) {
  return (
    <div className='reproductor'>
      <SpeedSlider speed={speed} setSpeed={setSpeed} />
    </div>
  );
}
//this file is for controlling the speed of the algorithm that is running
