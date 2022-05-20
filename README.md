# 레이서 포트폴리오 서비스

이 프로젝트는 자기자신의 포트폴리오를 작성하고, 또한 다른 사람의 포트폴리오를 확인할 수 있는 웹 서비스입니다. 

## 서비스의 주요 기능
#### 1. 포트폴리오 관리 서비스
- My Page에서 자신의 학력, 수상이력, 프로젝트, 자격증에 대한 내역을 추가, 편집, 삭제하며 이력을 관리할 수 있습니다.
#### 2. 포트폴리오 공유 및 네트워크 서비스
- Network page를 통해 다른 사람들의 포트폴리오를 살펴볼 수 있습니다.
- 다른 사람의 포트폴리오 페이지를 방문해 방명록을 남기며 소통할 수 있습니다.
#### 3. 이력 검색 서비스
- Search page를 통해 다른 사람들의 학력, 수상이력, 프로젝트, 자격증에 대한 이력을 검색하여 조회할 수 있습니다.

## 일일 스크럼 기록

[노션 링크](https://wakeful-kilometer-ba6.notion.site/56c533f5e7d743559c39d1a375b95c19?v=d2d10ba81aec4b40b7e68e6ff589918a)

## 백엔드 API
[노션 링크](https://wakeful-kilometer-ba6.notion.site/API-871308150f6a409eae0685654e433aca)


## 주요 사용 기술

1. 프론트엔드

- React (create-react-app으로 구현되었습니다.)
- React Bootstrap
- axios

2. 백엔드

- Express (nodemon, babel-node로 실행됩니다.)
- Mongodb, Mongoose

## 설치 방법

1. 프론트 엔드 서버 실행

```bash
cd front
yarn
yarn start
```

2. 백엔드 서버 실행

```bash
back 폴더 내부 README 참고
```

## 서비스 소개
### 1. 로그인 화면
##### 1-1. 로그인 화면
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/e31cd03e0d13a27376f1e1e7811f885e/image.png" width="80%"><br>
- [로그인]: 로그인을 할 수 있다.
- [회원가입]: 회원가입을 통해 로그인을 할 수 있다.
- [다크모드]: 왼쪽 아래의 해 모양의 아이콘을 통해 다크모드로 이용할 수 있다.

##### 1-2. 회원가입 화면
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/2f71a63dc63b17e7246a897812298c29/image.png" width="80%"><br>
- [회원가입]: 이메일 주소, 비밀번호, 이름 입력을 통해 회원가입을 할 수 있다.
- [로그인 하기]: 로그인 화면으로 되돌아 간다.

### 2. 포트폴리오 화면
##### 2-1. 포트폴리오 화면
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/dd6b0353659679784c2a386af1336fed/image.png" width="80%"><br>

##### 2-2. 다른 유저의 포트폴리오 화면
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/96d1da9cad399619b4c87fa767ad911f/image.png" width="80%"><br>

##### 2-3. 프로필 화면
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/1e9dd10baf54627fb3ddf74e5e29bd25/image.png" width="20%">
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/25966d8bf38fc70ed86c9fcd548a031a/image.png" width="20%"><br>
- [편집]: 편집 버튼을 통해 이름, 이메일, 설명, 사진을 수정할 수 있다.

##### 2-4. 방명록 화면
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/de44373d1f2fd20911e2bcf433c72320/image.png" width="20%"><br>
- [등록]: 방명록 입력 후 등록 버튼을 통해 방명록을 남길 수 있다.
- [수정]: 연필 모양의 아이콘을 통해 수정을 할 수 있다.
- [삭제]: 휴지통 모양의 아이콘을 통해 삭제를 할 수 있다.

##### 2-5. 게시물 화면
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/cb7e94f9b3d0f9642dc0d1d9ac28fee4/image.png" width="80%"><br>
- [추가]: + 버튼을 통해 게시물을 추가할 수 있다.
- [편집]: 편집 버튼을 통해 게시물을 수정 할 수 있다.
- [삭제]: 삭제 버튼을 통해 게시물을 삭제 할 수 있다.

### 3. 검색 화면
##### 3-1. 검색 전체 화면
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/bbc24175b8e03889d85eb6d1764bf977/image.png" width="80%"><br>
- [검색]: 검색창을 통해 항목(학력, 수상이력, 프로젝트, 자격증) 별로 검색할 수 있다.
- [해당 포트폴리오로 이동]: 게시물의 오른쪽 화살표 버튼을 통해 해당 게시물이 속한 포트폴리오 페이지로 이동할 수 있다.

##### 3-2. 검색창
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/b4932978406b2a3cf33d7f519144a430/image.png" width="80%"><br>
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/c1010583bd994acd1ce7a8f5b22bf075/image.png" width="80%"><br>
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/b4932978406b2a3cf33d7f519144a430/image.png" width="80%"><br>
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/54ac5b4b0355ed6c1fa266ac93deb45d/image.png" width="80%"><br>
- [검색 항목 선택]: 셀렉트박스를 통해 검색하고자 하는 항목 중 하나(학력, 수상이력, 프로젝트, 자격증)를 선택할 수 있다.
- [검색 버튼]: 입력 내용이 하나라도 있어야 검색 버튼이 활성화 된다.

### 4. 네트워크 화면
##### 4-1. 네트워크 전체 화면
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/cdb2aaa89afaeca281b6973eedc51430/image.png" width="80%"><br>
- 서비스를 이용하는 유저들 목록을 볼 수 있다.
- [유저 포트폴리오로 이동]: 유저 카드의 '포트폴리오' 링크를 클릭하면 해당 유저의 포트폴리오 페이지로 이동할 수 있다.
- [목록의 유저수 선택]: 화면 아래에 위치한 셀렉트박스를 통해 네트워크 페이지에 보여지는 유저수(4, 8, 16, 32)를 선택할 수 있다.

##### 4-2. 검색창
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/20f2a55b6fe5fc0e578c1ba879f535f5/image.png" width="80%"><br>
- [검색 항목 선택]: 셀렉트박스를 통해 검색하고자 하는 항목 중 하나(이름, 이메일)를 선택할 수 있다.
- [검색 버튼]: 입력 내용이 한 글자라도 있어야 검색 버튼이 활성화 된다.
- [전체 버튼]: 전체 유저 목록을 보여준다.

### 5. 다크모드
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/b4d1e97d9e97810d594d786a67bd2455/image.png" width="45%">
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/9c7606f65b910da61c8c1798dfb93611/image.png" width="45%"><br>
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/a10ce1098e8bb2f629d338034b8e69d8/image.png" width="45%">
<img src="https://kdt-gitlab.elice.io/ai_track/class_04/web_project/team1/portfolio_share_service/uploads/0601d8ec56f9e6c5f22e5f5880ca601c/image.png" width="45%"><br>

## 🙏 개발자들
|이름|포지션|
|------|---|
|이동준|팀장, 백엔드|
|김영곤|백엔드|
|박보근|프론트엔드|
|이영민|프론트엔드|
|선민경|프론트엔드|

---

본 프로젝트에서 제공하는 모든 코드 등의는 저작권법에 의해 보호받는 ㈜엘리스의 자산이며, 무단 사용 및 도용, 복제 및 배포를 금합니다.
Copyright 2022 엘리스 Inc. All rights reserved.
