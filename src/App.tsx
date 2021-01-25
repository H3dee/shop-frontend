import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {routes} from './routes'
import './scss/index.scss'

const App: React.FC = () => {
  return (
     <Router>
        <div className="App">
            {routes}
        </div>
     </Router>
  )
}


export default App;
