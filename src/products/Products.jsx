import "./products.css";


const Products = ({ result }) => {
  return (
    <div className="main-content">
      <section className="card-container">{result}</section>
    </div>
  )
}

export default Products