// src/ProtectedLayout.js
import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { getCurrentUser } from './api';

function ProtectedLayout({ darkMode, toggleDarkMode }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    getCurrentUser()
      .then(data => {
        if (data.error) {
          navigate('/login');
        } else {
          setUser(data);
        }
      })
      .catch(() => {
        navigate('/login');
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className={darkMode ? 'min-vh-100 bg-dark text-light p-3' : 'min-vh-100 bg-light text-dark p-3'}>
      <header className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h5 className="mb-0">
            안녕하세요, <strong>{user?.username}</strong>님 반갑습니다!
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-outline-danger ms-3"
              style={{ verticalAlign: 'middle' }}
            >
              로그아웃
            </button>
          </h5>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              style={{ marginRight: '5px' }}
            />
            다크모드
          </label>
        </div>
      </header>

      <nav className="mb-4">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">홈</Link>
          </li>
          <li className="nav-item">
            <Link to="/mypage" className="nav-link">마이페이지</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">소개</Link>
          </li>
        </ul>
      </nav>

      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default ProtectedLayout;
