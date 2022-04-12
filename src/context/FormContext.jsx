import { useState, createContext } from "react";

const FormContext = createContext()
export default FormContext


export const FormProvider = ({children}) => {
  const [travelDate, setTravelDate] = useState()
  const [countryName, setCountryName] = useState("default")
  const [fullName, setFullName] = useState("")

  return (
    <FormContext.Provider value={{
      travelDate,
      setTravelDate,
      countryName,
      setCountryName,
      fullName,
      setFullName
    }}>
      {children}
    </FormContext.Provider>
  )
}