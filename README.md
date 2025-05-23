✅ 프로젝트 개요

목표: 회원가입/로그인 기능을 포함한 사용자 인증 기반 대시보드 웹 애플리케이션 개발

기술 스택:
Frontend: React, Bootstrap, Chart.js 등

Backend: FastAPI, Pydantic, JWT, SQLAlchemy

Database: MySQL 

-------------------------------------------------------------

🔧 개발 단계 요약

1. 환경 구축 및 초기 설정

React로 프론트엔드 앱 생성 (npx create-react-app)

FastAPI로 백엔드 서버 구성 (uvicorn, fastapi, pydantic 설치)

MySQL + SQLAlchemy를 이용해 DB 구성

CORS 설정을 통해 React ↔ FastAPI 통신 설정

-------------------------------------------------------------

2. 백엔드: 인증 및 사용자 API
   
🗂 주요 파일

main.py: FastAPI 앱 실행, 라우터 등록

routes.py: /signup, /login, /me API 라우팅

auth.py: JWT 토큰 생성, 해시/검증

schemas.py: UserCreate, UserLogin 등의 Pydantic 스키마

models.py: SQLAlchemy ORM 모델 (User 테이블)

database.py: DB 연결 및 테이블 생성


🔐 기능 요약

비밀번호 해시화 (passlib)

JWT 토큰 생성 및 유효성 검사 (pyjwt)

현재 로그인된 사용자 정보 반환 (/me)

로그인 실패 시 오류 메시지 전달

--------------------------------------------------------------

3. 프론트엔드: 사용자 인터페이스

   
🗂 주요 파일

App.js: 라우팅 및 다크모드 설정

LoginPage.js, SignupPage.js: 인증 관련 폼 UI

Dashboard.js: 로그인 후 사용자 정보와 네비게이션

HomePage.js, MyPage.js, AboutPage.js: 대시보드 내 콘텐츠

ChartExample.js: Chart.js 기반 선 그래프 시각화



🎨 구현 UI 요소

로그인 및 회원가입 페이지에 세련된 카드 UI

로그인 성공 시 사용자 이름과 로그아웃 버튼 표시

메뉴(홈, 마이페이지, 소개)는 중앙 정렬 + 확대된 버튼

다크 모드 지원: darkMode props로 스타일 전환

선 그래프 페이지 (홈): x축만 표시 + 레벨 텍스트 점 위에 표시

로그인한 사용자에 대한 프로필카드 구현



⚙️ 주요 구현 포인트

로그인 상태 유지
JWT 토큰을 localStorage에 저장 후 /me API로 인증 상태 확인

React Router 연동
로그인 후 /dashboard/* 내부에서 라우팅 제어

스타일링
Bootstrap + 커스텀 CSS로 폼 및 버튼 스타일 지정

Chart.js 시각화
유저의 레벨 변화 데이터 시각화 (선 그래프)

다크 모드
전체 페이지에 테마 반영 (배경, 텍스트, 카드 등)


----------------------------------------------


개선점 : 

 현재의 그래프는 단순하게 내가 직접 정보를 넣어 만들었지만, 추후에는 api를 불러와서 자동으로 그래프를 완성하게 하기

UI 더 깔끔하고, 세련되게 만들기

다양한 컨텐츠들 추가

백엔드, 프론트엔드 돌아가는 구조 파악하기

웹개발에 사용된 기술 스택들의 특성 및 구조 파악하기
