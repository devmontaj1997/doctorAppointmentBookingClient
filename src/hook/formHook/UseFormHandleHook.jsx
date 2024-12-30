import { useState } from "react";

const UseFormHandleHook = (initialState) => {
  const [input, setInput] = useState(initialState);

  // handleInputChange
  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // handle form reaset

  const handleFormReset = () =>{
    setInput(initialState)
  }
  return {input,handleInputChange,handleFormReset };
};

export default UseFormHandleHook;
