import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import Layout from './components/Layout'
import BooksContainer from './containers/BooksContainer'
import NewBookFormContainer from './containers/NewBookFormContainer'
import HomeContainer from './containers/HomeContainer'
import DragContainer from './containers/DragContainer'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={HomeContainer}/>
      <Route path='/books' component={BooksContainer}/>
      <Route path='/books/new' component={NewBookFormContainer}/>
      <Route path='/shelves' component={DragContainer}/>
    </Router>
  );
}

export default App;
