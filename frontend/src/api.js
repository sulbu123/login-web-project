import { getErrorMessage } from './errorMessages';

const API_URL = 'http://localhost:8000';

// 로그인 요청
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      return { error: getErrorMessage(error.detail || '로그인 실패') };
    }

    return response.json();
  } catch (error) {
    console.error('로그인 요청 실패:', error.message);
    return { error: '네트워크 오류 또는 서버 문제' };
  }
};

// 회원가입 요청
export const signupUser = async (email, username, password) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: getErrorMessage(data.detail || '회원가입 실패') };
    }

    return data;
  } catch (error) {
    console.error('회원가입 요청 실패:', error);
    return { error: '네트워크 오류 또는 서버 문제' };
  }
};

// 보호된 데이터 요청 (예시)
export const getProtectedData = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/protected`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error('보호된 데이터 요청 실패');
    }

    return response.json();
  } catch (error) {
    console.error('보호된 데이터 요청 실패:', error.message);
    return { error: error.message };
  }
};

// ✅ 현재 로그인된 사용자 정보 가져오기
export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      const error = await response.json();
      return { error: getErrorMessage(error.detail || '사용자 정보 불러오기 실패') };
    }

    return response.json();
  } catch (error) {
    console.error('사용자 정보 요청 실패:', error.message);
    return { error: '네트워크 오류 또는 서버 문제' };
  }
};
