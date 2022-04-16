import { createContext } from "react";
import useLocalstorage from "../Hooks/useLocalStorage";

const FormContext = createContext()
export default FormContext

export const FormProvider = ({children}) => {

  const [travelDate, setTravelDate] = useLocalstorage('travelDate', )
  const [countryName, setCountryName] = useLocalstorage('countryName', '')
  const [fullName, setFullName] = useLocalstorage('fullName', '')


  return (
    <FormContext.Provider value={{
      travelDate,
      setTravelDate,
      countryName,
      setCountryName,
      fullName,
      setFullName,
    }}>
      {children}
    </FormContext.Provider>
  )
}