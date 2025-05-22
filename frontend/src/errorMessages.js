const ERROR_MESSAGES = {
  'Email already registered': '이미 등록된 이메일입니다.',
  'Invalid credentials': '이메일 또는 비밀번호가 올바르지 않습니다.',
  'User not found': '사용자를 찾을 수 없습니다.',
  // 필요시 더 추가하세요
};

export function getErrorMessage(message) {
  return ERROR_MESSAGES[message] || message || '알 수 없는 오류가 발생했습니다.';
}