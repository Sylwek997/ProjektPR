import React from 'react'
import MovieTile from './MovieTile'
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
        <MovieTile img={image} />
        <MovieTile img={image2} />
        <MovieTile img={image3} />
        <MovieTile img={image4} />
        <MovieTile img={image5} />
        <MovieTile img={image6} />
        <MovieTile img={image7} />
        <MovieTile img={image8} />

    </div>
  )
}

export default Page