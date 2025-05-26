import Input from "../../components/Input";
import "./cathegory.css";
import ThemeToggle from "../../components/ThemeToggle";

const Cathegory = ({ handleChange }) => {
  return (
    <>
      <ThemeToggle />
      <h2 className="sidebar-title">Cathegory</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" name="test" value="" />
          <span className="checkmark"></span> <span className="radio-text"></span>  All
        </label>


        <Input handleChange={handleChange} value="sneakers" title="Sneakers" name="test" />
        <Input handleChange={handleChange} value="flats" title="Flats" name="test" />
        <Input handleChange={handleChange} value="sandals" title="Sandals" name="test" />
        <Input handleChange={handleChange} value="hills" title="Hills" name="test" />
      </div>
    </>
  )
}

export default Cathegory