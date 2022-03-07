import './App.css';
import CurRow from './CurRow';
const API_URL = 'https://freecurrencyapi.net/api/v2/latest'

function App() {
  return (
    <>
    <div className='cc-body'>
      <h1>Currency Converter</h1>
      <CurRow />
      <div className='equal-sign'>=</div>
      <CurRow />
    </div>
    </>
  );
}

export default App;
