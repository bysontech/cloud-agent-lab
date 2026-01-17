import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { JoinPage } from './pages/JoinPage';
import { HostPage } from './pages/HostPage';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/lottery">
      <div className="app">
        <Routes>
          <Route path="/join/:roomId" element={<JoinPage />} />
          <Route path="/host/:roomId" element={<HostPage />} />
          <Route path="/" element={<Navigate to="/join/demo" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
