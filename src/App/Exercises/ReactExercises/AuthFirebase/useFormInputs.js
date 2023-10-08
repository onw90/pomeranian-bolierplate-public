import { useState } from "react";

export const useFormInputs = () => {
    const [inputs, setInputs] = useState({});
    
    const handleInputChange = (changeEvent) => {
        const { name, value } = changeEvent.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
        //console.log(inputs);
      };

      return [inputs, handleInputChange]
}