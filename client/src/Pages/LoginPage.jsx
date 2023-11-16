import { useState } from 'react'
import './css/main.css'
import './css/util.css'
import { useDispatch } from 'react-redux'
import { postLogin } from '../store/actions'
import { useNavigate } from 'react-router'


function LoginPage(){
    const dispacth = useDispatch()
    const navigate = useNavigate()
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    })

    function changeHandler(e){
        const {name, value} = e.target
        setFormLogin({
            ...formLogin,
            [name]: value
        })
    }
    function submitLogin(e){
        e.preventDefault()
        dispacth(postLogin(formLogin, navigate))
    }
    return (
        <>
        <div className="limiter">
  <div className="container-login100">
    <div className="wrap-login100">
      <div
        className="login100-form-title"
        style={{ backgroundImage: "url(/bg-01.jpg)" }}
      >
        <span className="login100-form-title-1">Sign In</span>
      </div>
      <form onSubmit={submitLogin} className="login100-form validate-form">
        <div
          className="wrap-input100 validate-input m-b-26"
          data-validate="Username is required"
        >
          <span className="label-input100">Email</span>
          <input
            className="input100"
            type="email"
            name="email"
            value={formLogin.email}
            onChange={changeHandler}
            placeholder="Enter username"
          />
          <span className="focus-input100" />
        </div>
        <div
          className="wrap-input100 validate-input m-b-18"
          data-validate="Password is required"
        >
          <span className="label-input100">Password</span>
          <input
            className="input100"
            type="password"
            name="password"
            onChange={changeHandler}
            value={formLogin.password}
            placeholder="Enter password"
          />
          <span className="focus-input100" />
        </div>
        <div className="flex-sb-m w-full p-b-30">
          <div className="contact100-form-checkbox">
            <input
              className="input-checkbox100"
              id="ckb1"
              type="checkbox"
              name="remember-me"
            />
            <label className="label-checkbox100" htmlFor="ckb1">
              Remember me
            </label>
          </div>
        </div>
        <div className="container-login100-form-btn">
          <button className="login100-form-btn">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>

        </>
    )
}

export default LoginPage