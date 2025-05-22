// src/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from './api';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Dashboard({ darkMode }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getCurrentUser()
      .then(data => {
        if (data.error) {
          alert(data.error);
          navigate('/login');
        } else {
          setUser(data);
        }
      })
      .catch(() => {
        alert('로그인이 필요합니다.');
        navigate('/login');
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const currentPath = location.pathname;

  return (
    <div className={`min-vh-100 p-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      {/* 인사말 + 로그아웃 */}
      <header className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-2">
        <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>
          <strong>{user?.username}</strong>님 반갑습니다!
          <button
            onClick={handleLogout}
            className={`btn btn-sm ms-3 ${darkMode ? 'btn-outline-light' : 'btn-outline-danger'}`}
            style={{ verticalAlign: 'middle' }}
          >
            로그아웃
          </button>
        </div>
      </header>

      {/* 중앙 정렬된 메뉴 */}
      <div className="d-flex flex-column align-items-center justify-content-center text-center">
        <nav className="d-flex gap-4 flex-wrap justify-content-center mb-4">
          {[
            { path: '/dashboard/home', label: '레벨 히스토리' },
            { path: '/dashboard/mypage', label: '마이페이지' },
            { path: '/dashboard/about', label: '소개' },
          ].map(({ path, label }) => {
            const isActive = currentPath === path;
            return (
              <Link
                key={path}
                to={path}
                className={`fw-semibold text-decoration-none ${
                  isActive
                    ? darkMode
                      ? 'bg-primary text-white'
                      : 'bg-primary text-white'
                    : darkMode
                    ? 'text-light border border-light'
                    : 'text-primary border border-primary'
                }`}
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1.2rem',
                  borderRadius: '1rem',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  userSelect: 'none',
                  minWidth: '140px',
                  textAlign: 'center',
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* 안내 문구 */}
        <p className="mt-2" style={{ fontSize: '1.1rem' }}>
          원하는 메뉴를 선택해주세요.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
