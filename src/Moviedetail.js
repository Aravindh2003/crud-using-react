import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Moviedetail() {
    const navigate=useNavigate();
    const {id}=useParams();
    const [movie,setMovie]=useState([]);
    console.log(id);
     
    const ratingStyles={
        color:movie.rating>=8.5?"green":"red",
    };
    useEffect(()=>{
        fetch(`https://65f16ba2034bdbecc7627293.mockapi.io/movie/${id}`,{
            method:"GET",
        })
        .then((data)=>data.json())
        .then((mv)=>setMovie(mv))
    },[]);
    console.log(movie);
  return (
    <div>
       <iframe width="914" height="514" src={movie.trailer} title={movie.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

       <div className='movie-detail-container'>
        <div className='movie-spec'>
            <h2 className='movie-name'>{movie.name}</h2>
            <h3 style={ratingStyles} className='movie-rating'>⭐{movie.rating}</h3>
        </div>
        <p className='movie-summay'>{movie.summary}</p>
       </div>
       <Button variant='contained' startIcon={<ArrowBackIosIcon/>} onClick={()=>navigate(-1)}>Back</Button>
    </div>
  )
}
