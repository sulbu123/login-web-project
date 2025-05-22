// src/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from './api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginUser(email, password);
    if (result.access_token) {
      localStorage.setItem('token', result.access_token);
      setSuccessMsg('✅ 로그인에 성공했습니다!');
      setErrorMsg('');
      // 1초 후 대시보드로 이동
      setTimeout(() => navigate('/dashboard'), 1000);
    } else {
      setErrorMsg(result.error || '로그인 실패');
      setSuccessMsg('');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">로그인</h2>

        {/* 성공 메시지 */}
        {successMsg && (
          <div className="alert alert-success" role="alert">
            {successMsg}
          </div>
        )}

        {/* 에러 메시지 */}
        {errorMsg && (
          <div className="alert alert-danger" role="alert">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">이메일</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="이메일 입력"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">비밀번호</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="비밀번호 입력"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            로그인
          </button>
        </form>
        <p className="mt-3 text-center">
          계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
