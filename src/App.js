import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './redux/reducer';
import ReduxCount from './ReduxCount';

const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <div>
        <ReduxCount />
      </div>
    </Provider>
  )
}

export default App