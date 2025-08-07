import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signin = () => {

  let navigate = useNavigate()
  // redirect user to home page after successful signin



  // initialize the two states 
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  // 3 states of posting data
  const[loading, setLoading] = useState("")
  const[error, setError] = useState("")
  const[success, setSuccess] = useState("")

  // function to handle signin
  const handleSignin = async (e) => {
    e.preventDefault()
    setLoading("Please wait...")
    try {
      // create an empty envelope to store our data
      const formdata = new FormData()
      formdata.append("email", email)
      formdata.append("password", password)

      // we need to post the data
      const response = await axios.post("https://salamaabbie.pythonanywhere.com/api/signin", formdata)

      setSuccess(response.data.message)

      // check if user exists
      if(response.data.user) {
        // redirect user to home page
        navigate("/")
      }
      // save user to local storage (how to save and retrieve data from local storage)
      localStorage.setItem("user", JSON.stringify(response.data.user))


      setLoading("")


      
    } catch (error) {

      setError(error.message)
      setLoading("")
      
    }
  }

  return (
    <div className ="row justify-content-center p-4">

      <div className="col-md-6 card shadow p-4">
        <h1 className="text-center">Sign In</h1>

        {/* bind the three states */}
        
        <h1 className="text-warning">{loading}</h1>
        <h1 className="text-success">{success}</h1>
        <h1 className="text-danger">{error}</h1>

        <form action="" onSubmit={handleSignin}>
          <input type="email" placeholder="Enter email" className="form-control" onChange={(e)=>setEmail(e.target.value)} /> <br />
          <input type="password" placeholder="Enter password" className="form-control" onChange={(e)=>setPassword(e.target.value)} /> <br />
          <input type="submit" value="Signin" className="btn btn-primary w-100"  />
          <br />
        </form>

        {/* link to navigate to signup page */}
        <Link to="/signup">Don't have an account? Sign up</Link>

      </div>
    </div>
  )
}

export default Signin