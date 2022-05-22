import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import ProtectedRoutePath from './ProtectedRoutePath'
import Login from './Components/Login'
import Home from './Components/Home'
import NotFound from './Components/NotFound'

const App = () => (
  <>
    <Switch>
      <ProtectedRoutePath exact path="/" component={Home} />
      <Route exact path="/ebank/login" component={Login} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
