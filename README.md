# :: 가장 완벽한 To-do List

## 기술스택

 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)                    ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)                        

## 실행 화면

### Auth



### Todo List



## 개발환경 설정 & 실행


1. Git 설치
2. Node LTS 설치
3. Server Project 설치 및 실행
   * `git clone https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api`
   * 프로젝트 디렉토리에서 다음 명령어로 node_modules 설치 : `npm install`
   * 프로젝트에서 `npm start` 명령어 입력
4. Client Project 설치
   * `git clone https://github.com/omizha/wanted-pre-onboarding-challenge-fe-1`
   * 프로젝트 디렉토리에서 다음 명령어로 node_modules 설치 : `npm install`
5. Client Project 시작
   * 프로젝트에서 `npm start` 명령어 입력
   * 브라우저에서 <http://localhost:3000> 링크를 클릭하여 시작

## 클라이언트 구현 과제 안내

### Assignment 1 - Login / SignUp

* /auth 경로에 로그인 / 회원가입 기능을 개발합니다
* 이메일과 비밀번호의 유효성을 확인합니다
  - [ ] 이메일 조건 : 최소 `@`, `.` 포함
  - [ ] 비밀번호 조건 : 8자 이상 입력
  - [ ] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
* 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [ ] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [ ] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Assignment 2 - Todo List

* Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [ ] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
* 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [ ] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [ ] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
* 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [ ] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

### 참고 사항


1. 로컬 서버를 실행했을 때 생성되는 `db/db.json`이 DB 역할을 하게 됩니다. 해당 파일을 삭제하면 DB는 초기화 됩니다.
2. 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않습니다. (모든 유저가 하나의 Todo를 가짐)
3. 로그아웃은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현해주세요.

### API

참고 : https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api

## 폴더 구조


## README 작성 및 코드 정리

- [ ] 최종 구현 화면 이미지 / 동영상으로 제공

  화면을 어떤 구조로 구성했는지에 대한 설명

  라우트나 기능별로 구분하여 제공
- [ ] 설치, 환경설정 및 실행 방법

  프로젝트 실행 시 필요한 환경 세팅 확인 (script, port, env, …)
- [ ] 구현 요구 사항 목록

  체크 리스트 형태로 추가
- [ ] 사용한 프레임워크 및 라이브러리 설명

  package.json 참조하여 선택한 이유 작성
- [ ] 폴더 구조 설명

  폴더를 구분한 기준에 대하여 설명

  tree 명령어를 사용하면 간편하게 디렉토리 구조를 출력할 수 있음
- [ ] 과제 진행 시 주안점 작성

  고민한 부분에 대하여 서술
- [ ] 한계점 및 개선 사항 작성

  고려는 하였으나 실제 구현하지 못한 부분에 대하여 서술
- [ ] console.log, 불필요한 주석 제거
- [ ] 구현 요구 사항에 맞게 실제 동작하는지 전수 테스트
- [ ] 설명이 필요한 코드에는 JSDoc 어노테이션을 사용해서 설명 추가


