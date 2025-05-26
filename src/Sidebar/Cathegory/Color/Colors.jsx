import './colors.css';
import Input from "../../../components/Input"

const Colors = ({handleChange}) => {
  return (
    <div className='ml'>
    <h2 className="sidebar-title price-title">Color</h2>
    <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" name="test1" value=""/>
            <span className="checkmark all" ></span> <span className="radio-text"></span>  All
        </label>
     

      <Input handleChange={handleChange} value="black" title= "Black" name="test1" color="black"/>
      <Input handleChange={handleChange} value="blue" title= "Blue" name="test1" color="blue"/>
      <Input handleChange={handleChange} value="red" title= "Red" name="test1" color="red"/>
      <Input handleChange={handleChange} value="green" title= "Green" name="test1" color="green"/>
      <Input handleChange={handleChange} value="grey" title= "Grey" name="test1" color="grey"/>

      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="white" name="test1" />
        <span className="checkmark" style={{backGround: "white", border: "2px solid black"}}></span> <span className="white"> White</span>
      </label>
  </div>
  )
}

export default Colors