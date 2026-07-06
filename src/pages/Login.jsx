import React, { useState } from 'react'
import Registration from '../components/Registration'
import LoginComp from '../components/LoginComp'
import Style from '../css/Login.module.css'

const Login = () => {

  let [choose, setChoose] = useState(false);

  function handleButton() {
    setChoose(!choose)
  }
  return (
    <>
      <section className={Style.sectionLogin}>

        <div className={Style.headButton}>
          <button onClick={handleButton}>Registration</button>
          <button onClick={handleButton}>Login</button>
        </div>
        <div className={Style.formBox}>
          {choose?<LoginComp/> : <Registration/>}
      </div>
        
        
      </section>

      
    </>
  )
}

export default Login