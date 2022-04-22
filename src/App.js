import React from 'react';
import { createStore } from 'redux'
import reducer from './redux/reducer';
import { Provider } from 'react-redux'
import ReuduxChild from './ReuduxChild';

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <div>App</div>
      <ReuduxChild />
    </Provider>
  )
}

export default App