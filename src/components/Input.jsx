import Cathegory from "../Sidebar/Cathegory/Cathegory"
import "../Sidebar/Cathegory/cathegory.css"

const Input = ({handleChange, value, title, name, color}) => {
    return (
        <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" name={name} value={value}/>
            <span className="checkmark" style={{backgroundColor: color}}></span> <span className="radio-text"></span> {title}
        </label>
    )
}

export default Input