import React from "react"
import Product from "./product"
import Hero from "../Hero/hero"

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    console.log("the next row is the category")
    // console.log(this.props.match.params.cate)
    fetch("https://api.tictail.com/v1.26/stores/5znv/products").then((response) => {
      return response.json()
    }).then((json) => {
      // console.log(json)

      this.setState({
        products: json
      })
    })
  }

  formatPrice(price) {
    return (price / 100).toFixed(2)
  }

  render() {
    console.log("Store", this)
    const kategori = this.props.match.params.cate
    let { products } = this.state
    if (kategori) {
      products = products.filter((product) => {
        const categories = product.categories.map(category => category.title)
        return categories.includes(kategori)
      })
    }
    return (
      <div className="productWrap">
        <div className="hero">
          {/* <Hero className="ProductPage" hero={this.props.prodImage} /> */}
          <Hero className="Home" hero={this.props.store.wallpapers.iphone.url} />
        </div>
        <div className="productHeader">
          Visar {products.length} produkter
        </div>

        <div className="productList">
          {products.map(item =>
            <Product
              updateProducts={this.props.updateCart}
              prodName={item.title}
              prodImage={item.images[0].url}
              prodDescription={item.description}
              prodPrice={this.formatPrice(item.price)}
              prodOrgPrice={this.formatPrice(item.original_price)}
              prodId={item.id}
              category={item.categories[0].title} />)}
        </div>
      </div>
    )
  }

}

export default Filter
