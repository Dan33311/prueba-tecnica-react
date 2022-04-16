import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import FormContext from "../context/FormContext";


const FormComponent = () => {
  
  const actualDate = new Date()
  const navigate = useNavigate()

  const {
    travelDate,
    setTravelDate,
    countryName,
    setCountryName,
    fullName,
    setFullName,
    formData,
    setFormData,
    storedValue,
    setStoredValue
  } = useContext(FormContext)

  
  useEffect(() => {
    localStorage.setItem("storedValue", JSON.stringify(storedValue))
  }, [storedValue])

  const onChangeFullName = (e) => {
    setFullName(e.target.value)
    setFormData({ ...formData, fullname: e.target.value })
  }
  const regexpVerification = (e) => {
    const re = /[a-zA-Z ]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }

  const onChangeCountryName = (e) => {
    setCountryName(e.target.value)
    setFormData({ ...formData, countryname: e.target.value })
  }

  const onChangeTravelDate = (date) => {
    setTravelDate(date)
    const timeToTravelInMilliseconds = date.getTime()
    setFormData({ ...formData, traveldate: timeToTravelInMilliseconds })
  }
  
  const ExampleCustomTimeInput = ({ date, value, onChange }) => (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ border: "solid 1px pink" }}
    />
  )

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if(travelDate === undefined){
      setTravelDate(actualDate)
    }
    setStoredValue(formData)
    
    console.log(">>> (submit) formData:", formData);
    console.log(">>> (submit) almacenamiento:", storedValue);
    console.log(">>> (submit) almacenamiento.traveldate:", storedValue.traveldate);
    setTimeout(() => {
      navigate('/countdown')
      // navigate('/about')   
    }, 1000)
  }

  console.log(">>> formData:", formData);
  console.log(">>> storedValue:", storedValue);


  return (
    <div className="form-container">
      <div className="form d-flex flex-column justify-content-center p-5 rounded">
        <form onSubmit={handleFormSubmit} >

          <h2 className="pb-4 pt-2 form-title">Form Title</h2>

          <label className="lb1 d-flex flex-column mb-3" >
            {/* <span className="sp1 text-left text-semi-bold pb-1">Full name:</span> */}
            <input
              className="form-control py-2 form-t"
              type="text"
              name="fullname"
              required='Please fill out this field.' 
              placeholder="Your full name"
              // value={}
              maxLength="60"
              onChange={onChangeFullName}
              onKeyPress={(e) => regexpVerification(e)} 
            />
          </label>

          <div className="country py-3">
            <select 
              className="select-country text-secondary rounded" 
              value={countryName} 
              onChange={(event) => onChangeCountryName(event)}
              required
            >
              <option className="" value="" disabled>Where are you going?</option>
              <option value="colombia">Colombia</option>
              <option value="peru">Peru</option>
              <option value="argentina">Argentina</option>
              <option value="brasil">Brasil</option>
            </select>
          </div>

          <div className="pt-3 pb-5">
            <DatePicker
              className="select-date pe-4 py-2 text-secondary rounded"
              placeholderText="Your travel date"
              // if null -> show placeholderText
              selected={(travelDate === undefined) ? null : travelDate}
              onChange={onChangeTravelDate} 
              minDate={actualDate}
              showTimeInput
              customTimeInput={<ExampleCustomTimeInput />}
              // maxDate={startDate.setDate(startDate.getDate()+10)}
            />
          </div>
          <button type="submit" className="btn px-5 btn-form">Submit</button>

        </form>
      </div>
    </div>
  );
}

export default FormComponent;