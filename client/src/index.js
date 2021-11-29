import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/';
import {Provider} from "react-redux"
import {store} from './store/filmReducer'

ReactDOM.render(
    <Provider store={store}>
     <App style={{height:"500px"}} />
    </Provider>,
  document.getElementById('root')
);
