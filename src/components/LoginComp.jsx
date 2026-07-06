import React, { useRef, useState } from "react";
import Style from "../css/loginComp.module.css";

const LoginComp = () => {
    let unameRef = useRef();
    let passRef = useRef();

    let [userData, setUserData] = useState({
        uname: "",
        pass: "",
    });
    
    function handleSubmit(e) {
        e.preventDefault();
    
        setUserData({
            [unameRef.current.name]: unameRef.current.value,
            [passRef.current.name]:passRef.current.value
            }
        )
    } 
    console.log(userData);
   
  return (
    <>
      <form className={Style.loginForm} onSubmit={handleSubmit}>
        <table className={Style.table}>
          <tbody>
            <tr>
              <td>
                <label htmlFor="">Username:</label>
              </td>
              <td>
                <input type="text" placeholder="Enter username" name="uname"  ref={unameRef}/>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Password:</label>
              </td>
              <td>
                <input type="text" name="pass" placeholder="Enter password" ref={passRef}/>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <center>
                  <button
                    style={{
                      height: "30px",
                      fontSize: "small",
                      width: "80px",
                      borderRadius: "10px",
                    }}
                  >
                    Login
                  </button>
                </center>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center", color: "blue" }}>
                forget Password?
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default LoginComp;
