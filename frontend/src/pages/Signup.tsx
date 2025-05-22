// src/pages/Signup.tsx
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8000/signup", form);
      alert("회원가입 성공!");
    } catch (err) {
      alert("회원가입 실패");
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <input name="username" onChange={handleChange} placeholder="이름" />
      <input name="email" onChange={handleChange} placeholder="이메일" />
      <input name="password" type="password" onChange={handleChange} placeholder="비밀번호" />
      <button onClick={handleSubmit}>가입하기</button>
    </div>
  );
}