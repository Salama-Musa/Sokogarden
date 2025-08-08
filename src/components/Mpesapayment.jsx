import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Mpesapayment = () => {


  const{product} = useLocation().state || {}

    const imagepath = "https://salamaabbie.pythonanywhere.com/static/images/"

  // we need a state for phone 
  const[phone, setPhone] = useState("")

    // 3 states of posting data
    const[loading, setLoading] = useState("")
    const[error, setError] = useState("")
    const[success, setSuccess] = useState("")

    // define function to handle mpesa payment 
    const handleMpesaPayment = async (e) =>{
  e.preventDefault()
  setLoading("Please wait...")
  setError("")
  setSuccess("")
  try {
    const formdata = new FormData()
    formdata.append("phone", phone)
    formdata.append("amount", product.product_cost) // Add amount
    formdata.append("product_name", product.product_name) // Optional: add more info

    const response = await axios.post("https://salamaabbie.pythonanywhere.com/api/mpesa_payment", formdata)
    setSuccess(response.data.message)
    setLoading("")
  } catch (error) {
    setError(error.response?.data?.message || error.message)
    setLoading("")
  }
}


  return (
    <div className="row justify-content-center ">
      <h1 className="text-dark text-center">Make Payment-Lipa Na Mpesa</h1>
        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2>

      <div className="col-md-6 card shadow p-4">
        <img src={imagepath + product.product_photo} alt="" />
        <h2 className="text-info">{product.product_name}</h2>
        <p className="text-info">{product.product_description}</p>
        <p className="text-warning">{product.product_cost}</p>

        <form action="" onSubmit={handleMpesaPayment}>
          <input type="tel"
           placeholder="Enter phone(+2547XXXXXXXX)"
            className='form-control' 
            onChange={(e)=>setPhone(e.target.value)} /> <br/>
          <button type="submit" className="btn btn-success w-100">Make Payments</button>
        </form>
      </div>

    </div>
  )
}

export default Mpesapayment