import React from 'react';
// import EditIcon from '@material-ui/icons/Edit';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Header.css';

export default function Header({ setShowDrawGraph, setShowSelectGraph, setOpenError, setError, isPlaying }) {
  function handleClick(button) {
    if (isPlaying) {
      setOpenError(true);
      setError('Wait until the visualization is finished');
      return;
    }
    if (button === 'select') setShowSelectGraph(true);
    if (button === 'draw') setShowDrawGraph(true);
  }
  return (
    <div className='header'>
      <h1 className='header-title'>Graph Algorithms Visualizer</h1>
      <div className='header-button-container'>

        <div className='header-button' onClick={() => handleClick('draw')}>
          <h2>Draw graph</h2>

        </div>
      </div>
    </div>
  );
}
