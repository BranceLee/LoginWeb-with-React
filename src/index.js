import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import RootReducer from './RootReducer';
import { userLoggedIn } from './actions/auth';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

//登录成功后，保持state 始终存在token ,防止刷新后丢失登录成功记录
if (localStorage.bookworm) {
	const userToken = { token: localStorage.bookworm };
	store.dispatch(userLoggedIn(userToken));
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
