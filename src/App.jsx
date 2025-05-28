import { useState } from "react";
import Navigation from "./components/Nav/Navigation";
import Products from "./products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import Footer from "./Footer/Footer";
// Database
import products from "./db/data"

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMenu, setIsMenu] = useState(true);

  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }


  // input filter
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  // ......InputFilter.......
  const filteredItems = products.filter(product => product.title.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);

  // ......Radio filter.......
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ......Buttons filter.......
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    // Filter by search query
    if (query) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by selected category OR price range
    if (selected) {
      if (selected.includes("-")) {
        const [min, max] = selected.split("-").map(Number);
        filteredProducts = filteredProducts.filter(product =>
          product.newPrice >= min && product.newPrice <= max
        );

      } else {
        filteredProducts = filteredProducts.filter(product =>
          product.category === selected ||
          product.color === selected ||
          product.company === selected
        );
      }
    }

    return filteredProducts.map(product => (
      <Card key={product.id} {...product} />
    ));
  };


  const result = filteredData(products, selectedCategory, query)

  return (
    <>
      <Sidebar
        handleChange={handleChange}
        isMenu={isMenu}
      />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended
        handleClick={handleClick}
        toggleMenu={toggleMenu}
        isMenu={isMenu}
      />
      <Products result={result} />
      <Footer />
    </>
  )
}

export default App
