import React, { useEffect, useState } from 'react'
import Movie from './Movie';
export default function Movielist() {

    const [movie,setMovie]=useState([]);
    const getmovies=()=>{
        fetch("https://65f16ba2034bdbecc7627293.mockapi.io/movie",{method:"GET",
    })
    .then((data)=>data.json())
    .then((mvs)=>setMovie(mvs));
    };
    useEffect(()=>{
        getmovies();
    },[]);
  return (
    <div className='movie-list'>
        {movie.map((element,index) => (
        <Movie key={index} movieTake={element} getMovies={getmovies}/>
      ))}
    </div>
  )
}
