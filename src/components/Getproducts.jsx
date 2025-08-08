import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Getproducts = () => {

  let navigate = useNavigate()

// create hooks that will enable to store different data
const[product_name, setProductName] = useState("")
const[product_description, setProductDescription] = useState("")
const[product_cost, setProductCost] = useState("")
const[product_image, setProductImage] = useState("")

  // initialize 3 states for getting/fetching data 
  const[loading, setLoading] = useState("")
  const[products, setProducts] = useState([])
  const[error, setError] = useState("")
  const [searchProduct, setSearchProduct] = useState("");



  // function to get products
  const getProducts = async () => {

    setLoading("Please wait...")
    try {
      const response = await axios.get("https://salamaabbie.pythonanywhere.com/api/get_products_details")

      setProducts(response.data)
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
    }

  }

  // call the function 
  useEffect(
    () => {
      getProducts()
    }, []
  )

  // products.map((product)=>console.log("single product",product))

  const imagepath = "https://salamaabbie.pythonanywhere.com/static/images/"

  const filteredProducts = products.filter(product =>
    product.product_name?.toLowerCase().includes(searchProduct.toLowerCase())
    ||
    product.product_description?.toLowerCase().includes(searchProduct.toLowerCase())
    ||
    product.product_cost?.toString().includes(searchProduct)

  )
  return (
    <div>
      {/* we'll have a search filter  */}
      <div className='row justify-content-center'>
        <input type="text"
         placeholder='Search products...' className='form-control'
          />
      </div>


     {/* we'll design a single item/product*/}

      <section className="row">

        {/* we will map our products here */}
        {filteredProducts.map ((product)  => (

        <div className="col-md-3 card shadow mt-4">
          <img src={imagepath + product.product_photo} alt="" />
          <h3>{product.product_name}</h3>
          <p>{product.product_description}</p>
          <b className="text-success"> Ksh. {product.product_cost}</b>

          <button className='btn btn-dark w-100 mb-2'>Add to Cart</button>
          <button className='btn btn-outline-primary w-100 mb-2' onClick={()=>navigate("/makepayment", {state:{product}} )}>Purchase Now</button>
        </div>


        ))}
      </section>
      {/* we'll designa single item/product  */}
    </div>

  )
}

export default Getproducts