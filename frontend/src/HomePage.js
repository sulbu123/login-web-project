// src/HomePage.js
import React from 'react';
import ChartExample from './ChartExample';

function HomePage({ darkMode }) {
  return (
    <div
      className={`d-flex justify-content-center align-items-center min-vh-100 ${
        darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
      }`}
      style={{ padding: '30px' }}
    >
      <div
        className={`card shadow ${
          darkMode ? 'bg-secondary text-light' : 'bg-white text-dark'
        }`}
        style={{ width: '100%', maxWidth: '800px', borderRadius: '16px' }}
      >
        <div className="card-body text-center">
          <h2 className="card-title mb-4" style={{ fontWeight: '700', fontSize: '2rem' }}>
            레벨 히스토리
          </h2>
          <p className="card-text mb-4" style={{ fontSize: '1.1rem' }}>
            아래는 최근 레벨 변화입니다.
          </p>

          <div style={{ height: '400px' }}>
            <ChartExample />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
