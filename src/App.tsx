import './App.css';
import { lazyWithRetryAndLoader } from './utils/lazyWithRetry';

const Carrousell = lazyWithRetryAndLoader(() => import("./modules/Carroussel/Carrousell"));

function App() {
  return (
    <div className='App-header'><Carrousell /></div>
  );
}

export default App;
