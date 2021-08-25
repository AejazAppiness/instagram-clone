import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {lazy, Suspense} from 'react';
import * as ROUTES from './constants/routes'

const Login = lazy(() => import("./pages/login"))
const Signup = lazy(() => import("./pages/sign-up"))

function App() {
  return <Router>
    <Suspense fallback={<p>Loading</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login}/>
        <Route path={ROUTES.SIGN_UP} component={Signup}/>
      </Switch>
    </Suspense>
  </Router>;
}

export default App;
