import React, { useState } from 'react'
import vikram from './images/vikram.jpg';
import Counter from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
export default function Movie({movieTake,getMovies}) {
  const navigate=useNavigate();
  const [show,setShow]=useState(true);

  const deleteMovie=(id)=>{
    fetch(`https://65f16ba2034bdbecc7627293.mockapi.io/movie/${id}`,{
      method:"DELETE",
    })
    .then((data)=>getMovies())
    .then(()=>alert("are you sure you want to delete?"))
       console.log(id);
       
  }
  return (
    <Card className='movie-container'>
        <img className='movie-poster' src={movieTake.poster} alt='as'/>
        <CardContent>
        <div className='movie-spec'>
            <h2 className='movie-name'>{movieTake.name}
            <IconButton color="primary" aria-label="toggle-description" onClick={()=>setShow(!show)}>
            {show ?<ExpandLessIcon fontSize='large' />:<ExpandMoreIcon fontSize='large'/>}  
            </IconButton>

            <IconButton color="primary" aria-label="movie-info" onClick={()=>navigate(`/portal/view/${movieTake.id}`)}>
                <InfoIcon fontSize='medium' />
                        
            </IconButton>

            </h2>
            <h3 className='movie-rating'>⭐{movieTake.rating}</h3>
        </div>
        </CardContent>
        
       {show ? <p className='movie-summary'>{movieTake.summary}</p>:null}
        <CardActions>
        <Counter/>
        <IconButton sx={{marginLeft:"auto"}}
        aria-label='editmovie'
        onClick={()=>navigate(`/portal/edit/${movieTake.id}`)}>
                <EditIcon color='secondary'/>
        </IconButton>
        
        <IconButton sx={{marginLeft:"auto"}}
        aria-label='editmovie'
        onClick={()=>deleteMovie(movieTake.id)}>
                <DeleteIcon color='secondary'/>
        </IconButton>
    
        </CardActions>
    </Card>
  )
}


