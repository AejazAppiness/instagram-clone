import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {lazy, Suspense} from 'react';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';

const Login = lazy(() => import("./pages/login"))
const Signup = lazy(() => import("./pages/sign-up"))
const NotFound = lazy(() => import("./pages/not-found"))
const Dashboard = lazy(() => import('./pages/dashboard'))

function App() {
  const {user} = useAuthListener();
  
  return (
    <UserContext.Provider value={{user}}>
      <Router>
        <Suspense fallback={<p>Loading</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login}/>
            <Route path={ROUTES.SIGN_UP} component={Signup}/>
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}

export default App;
