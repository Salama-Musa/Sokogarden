import React,{useState} from 'react'
// import {useLocation} from 'react-reacter-dom'
import { useLocation } from 'react-router-dom'

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

    }


  return (
    <div className="row justify-content-center ">
      <h1 className="text-dark text-center">Make Payment-Lipa Na Mpesa</h1>
     

    {/* create a card with the product(including image, description and cost) and two inputs, one for entering the phone number and the other a button saying 'Make Payment" */}
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