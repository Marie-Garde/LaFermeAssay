import { useState } from "react";
import axios from "axios";

export default function useForm() {
  const [values, setValues] = useState({
    titre: "",
    date: "",
    heure: "",
    description: "",
    nbPlaces: "",
    prerequis: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/evenements`, values).then((res) => {
      setValues(res.data);
      e.target.reset();
    });
  };

  return { handleChange, values, handleSubmit };
}
