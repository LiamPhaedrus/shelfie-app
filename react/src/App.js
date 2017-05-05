import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import Layout from './components/Layout'
import BooksContainer from './containers/BooksContainer'
import NewBookFormContainer from './containers/NewBookFormContainer'
import NewCase from './containers/NewCase'
import DashHomePage from './containers/DashHomePage'
import DragContainer from './containers/DragContainer'
import ShowCases from './containers/ShowCases'
import SearchContainer from './containers/SearchContainer'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={DashHomePage}/>
      <Route path='/books' component={BooksContainer}/>
      <Route path='/books/new' component={NewBookFormContainer}/>
      <Route path='/shelves' component={DragContainer}/>
      <Route path='/cases/new' component={NewCase}/>
      <Route path='/cases' component={ShowCases}/>
      <Route path='/books/search' component={SearchContainer}/>
    </Router>
  );
}

export default App;
