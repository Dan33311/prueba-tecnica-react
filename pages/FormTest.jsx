import { useState } from "react";


const FormTest = () => {

  const [selectValue, setSelectvalue] = useState("default")

  const handleChangeValue = (event) => {
    setSelectvalue(event.target.value)
  }


  console.log(">>> selectValue", selectValue);

  return (
    <div>
      <select value={selectValue} onChange={(event) => handleChangeValue(event)}>
        <option value="default" disabled >Where are you going?</option>
        <option value="peru">Peru</option>
        <option value="argentina">Argentina</option>
        <option value="chile">Chile</option>
        <option value="brasil">Brasil</option>
      </select>
    </div>
  );
}

export default FormTest;