import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import FormContext from "../context/FormContext";


const FormComponent = () => {
  
  const actualDate = new Date()
  // const now = actualDate
  const navigate = useNavigate()

  const {
    travelDate,
    setTravelDate,
    countryName,
    setCountryName,
    fullName,
    setFullName
  } = useContext(FormContext)

  const handleChangeValue = (event) => {
    setCountryName(event.target.value)
  }
  const handleEditInputChange = (event) => {
    setFullName(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(travelDate === undefined){
      setTravelDate(actualDate)
    }
    navigate('/countdown')
    console.log(">>> (submit) countryName:", countryName);
    console.log(">>> (submit) fullName:", fullName);
    console.log(">>> (submit) travelDate:", travelDate);
    console.log(">>> travelDate:", travelDate);
  }

  const regexpVerification = (e) => {
    const re = /[a-zA-Z]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }

  const ExampleCustomTimeInput = ({ date, value, onChange }) => (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ border: "solid 1px pink" }}
    />
  );

  console.log(">>> countryName:", countryName);
  console.log(">>> actualDate:", actualDate);
  console.log(">>> travelDate:", travelDate);
  // console.log(">>> now:", now);

  return (
    <div className="form">
      <form onSubmit={handleSubmit} >

        <h2>Form Title</h2>

        <label className="lb1 d-flex flex-column mb-3" >
          <span className="sp1 text-left text-semi-bold">Full name:</span>
          <input
            className="form-control"
            type="text"
            name="fullname"
            required='Please fill out this field.' 
            placeholder="Your full name"
            // value={}
            maxLength="60"
            onChange={handleEditInputChange}
            onKeyPress={(e) => regexpVerification(e)} 
          />

        </label>

        {/* <label>Where are you going?</label> */}
        <div className="country py-3">
          <select 
            className="select-country ps-2 pe-5 py-2 text-secondary rounded" 
            value={countryName} 
            onChange={(event) => handleChangeValue(event)}
            required
          >
            <option className="" value="" disabled>Where are you going?</option>
            <option value="peru">Peru</option>
            <option value="argentina">Argentina</option>
            <option value="chile">Chile</option>
            <option value="brasil">Brasil</option>
          </select>
        </div>

        <div className="py-3">
          <DatePicker
            className="select-date pe-4 py-2 text-secondary rounded"
            placeholderText="Travel date"
            // if null -> show placeholderText
            selected={(travelDate === undefined) ? null : travelDate}
            onChange={(date) => setTravelDate(date)} 
            minDate={actualDate}
            showTimeInput
            customTimeInput={<ExampleCustomTimeInput />}
            // maxDate={startDate.setDate(startDate.getDate()+10)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    </div>
  );
}

export default FormComponent;