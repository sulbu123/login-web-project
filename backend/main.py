
# backend/main.py

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from models import User
from database import SessionLocal, engine
from schemas import UserCreate, UserResponse
from routes import router  # 라우터 임포트
import auth
from database import Base
import models  # 모델 import 꼭 필요

# FastAPI 앱 생성
app = FastAPI()

# ✅ CORS 설정 먼저 등록
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 프론트엔드 주소
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ DB 테이블 생성
Base.metadata.create_all(bind=engine)

# ✅ 라우터 등록 (CORS 뒤에!)
app.include_router(router)

# DB 세션 의존성
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 기본 테스트 라우터
@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI app!"}