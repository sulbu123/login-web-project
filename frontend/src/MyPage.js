// src/MyPage.js
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from './api';
import { useNavigate } from 'react-router-dom';

function MyPage({ darkMode }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser()
      .then(data => {
        if (data.error) {
          navigate('/login');
        } else {
          setUser(data);
        }
      })
      .catch(() => navigate('/login'));
  }, [navigate]);

  return (
    <div className={darkMode ? 'bg-dark text-light min-vh-100 p-5' : 'bg-light text-dark min-vh-100 p-5'}>
      <div className="container">
        <h2 className="mb-4">마이페이지</h2>
        {user ? (
          <div className="card p-4 shadow-sm" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h5 className="mb-3">👤 프로필 정보</h5>
            <p><strong>유저명:</strong> {user.username}</p>
            <p><strong>이메일:</strong> {user.email || '정보 없음'}</p>
          </div>
        ) : (
          <p>사용자 정보를 불러오는 중...</p>
        )}
      </div>
    </div>
  );
}

export default MyPage;
