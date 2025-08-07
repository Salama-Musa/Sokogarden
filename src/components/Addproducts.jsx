import React,  { useState } from 'react'
import axios from 'axios'



const Addproducts = () => {

  // initialize the 4 states 
  const[product_name, setProductName] = useState("")
  const[product_description, setProductDescription] = useState("")
  const[product_cost, setProductCost] = useState("")
  const[product_photo, setProductPhoto] = useState("")

  // 3 states of posting data
  const[loading, setLoading] = useState("")
  const[error, setError] = useState("")
  const[success, setSuccess] = useState("")

  // define the function to add product
  const handleAddProduct= async (e) =>{

    e.preventDefault()
    setLoading("Please wait...")

    try {
      // create an empty envelope to store our data
      const formdata = new FormData()
      formdata.append("product_name", product_name)
      formdata.append("product_description", product_description)
      formdata.append("product_cost", product_cost)
      formdata.append("product_photo", product_photo)

      // we need to post the data
      const response = await axios.post("https://salamaabbie.pythonanywhere.com/api/addproduct", formdata)

      setSuccess(response.data.message)
      setLoading("")
      
    } catch (error) {
      // network error
      setError(error.message)
      setLoading("")
      
    }

  }
  return (
    <div className='row justify-content-center p-4'>

      <div className="col-md-6 card shadow p-4">
        <h1 className='text-center text success'>Add Products</h1>
        {/* bind the three states */}

        <h1 className="text-warning">{loading}</h1>
        <h1 className="text-success">{success}</h1>
        <h1 className="text-danger">{error}</h1>


        {/* create a form to add products */}


        <form action="" onSubmit={handleAddProduct}>

          <input type="text" placeholder='Enter product name' className='form-control'onChange={(e)=>setProductName(e.target.value)} />

          <textarea name="" id="" cols='30' rows='10' placeholder='Enter product description' className='form-control' onChange={(e)=>setProductDescription(e.target.value)}></textarea> <br />

          <input type="number" placeholder='Enter product cost' className='form-control' onChange={(e)=>setProductCost(e.target.value)} /> <br />

          <label htmlFor="">Product photo</label>
          <input type="file" className='form-control' accept='image/*' onChange={(e)=>setProductPhoto(e.target.files[0])}/> <br />

          <button type='submit' className='btn btn-primary w-100'>Add Product</button>

        </form>






      </div>

    </div>
  )
}

export default Addproducts