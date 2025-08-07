import React from 'react'

const Mpesapayment = () => {
  return (
    <div className="row justify-content-center ">
      <h1 className="text-dark text-center">Make Payment-Lipa Na Mpesa</h1>

    {/* create a card with the product(including image, description and cost) and two inputs, one for entering the phone number and the other a button saying 'Make Payment" */}
      <div className="col-md-6 card shadow p-4">
        <img src="Diaries.jpeg" alt="Product" className="img-fluid text-center align-center" style={{height:"400px", width:"400px" }}  />
        <h2 className="text-info">Dork Diaries</h2>
        <p className="text-info">This is a great novel</p>
        <p className="text-warning">Ksh.1500</p>

        <form>
          <div className="justify-content-center mb-3">
            <input type="text" className="form-control" id="phoneNumber" placeholder="Enter phone(2547XXXXXXXX)" />
          </div>
          <button type="submit" className="btn btn-success w-100">Make Payment</button>
        </form>
      </div>

    </div>
  )
}

export default Mpesapayment