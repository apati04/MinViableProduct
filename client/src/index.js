import 'bootstrap';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
