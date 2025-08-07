import React from 'react'

const Navbar = () => {
  return (
         <section className="row">
        <div className="col-md-12">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a href="#" className="navbar-brand"> <b className="text-info">Soko <span className="text-dark">Garden</span></b></a>
                <button className="navbar-toggler" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarcollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarcollapse">
                    <div className="navbar-nav">
                        <a href="/" className="nav-link active">Get products</a>
                        <a href="/addproducts" className="nav-link">Add Products</a>
                    </div>

                    {/* put the signup and signin buttons on right hand side  */}
                    <div className="ms-auto">
                        <a href="/signup" className="btn btn-outline-dark me-3">Signup</a>  
                        <a href="/signin" className="btn btn-outline-dark me-3">Signin</a>
                    </div>

                </div>
            </nav>
        </div>
     </section>
  )
}

export default Navbar