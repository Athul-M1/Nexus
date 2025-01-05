import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Editgame from './Editgame'
import { deletgame, getGames } from '../Services/allAPI'
import { baseUrl } from '../Services/baseURL'

const Reviews = () => {
  // const [editResponse,setEditResponse]= useState('')
  const [games, setGames] = useState([])
  const allgames = async () => {
    const token = sessionStorage.getItem('token')
    const reqHeader = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
    const response = await getGames(reqHeader)
    setGames(response.data.products)
    console.log(response.data.products)
  }
  useEffect(() => {
    allgames()
  }, [])

  const handleDelete = async(id) => {
    const token = sessionStorage.getItem('token')
    const reqHeader = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
    const response = await deletgame(id,reqHeader)
    allgames()
    // console.log(response)
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 mt-2">
            <Sidebar />
          </div>
          <div className="col-9">
            <h1 className='text-center mb-2 mt-1'>Products</h1>
            <div className="table-responsive">
              <table className="table table-hover table-bordered mt-2">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Game Name</th>
                    <th scope="col">Release date</th>
                    <th scope="col">price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Delete </th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    games.map((game,index)=>(
                     <tr>
                        <td scope='row'>{index}</td>
                        <td>{game.gameName}</td>
                        <td>1/12/2024</td>
                        <td>{game.gamePrice}</td>
                        <td>{game.description}</td>
                        <td><img src={`${baseUrl}/uploads/${game.gameImage}`} style={{ width: "100px", height: "100px" }} /></td>
                          <td><i className="fa-solid fa-trash" onClick={() => handleDelete(game._id)}></i></td>
                          <td><Editgame data={game} index={index}/></td>
                     </tr>
                    ))
                  }
                  {/* {
                    games.length > 0 ?
                        games?.map((game,index) => (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{game.gameName}</td>
                          <td>2020-01-01</td>
                          <td>{game.gamePrice}</td>
                          <td>{game.description}</td>
                          <td><img src={`${baseUrl}/uploads/${game.gameImage}`} style={{ width: "100px", height: "100px" }} /></td>
                          <td><i className="fa-solid fa-trash" onClick={() => handleDelete(game._id)}></i></td>
                          <td><Editgame data={game}/></td>
                        </tr>
                      ))
                      : "Nothing to display"
                  } */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews



// import React, { useEffect, useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import { baseURL } from '../services/Baseurl';
// import { updateProducts } from '../services/AllAPI';

// function Editmodal({product}) {
//   console.log(product);
  
//   const [updateform,setUpdateform]=useState({
//     name: product.name,
//     category: product.category,
//     price: product.price,
//     description:product.description,
//     image:'',
//     brand: product.brand,
//     material: product.material,
//   })
  
//   const [show, setShow] = useState(false);
//   const handleShow = () => setShow(true);

//   const handleClose = () => setShow(false);

//   const [preview,setPreview]=useState('')

//   // console.log(updateform);
//   useEffect(()=>{
//     if(updateform.image){
//       setPreview(URL.createObjectURL(updateform.image))
//     }
//   },[updateform.image])
     
//   const handleSubmit=async()=>{
//     const {name,category,price,description,image,brand,material}=updateform
//     if(!name || !category || !price || !description  || !brand || !material){
//       alert("Fill the form..........")
//     }else{
//       const token=sessionStorage.getItem('token')
//       const reqHeader={
//         'Authorization':Bearer ${token},
//         'Content-Type':'multipart/form-data'
//       }   
//       const reqBody=new FormData()
//       reqBody.append('name',name)
//       reqBody.append('category',category)
//       reqBody.append('price',price)
//       reqBody.append('description',description)
//       preview?reqBody.append('productImage',updateform.image):reqBody.append('productImage',product.image)
//       reqBody.append('brand',brand)
//       reqBody.append('material',material)

//       const response=await updateProducts(product._id,reqHeader,reqBody) 
//       // console.log(response);
      
//     }
//   }
  
//   return (
//     <>
//       <button
//         type="button"
//         onClick={handleShow}
//         className="btn btn-warning"
//         data-mdb-ripple-init
//         id="edit-button"
//       >
//         Edit
//       </button>

//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Product</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form>
//           <div className="mb-3">
//               <div><label htmlFor="product-image" className="form-label">Image</label></div>
//               <label>
//                 <input style={{display:'none'}}
//                   type="file"
//                   className="form-control"
//                   id="product-image"
//                   name="image"
//                   onChange={(e)=>setUpdateform({...updateform,image:e.target.files[0]})}
//                 />
//                 <img style={{height:'40vh',width:'100%'}} src={preview?preview:${baseURL}/Uploads/${product.image}} alt="" />
//               </label>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="product-name" className="form-label">Product Name</label>
//               <input value={updateform.name} onChange={(e)=>setUpdateform({...updateform,name:e.target.value})}
//                 type="text"
//                 className="form-control"
//                 id="product-name"
//                 name="name"
//               />
//             </div>
//             <div className="mb-3">
//             <label htmlFor="category-name" className="form-label">Category</label>
//               <select
//                 value={updateform.category}
//                 onChange={(e) => setUpdateform({ ...updateform, category: e.target.value })}
//                 className="form-control"
//                 id="category-name"
//                 name="category"
//               >
//                 <option value="">Select Category</option>
//                 <option value="Football">Football</option>
//                 <option value="Cricket">Cricket</option>
//                 <option value="Badminton">Badminton</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="product-description" className="form-label">Description</label>
//               <textarea value={updateform.description} onChange={(e)=>setUpdateform({...updateform,description:e.target.value})}
//                 className="form-control"
//                 id="product-description"
//                 name="description"
//                 rows="3"
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="product-price" className="form-label">Price</label>
//               <input value={updateform.price} onChange={(e)=>setUpdateform({...updateform,price:e.target.value})}
//                 type="text"
//                 className="form-control"
//                 id="product-price"
//                 name="price"
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="product-brand" className="form-label">Brand</label>
//               <input value={updateform.brand} onChange={(e)=>setUpdateform({...updateform,brand:e.target.value})}
//                 type="text"
//                 className="form-control"
//                 id="product-brand"
//                 name="brand"
//               />  
//             </div>
//             <div className="mb-3">
//               <label htmlFor="product-material" className="form-label">Material</label>
//               <input value={updateform.material} onChange={(e)=>setUpdateform({...updateform,material:e.target.value})}
//                 type="text"
//                 className="form-control"
//                 id="product-material"
//                 name="material"
//               />
//             </div>
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Editmodal;