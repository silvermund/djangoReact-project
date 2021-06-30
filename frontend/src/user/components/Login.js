import React,{useState} from 'react'
import { userLogin } from 'api'

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',  
  })

  const {username, password} = `userInfo`


  const handleSubmit = e => {
    e.preventDefault()
    alert(`전송 클릭: ${JSON.stringify({...userInfo})}`)
    userLogin({...userInfo})
    .then(res => {
      alert(`로그인 완료 : ${res.data} `)
      // history.push('login')
      
    })
    .catch(err => {
      alert(`로그인 실패 : ${err} `)

    })



  }

  const handleClick = e => {
    e.preventDefault()
    alert('취소 클릭')
  }

  const handleChange = e => {
    const { name, value } = e.target
    setUserInfo({
      ...userInfo,
      [name]: value
    })

  }
    return (<>
    <h2>Login Form</h2>

<form onSubmit={handleSubmit} method="post">
  <div className="imgcontainer">
    <img src="https://www.w3schools.com/howto/img_avatar2.png" style={{width: "300px"}} alt="Avatar" className="avatar"/>
  </div>

  <div className="container">
    <label labelFor="username"><b>Username</b></label>
    <input type="text" onChange={handleChange} placeholder="Enter Username" name="username" value={username} required/>

    <label labelFor="password"><b>Password</b></label>
    <input type="password" onChange={handleChange} placeholder="Enter Password" name="password" value={password} required/>
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div className="container" style={{backgroundColor: "#f1f1f1"}}>
    <button type="button" onClick={handleClick}className="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
   
    </>)
}

export default Login