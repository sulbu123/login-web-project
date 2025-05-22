// src/AboutPage.js
import React from 'react';

function AboutPage({ darkMode }) {
  return (
    <div className={`d-flex justify-content-center align-items-center min-vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="card-body text-center">
          <h2 className="card-title mb-3">사이트 소개</h2>
          <p className="card-text">이 사이트는 React와 FastAPI로 만들어진 간단한 로그인 시스템입니다. 그리고 유저의 레벨 히스토리를 확인할 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
