# backend/schemas.py

from pydantic import BaseModel, EmailStr

# ✅ 회원가입용 스키마
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

    model_config = {
        "from_attributes": True
    }

# ✅ 로그인 요청용 스키마
class UserLogin(BaseModel):
    email: EmailStr
    password: str

# ✅ 유저 응답용 스키마
class UserResponse(BaseModel):
    id: int
    username: str
    email: EmailStr

    model_config = {
        "from_attributes": True
    }