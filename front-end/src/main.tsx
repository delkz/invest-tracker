import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => <>
  <h1 className='text-3xl font-bold underline'>Hello, World!!</h1>
</>;''

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);