import React, { useState } from "react";
import "./singUp.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const SingUp = () => {
  const [data,setData]=useState([]);
  
  const formik = useFormik({
    initialValues: {
      userName: "",
      name: "",
      email: "",
      password: "",
      status: "",
      country: "",
  },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(10, "User Name must be less than or equal to Ten charaters")
        .required("This is required Field"),
      name: Yup.string().required("This is required Field"),
      email: Yup.string()
        .email("Invalid Email")
        .required("E-mail is required Field"),
      password: Yup.string().required("This is required Field"),
      status: Yup.string().required("This is required Field"),
      country: Yup.string().required("This is required Field"),
    }),
    onSubmit: (value) => {
      console.log(data);
      setData(JSON.stringify(value))
      
    }
  });
  return (
    <div className="container">
      <h1>SingUp Form</h1>
      <div className="singForm">
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.userName && formik.errors.userName && (
            <p style={{ color: "red" }}>{formik.errors.userName}</p>
          )}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <p style={{ color: "red" }}>{formik.errors.name}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p style={{ color: "red" }}>{formik.errors.email}</p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p style={{ color: "red" }}>{formik.errors.password}</p>
          )}
          <div className="radio-btn">
            <div>
              <label>Single</label>
              <input
                type="radio"
                name="status"
                value="Single"
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <label>Commited</label>
              <input
                type="radio"
                name="status"
                value="Commited"
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <label>Coder</label>
              <input
                type="radio"
                name="status"
                value="Coder"
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <select
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Nepal">Nepal</option>
            <option value="USA">USA</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="China">China</option>
            <option value="Turkey">Turkey</option>
          </select>
          {formik.touched.country && formik.errors.country && (
            <p style={{ color: "red" }}>{formik.errors.country}</p>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* <div className="table">
        <h1>User Information</h1>
        <table>
          <tbody>
            <tr>
              <th>S.No</th>
              <th>User Name</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Password</th>
              <th>Status</th>
              <th>Country</th>
            </tr>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{item.userName}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.status}</td>
                  <td>{item.country}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default SingUp;
