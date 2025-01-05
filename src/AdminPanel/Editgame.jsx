import React, {  useEffect, useState } from "react";
import { baseUrl } from "../Services/baseURL";
import { editgame } from "../Services/allAPI";

const Editgame = ({ data, index }) => {
  const [preview,setPreview]= useState('')
  const [updateGame, setUpdateGame] = useState({
    name: data.gameName,
    price: data.gamePrice,
    genre: data.gameGenre,
    desc: data.description,
    img: '',
  });
  const handleSave = async() => {
    const {name,price,genre,desc,img}=updateGame

    if(!name || !price || !genre || !desc){
        alert("fill the form")
    }
    else{
        const token = sessionStorage.getItem('token')
        const reqHeader = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
        const reqBody = new FormData()
        reqBody.append('gameName',name)
        reqBody.append('gamePrice',price)
        reqBody.append('description',desc)
        reqBody.append('gameGenre',genre)
        preview?reqBody.append('gameImage',updateGame.img):reqBody.append('gameImage',data.gameImage)
        const response = await editgame(data._id,reqHeader,reqBody)
        console.log(response)
    }
  };
useEffect(()=>{
    if(updateGame.img){
        setPreview(URL.createObjectURL(updateGame.img))
    }
},[updateGame.img])
  return (
    <div>
      {/* Button to trigger modal */}
      <button data-bs-toggle="modal" data-bs-target={`#editModal-${index}`}>
        <i className="fa-regular fa-pen-to-square"></i>
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id={`editModal-${index}`}
        tabIndex="-1"
        aria-labelledby={`editModalLabel-${index}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`editModalLabel-${index}`}>
                Edit Game
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="name">Game Name</label>
              <input
                type="text"
                value={updateGame.name}
                onChange={(e) =>
                  setUpdateGame({ ...updateGame, name: e.target.value })
                }
                className="form-control"
              />
              <label htmlFor="price">Price</label>
              <input
                type="number"
                value={updateGame.price}
                onChange={(e) =>
                  setUpdateGame({ ...updateGame, price: e.target.value })
                }
                className="form-control"
              />
              <label htmlFor="description">Description</label>
              <textarea
                value={updateGame.desc}
                onChange={(e) =>
                  setUpdateGame({ ...updateGame, desc: e.target.value })
                }
                className="form-control"
              ></textarea>
              <label htmlFor="genre">Genre</label>
              <select
                value={updateGame.genre}
                onChange={(e) =>
                  setUpdateGame({ ...updateGame, genre: e.target.value })
                }
                className="form-select"
              >
                <option value="" disabled>
                  Select Genre
                </option>
                <option value="Action">Action</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Story">Story</option>
                <option value="Racing">Racing</option>
              </select>
              

              <label>
                  <input
                    // style={{display:"none"}}
                    type="file"
                    onChange={(e) =>
                      setUpdateGame({ ...updateGame, img: e.target.files[0]})
                    }
                    className="form-control"
                  />
                  <img  style={{width: "100px", height: "100px"}} src={preview?preview:`${baseUrl}/uploads/${updateGame.img}`} alt="" />
              </label>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSave} data-bs-dismiss="modal">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editgame;
