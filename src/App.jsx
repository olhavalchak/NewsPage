import React from 'react';
import {
  Routes, Route, Navigate
} from 'react-router-dom';
import { Login, MainView } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace />} />
      <Route path='/login' element={<Login />} />
      <Route path='/main' element={<MainView />} />
    </Routes>

  );
}

export default App;
