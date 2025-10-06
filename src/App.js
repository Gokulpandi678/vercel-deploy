import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <button className='btn btn-success'>Test to vercel</button>
      <button className='btn btn-danger'>Test to vercel branch</button>
    </div>
  );
}

export default App;
