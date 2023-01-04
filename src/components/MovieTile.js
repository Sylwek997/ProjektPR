import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieTile(props) {
  const navigate = useNavigate();
  function changeroute() {
    navigate('/details')
  }
  return (
    <div className='page--movie' onClick={changeroute}>
                <div className='page--poster'>
                <img src={props.img}></img>
                </div>
                <div className='page--text'>
                    <p>Peaky Blinders</p>
                    <span>Description</span>
                    <span>Rating</span>
                    <span><b>9.9</b></span>
                </div>
            </div>
  )
}