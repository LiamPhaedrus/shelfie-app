import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import Layout from './components/Layout'
import BooksContainer from './containers/BooksContainer'
import NewBookFormContainer from './containers/NewBookFormContainer'
import NewCase from './containers/NewCase'
import DashHomePage from './containers/DashHomePage'
import DragContainer from './containers/DragContainer'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={DashHomePage}/>
      <Route path='/books' component={BooksContainer}/>
      <Route path='/books/new' component={NewBookFormContainer}/>
      <Route path='/shelves' component={DragContainer}/>
      <Route path='/cases/new' component={NewCase}/>
    </Router>
  );
}

export default App;
