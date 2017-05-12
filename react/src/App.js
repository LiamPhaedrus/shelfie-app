import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import Layout from './components/Layout'
import BooksContainer from './containers/BooksContainer'
import NewBookFormContainer from './containers/NewBookFormContainer'
import NewCase from './containers/NewCase'
import DashHomePage from './containers/DashHomePage'
import DragContainer from './containers/DragContainer'
import ShowCases from './containers/ShowCases'
import BookShowContainer from './containers/BookShowContainer'
import CaseContainer from './containers/CaseContainer'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={DashHomePage} />
        <Route path='/books' component={BooksContainer} />
        <Route path='/books/new' component={NewBookFormContainer} />
        <Route path='/shelves' component={DragContainer} />
        <Route path='/cases/new' component={NewCase} />
        <Route path='/cases' component={ShowCases} />
        <Route path='/books/:id' component={BookShowContainer} />
        <Route path='/cases/:id' component={CaseContainer} />
      </Route>
    </Router>
  );
}

export default App;
