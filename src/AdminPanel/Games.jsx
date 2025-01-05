import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { addgame } from '../Services/allAPI'
const Games = () => {

  const [game, setGame] = useState({
    gameName:'',
    gamePrice:'',
    description:'',
    gameGenre:'',
    gameImage:''
})
  const [preview,setpreview]=useState('')
  // console.log(game)
  const handleAddGame = async(e)=>{
      e.preventDefault()
      const {gameName,gamePrice,description,gameGenre,gameImage} = game
      if(!gameName || !gamePrice || !description || !gameGenre || !gameImage){
        alert("Please fill the details properly")
      }
      else{
        const reqBody = new FormData()
        reqBody.append('gameName',gameName)
        reqBody.append('gamePrice',gamePrice)
        reqBody.append('description',description)
        reqBody.append('gameGenre',gameGenre)
        reqBody.append('gameImage',gameImage)

        // console.log(reqBody);
        const token = sessionStorage.getItem('token')
        // console.log(token)

        const reqHeader = {
          'Authorization':`Bearer ${token}`,
          'Content-Type':'multipart/form-data'
        }
          const response = await addgame(reqBody,reqHeader)
            console.log(response)

            if(response.status === 200){
              alert(response.data.message)
            }
            else if(response.status === 406){
              alert(response.response.data.message)
            }
            else{
              alert(response.data.message)
            }
      }
  }
  useEffect(()=>{
    if(game.gameImage){
      setpreview(URL.createObjectURL(game.gameImage))
    }
  },[game.gameImage])
  return (
    <>
      <div className="row g-0"> {/* Remove container-fluid and use g-0 to remove gutters */}
        {/* Sidebar column */}
        <div className="col-3"> {/* Reduce width for sidebar */}
          <Sidebar />
        </div>

        {/* Main content column */}
        <div className="col-9"> {/* Increase width for content */}
          <h1 className="text-center mb-4 mt-3">Manage Games</h1>
          <form className="bg-white p-3 mx-3"> {/* Add margin on sides */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="game-name" className="form-label">Game Name</label>
                <input type="text" id="game-name" name="game-name" className="form-control" onChange={(e) => setGame({ ...game, gameName: e.target.value })} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="game-price" className="form-label">Game Price</label>
                <input type="number" id="game-price" className="form-control" onChange={(e) => setGame({ ...game, gamePrice: e.target.value })} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="game-genre" className="form-label">Genre</label>
                <select id="game-genre" className="form-select" onChange={(e) => setGame({ ...game, gameGenre: e.target.value })}>
                  <option value="" disabled selected>
                    Select Genre
                  </option>
                  <option value="Action">Action</option>
                  <option value="Puzzle">Puzzle</option>
                  <option value="story">Story</option>
                  <option value="Racing">Racing</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="game-description" className="form-label">Description</label>
                <textarea id="game-description" className="form-control" rows="3" onChange={(e) => setGame({ ...game, description: e.target.value })} />
              </div>
            </div>

        {    

         <label>
            <div className="row">
                <div className="col-md-6 mb-3">
                  {/* <label htmlFor="game-image" className="form-label">Game Image</label> */}
                  <img src= {preview ? preview :"https://static.vecteezy.com/system/resources/thumbnails/007/502/301/small/picture-gallery-image-solid-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg" } style={{width:"200px"}} alt="" />
                  <input type="file" id="game-image" className="form-control" style={{display:"none"}} onChange={(e) => setGame({ ...game, gameImage: e.target.files[0] })} />
                </div>
              </div>
         </label>
            }

            <div className="row">
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary px-4" onClick={(e)=>handleAddGame(e)}>Add Game</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Games
