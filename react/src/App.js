import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import Layout from './components/Layout'
import BooksContainer from './containers/BooksContainer'
import NewBookFormContainer from './containers/NewBookFormContainer'
import HomeContainer from './containers/HomeContainer'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={HomeContainer}/>
        <Route path='/books' component={BooksContainer}/>
        <Route path='/books/new' component={NewBookFormContainer}/>
      </Route>
    </Router>
  );
}

export default App;
