import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BodyTextStore } from './stores/BodyTextStore';
import { CommentBoxStore } from './stores/CommentBoxStore';
import { Provider } from 'mobx-react';

const commentBoxStore = new CommentBoxStore;

ReactDOM.render(<Provider commentBoxStore ><App bodyTextStore={ new BodyTextStore() }/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();