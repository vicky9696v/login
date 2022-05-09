import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Home = () => {
  const logoutButton = props => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
    if (Cookies.get === undefined) {
      history.replace('/login')
    }
  }

  return (
    <div className="home-main-container">
      <nav className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="logo-image"
        />
        <Link to="/login">
          <li>
            <button
              type="button"
              className="home-button"
              onClick={logoutButton}
            >
              Logout
            </button>
          </li>
        </Link>
      </nav>

      <div className="card-container">
        <h1 className="heading">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
          alt="digital card"
          className="digital-card"
        />
      </div>
    </div>
  )
}

export default withRouter(Home)
