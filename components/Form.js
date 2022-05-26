import React from "react";
import HomeStyles from '../styles/Home.module.css'

const initialValues = [
  {
    username: "",
    email: "",
    description: "",
  },
];

const Form = () => {
  const [data, setData] = React.useState(initialValues);
  
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    e.preventDefault();  
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
        username:"",
        email:"",
        description:""
    })
    if(submitHandler){
        alert("data saved")
    }
  };
  return (
    <div>
      <center className={HomeStyles.card}
      style={{"marginLeft":"500px","textAlign":"center","padding":"20px"}}>
        <form onSubmit={submitHandler}>
          <div>
            <label>Username</label>
          </div>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={changeHandler}
          />
          <div>
            <label>Email</label>
          </div>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
          <div>
            <label>Description</label>
          </div>
          <textarea  rows="5" cols="20"
            name="description"
            value={data.description}
            onChange={changeHandler}
          />
          <div style={{ margin: "5px" }}>
            <input type="submit" value="submit" />
          </div>
        </form>
      </center>
    </div>
  );
};

export default Form;
