import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './components/reducers/reducers' //rootReducer ??

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
