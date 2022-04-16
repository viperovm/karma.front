import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

// import { Provider } from 'react-redux'
// import store from './store'

import './index.css'
import Home from './pages/Home'
import Account from './pages/Account'
import Search from './pages/Search'
import Review from './pages/Review'
import Login from './pages/Login'
import Register from './pages/Register'
import PasswordReset from './pages/PasswordReset'
import PasswordConfirm from './pages/PasswordConfirm'

// import Page404 from './pages/404'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/account' element={<Account/>} />
        <Route exact path='/search' element={<Search/>} />
        <Route exact path='/reviews' element={<Review/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/password-reset' element={<PasswordReset/>} />
        <Route exact path='/password/reset/confirm/:uid/:token' element={<PasswordConfirm/>} />

        {/*<Route path='*' component={Page404} />*/}
      </Routes>
    </Router>
  // <Provider store={store}>
  //     <Router>
  //       <Switch>
  //         <Route exact path='/' component={Home} />
  //
  //         {/*<Route path='*' component={Page404} />*/}
  //       </Switch>
  //     </Router>
  //   </Provider>
  )
}

export default App
