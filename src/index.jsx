import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './reducers';
import Root from './containers/Root';

// render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));
render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root'),
);

