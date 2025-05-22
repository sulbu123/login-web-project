// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import HomePage from './HomePage';
import MyPage from './MyPage';
import AboutPage from './AboutPage';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  // 보호된 라우트 컴포넌트
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className={darkMode ? 'app-wrapper dark-mode' : 'app-wrapper'}>
        {/* 다크모드 토글 */}
        <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 9999 }}>
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />{' '}
            다크모드
          </label>
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* 보호된 라우트들 */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard darkMode={darkMode} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/home"
            element={
              <ProtectedRoute>
                <HomePage darkMode={darkMode} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/mypage"
            element={
              <ProtectedRoute>
                <MyPage darkMode={darkMode} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/about"
            element={
              <ProtectedRoute>
                <AboutPage darkMode={darkMode} />
              </ProtectedRoute>
            }
          />

          {/* 기본 경로 */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
