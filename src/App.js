import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import GreetingPage from './Pages/GreetingPage';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<GreetingPage />} />
    </Routes>
  </Router>
);

export default App;
