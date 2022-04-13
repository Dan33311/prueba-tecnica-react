import { useState, createContext } from "react";

const FormContext = createContext()
export default FormContext


export const FormProvider = ({children}) => {
  
  const [storedValue, setStoredValue] = useState(() => {
    let setValue = localStorage.getItem('storedValue')
    if (setValue) {
      return JSON.parse(setValue);
    } else {
      return [];
    }
  })

  const [travelDate, setTravelDate] = useState()
  const [countryName, setCountryName] = useState("")
  const [fullName, setFullName] = useState("")

  const [formData, setFormData] = useState({
    countryname: '',
    fullname: '',
    traveldate: {}
  })

  return (
    <FormContext.Provider value={{
      travelDate,
      setTravelDate,
      countryName,
      setCountryName,
      fullName,
      setFullName,
      formData,
      setFormData,
      storedValue,
      setStoredValue,
    }}>
      {children}
    </FormContext.Provider>
  )
}