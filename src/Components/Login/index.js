import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    error: '',
  }

  onUserName = e => {
    this.setState({username: e.target.value})
  }

  onPassword = e => {
    this.setState({password: e.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 20})
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({showError: true, error})
    console.log(error)
  }

  onSubmitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userData = {username, password}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showError, error} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-container">
        <div className="login-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="logo"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <h1 className="head">Welcome Back</h1>
            <label htmlFor="user-name" className="input-label">
              User ID
            </label>
            <input
              type="text"
              id="user-name"
              placeholder="Enter User ID"
              className="input-class"
              onChange={this.onUserName}
            />
            <label htmlFor="password" className="input-label">
              PIN
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter PIN"
              className="input-class"
              onChange={this.onPassword}
            />
            <button type="submit" className="login-button">
              Login
            </button>
            {showError && <p className="paragraph">* {error}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login

//     return (
//       <div className="login-container">
//         <div className="login-image-container">

//           <form className="form-container" onSubmit={this.submitForm}>

//             <label className="input-label" htmlFor="user">
//               User ID
//             </label>
//             <input
//               className="input-class"
//               id="user"
//               type="text"
//               placeholder="Enter User ID"
//               onChange={this.changeUser}
//             />
//             <label className="input-label" htmlFor="pin">
//               PIN
//             </label>
//             <input
//               className="input-class"
//               type="password"
//               id="pin"
//               placeholder="Enter PIN"
//               onChange={this.changePin}
//             />
//             <button type="submit" className="login-button">
//               Login
//             </button>
//             {showError && <p className="paragraph"> * {errorMsg}</p>}
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

// export default Login
