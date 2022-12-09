import React from 'react'
import image from '../images/movieposter.jpeg'
import image2 from '../images/bond.jpg'
import image3 from '../images/it.jpg'
import image4 from '../images/scar.jpg'
import image5 from '../images/terminator.jpg'
import image6 from '../images/panther.jpg'
import image7 from '../images/joker.jpg'
import image8 from '../images/queen.jpg'

function Page() {
  return (
    <div className='page--container'>
        <div className='page--movie'>
            <div className='page--poster'>
            <img src={image}></img>
            </div>
            <div className='page--text'>
                <p>Peaky Blinders</p>
                <span>Description</span>
                <span>Rating</span>
                <span><b>9.9</b></span>
            </div>
        </div>
        <div className='page--movie'>
            <img src={image2}></img>
            <div className='page--text'>
                <p>James Bond</p>
                <span>Description</span>
                <span>Rating</span>
                <span><b>9.9</b></span>
            </div>
        </div>
        <div className='page--movie'>
            <img src={image3}></img>
            <div className='page--text'>
                <p>To - Rozdział 2</p>
                <span>Description</span>
                <span>Rating</span>
                <span><b>9.9</b></span>
            </div>
        </div>
        <div className='page--movie'>
            <img src={image4}></img>
            <div className='page--text'>
                <p>Człowiek z blizną</p>
                <span>Description</span>
                <span>Rating</span>
                <span><b>9.9</b></span>
            </div>
        </div>
        <div className='page--movie'>
            <img src={image5}></img>
            <div className='page--text'>
                <p>Terminator</p>
                <span>Description</span>
                <span>Rating</span>
                <span><b>9.9</b></span>
            </div>
        </div>
        <div className='page--movie'>
            <img src={image6}></img>
            <div className='page--text'>
                <p>Czarna Pantera</p>
                <span>Description</span>
                <span>Rating</span>
                <span><b>9.9</b></span>
            </div>
        </div>
        <div className='page--movie'>
            <img src={image7}></img>
            <div className='page--text'>
                <p>Joker</p>
                <span>Description</span>
                <span>Rating</span>
                <span><b>9.9</b></span>
            </div>
        </div>
        <div className='page--movie'>
            <img src={image8}></img>
            <div className='page--text'>
                <p>Bohemian Rhapsody</p>
                <span>Description</span>
                <span>Rating</span>
                <span><b>9.9</b></span>
            </div>
        </div>
    </div>
  )
}

export default Page