import React from "react"
import ProductList from "./components/Product/ProductList/ProductList"
import { ToastContainer } from "react-toastify"

const App = () => {
  
  return (
    <React.Fragment>
      <ProductList/>
      <ToastContainer />
    </React.Fragment>
  )
}

export default App
