import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { getCountries,  getCountry} from './actions/actions-countries';
import DevTools from './DevTools';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

store.dispatch(getCountries());
store.dispatch(getCountry('first comment'));


render(
    <Provider store={store}>
    	<div>
	        <Router history={hashHistory} routes={routes} />
	        <DevTools />
    	</div>
    </Provider>,
    document.getElementById('root')
);
