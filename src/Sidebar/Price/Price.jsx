import Input from '../../components/Input'
import './price.css'

const Price = ({handleChange}) => {
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" name="test2" value=""/>
            <span className="checkmark"></span> <span className="radio-text"></span>  All
        </label>
     
     <Input handleHhange={handleChange} value="0-50" title="$0-50" name="test2"/>
     <Input handleChange={handleChange} value="50-100" title="$50-100" name="test2"/>
     <Input handleChange={handleChange} value="100-150" title="$100-150" name="test2"/>
     <Input handleChange={handleChange} value="150-200" title="Over $150" name="test2"/>
    </div>
  )
}

export default Price