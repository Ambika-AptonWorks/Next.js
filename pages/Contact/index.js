import React from "react";
import Form from "../../components/Form";
import HomeStyles from '../../styles/Home.module.css'

const Contact = () => {
  return (
    <div className={HomeStyles.container}>
      <h1 style={{ textAlign: "center" }}>Contact</h1>
      <Form />  
  </div>
  );
};

export default Contact;
