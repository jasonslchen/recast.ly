// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from '/src/data/exampleVideoData.js';

ReactDOM.render(<App entry={exampleVideoData}/>, document.getElementById('app'));