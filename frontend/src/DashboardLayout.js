// src/DashboardLayout.js
import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { getCurrentUser } from './api';

function DashboardLayout({ darkMode }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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

  return (
    <div className={darkMode ? 'min-vh-100 bg-dark text-light p-3' : 'min-vh-100 bg-light text-dark p-3'}>
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h4>
          안녕하세요, <strong>{user?.username}</strong>님 반갑습니다!
          <button
            onClick={handleLogout}
            className="btn btn-sm btn-outline-danger ms-3"
            style={{ verticalAlign: 'middle' }}
          >
            로그아웃
          </button>
        </h4>
      </header>

      <nav className="mb-4">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">홈</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/mypage" className="nav-link">마이페이지</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/about" className="nav-link">소개</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
