import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import Login from './Components/Login'
import Home from './Components/Home'
import NotFound from './Components/NotFound'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
