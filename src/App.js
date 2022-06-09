import React from 'react';
import Stock from './Components/stocks/stockAPI';
import Bart from './Components/bartAPI/bartAPI';
import Main from './Components/main';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' exact element={<Main />} />
            <Route path='/stockAPI' exact element={<Stock/>} />
            <Route path='/bartAPI' exact element={<Bart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
