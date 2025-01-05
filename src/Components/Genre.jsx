import React, { useEffect, useState } from 'react'
import { getGenre } from '../Services/allAPI'
import { baseUrl } from '../Services/baseURL'
import { Link } from 'react-router-dom'

const Genre = ({genre}) => {
    const [category,setCategory]= useState([])
    // const [preview,setPreview]=useState("")
    const getGames = async()=>{
        const response = await getGenre(genre)
        // console.log(response.data)
        setCategory(response.data)
        console.log(category)
    }
    useEffect(()=>{
        getGames()
    },[genre])

    // useEffect(()=>{
    //     if(category.gameImage){
    //         setPreview(URL.createObjectURL(category.gameImage))
    //     }
    // },[])
    // console.log(preview)
    return (
        <div>
                <div className='row mb-5 mt-5'>
                    {
                          category.map((game)=>(
                                    <div className='col col-sm-3'>
                                        <div className="card" style={{ width: '18rem' }}>
                                        <img src={`${baseUrl}/uploads/${game.gameImage}`} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{game.gameName}</h5>
                                            <p className="card-text">{game.description.slice(0,50)}</p>
                                            <Link to={`/details/${game._id}`} className="btn btn-primary">view product</Link>
                                        </div>
                                    </div>    
                               </div>
                            ))
                    }
                </div>
        </div>
    )
}

export default Genre