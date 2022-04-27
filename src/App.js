import React from 'react';
import { Provider } from 'react-redux'
import ReuduxChild from './ReuduxChild';
import ReduxChild2 from './ReduxChild2';
import store from './redux/store';
import ReduxChild3 from './ReduxChild3';

function App() {
  return (
    <Provider store={store}>
      <div>App</div>
      <ReuduxChild />
      <ReduxChild2 />
      <ReduxChild3 />
    </Provider>
  )
}

export default App