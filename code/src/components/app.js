import React from "react"
import Products from "./products"
import "./../index.css"
import Categories from "./categories"

const productsJson = require("./../products.json")

class App extends React.Component {

  render() {
    return (

      <div className="App">
        <div className="header">
          <div className="hamburger">
            Hamburger
          </div>
          <div className="logo">
            Logo
          </div>
          <button id="headerButton">
            <i className="fa fa-shopping-cart" />
          </button>
        </div>

        <Categories />
        <Products />

      </div>
    )
  }

}

export default App
