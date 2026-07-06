import React, { useState } from 'react'
import Style from '../css/Registration.module.css'
import { toast } from 'react-toastify';

const Registration = () => {

  let [regData, setRegData] = useState({
    name: "",
    email: '',
    userName: "",
    password: '',
    phoneNo: '',
    gender: '',
    adress:''
  });

  function handleChanges(e) {
    // console.log(e)

    // let name = e.target.name;
    // let value = e.target.value;

    let { name, value } = e.target;

    // console.log(name, value)

    setRegData({
      ...regData,
      [name]:value,
    })

  }

  function handleSubmit(e) {
    e.preventDefault();
    // stringify - object to json
    // parse - json to object

    localStorage.setItem("user", JSON.stringify(regData));
    
    let data = localStorage.getItem("user");
    console.log(JSON.parse(data));

    toast.success("Registration Done! you can continue...")

  }

// localStorage.clear()


  return (
    <form className={Style.regForm} onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="">Name</label>
            </td>
            <td>
              <input type="text" onChange={handleChanges} name='name' />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Email: </label>
            </td>
            <td>
                <input type="text" onChange={handleChanges} name='email'/>
          </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">username: </label>
            </td>
            <td>
              <input type="text" onChange={handleChanges} name='userName' />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Password</label>
            </td>
            <td>
               <input type="text" onChange={handleChanges} name='password'/>
           </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Phone No.</label>
            </td>
            <td>
              <input type="text" onChange={handleChanges} name='phoneNo'/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Gender</label>
            </td>
            <td style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", width:"350px"}}>
              <input type="radio" name='gender' value="male" onChange={handleChanges} /> 
            <label htmlFor="">Male</label>
            <input type="radio" name='gender' value="female" onChange={handleChanges} />
            <label htmlFor="">Female</label>
            <input type="radio" name='gender' value="lgbtq" onChange={handleChanges} />
            <label htmlFor="">Others</label>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Adress: </label>
            </td>
            <td>
              <input type="text" onChange={handleChanges} name='adress'/>
            </td>
          </tr>

          <tr style={{textAlign:'center'}}>
            <td colSpan={2}>
              <button>Submit</button>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default Registration