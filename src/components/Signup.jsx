import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

// initialize the 4 states 
  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[phone, setPhone] = useState("")


  // 3 states of posting data 
  // loading, error, success 
  const[loading, setLoading] = useState("")
  const[error, setError] = useState("")
  const[success, setSuccess] = useState("")

  // function to handle signup 
  // our function is going to be async -await 
  const handleSignup = async (e)=>{
    e.preventDefault()
    setLoading("Please wait...")

    try {
      
      // create an empty envelope to store our data 
      // we'll call that envelope as formdata
      const formdata = new FormData()
      formdata.append("username", username)
      formdata.append("email", email)
      formdata.append("phone", phone)
      formdata.append("password", password)

      // we need to post the data 
      const response = await axios.post("https://salamaabbie.pythonanywhere.com/api/signup", formdata)
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
        <h1 className="text-center">Signup</h1>

        {/* bind the three states  */}
        <h1 className="text-warning">{loading}</h1>
        <h1 className="text-success">{success}</h1>
        <h1 className="text-danger">{error}</h1>

        {/* Create a form with 4 input fields for username, email, password, and phone number */}

        <form action=""  onSubmit={handleSignup}> 
          
          <input type="text" placeholder='Enter username' className='form-control' onChange={(e)=>setUsername(e.target.value)}/>
          <br/>
          <input type="email" placeholder='Enter email' className='form-control' onChange={
            (e)=> setEmail(e.target.value)
            }/>
          <br/>
          <input type="password" placeholder='Enter password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
          <br/>
          <input type="tel" placeholder='Enter phone number' className='form-control'onChange={(e)=>setPhone(e.target.value)}/>
          <br/>
        
      {/* Create a sign up button with primary color and below the button, have a link redirecting to signin page */}
         <input type="submit" value="Signup" className= "btn btn-primary w-100" />
          <br/>
         
          
        </form>

        <Link to="/signin">Already have an account? Signin</Link>

      </div>
    </div>
  )
}

export default Signup