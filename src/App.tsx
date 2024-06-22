import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/layout/navbar/Navbar'
import ProductPage from './pages/ProductPage'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Switch>
            <Route exact path="/products" component={ProductPage} />
          </Switch>
        </Router>
      </main>
    </Router>
  );
}

export default App
