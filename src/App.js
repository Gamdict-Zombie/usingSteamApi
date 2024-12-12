import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/page_layout/Header';
import { Unitslide } from './components/Unit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path='/' element={<Unitslide />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
