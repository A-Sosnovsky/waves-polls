import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './Reducers'
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history),thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
