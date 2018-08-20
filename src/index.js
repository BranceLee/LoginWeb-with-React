import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import RootReducer from './RootReducer';
import { userLoggedIn } from './actions/auth';
import decode from 'jwt-decode';
import setAuthorizenHeader from './utils/setAuthorizenHeader';
import './Pages.css';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

//登录成功后，记录Token于localStorage里 ,防止刷新后丢失登录成功记录
if (localStorage.bookworm) {
	const payload = decode(localStorage.bookworm); //token加密的内容为emai,confirmed
	const user = {
		token: localStorage.bookworm,
		email: payload.email,
		confirmed: payload.confirmed
	};
	setAuthorizenHeader(localStorage.bookworm); //传输秘钥
	store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			{/*<Route component={App} /> 官方文档中关于updata blockers因 connect 与 route 会冲突解决, 
		为此，在每个Route 中加入一个 location，解决跳转问题  */}
			<Route component={App} />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
