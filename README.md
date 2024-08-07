![slice](https://capsule-render.vercel.app/api?type=slice&color=000&height=200&text=JavaScript&fontAlign=75&rotate=13&fontAlignY=25&desc=&descAlign=70.&descAlignY=44&fontColor=f9c427)

# JavaScript 팀 과제

### 메인 페이지
![image](https://github.com/user-attachments/assets/a8365982-959a-4ba6-b6d1-a85c732cff1e)
### 메뉴 페이지
![image](https://github.com/user-attachments/assets/f5ec15d6-da6f-4060-92e7-f51ff6eadf85)
### 상세 페이지 1-1
![image](https://github.com/user-attachments/assets/4e8a841e-47fe-4602-be37-56608fe86c39)
### 상세 페이지 1-2
![image](https://github.com/user-attachments/assets/28df7e01-9e42-4100-8ed1-6c791c6daa9e)




---

## 프로젝트 개요

- 개인 과제(내배캠 인기 영화 컬렉션)을 발전시키는 팀 프로젝트
- 팀원들의 프로젝트 중 1개를 대표로 선택 후 팀 프로젝트로 발전

### 필수 구현 사항

- TMDB 또는 영화진흥위원회 오픈 API 이용(택 1 또는 중복 사용)
- 영화정보 상세 페이지 구현
- 상세 페이지 영화 리뷰 작성 기능 구현
- github PR(=Pull Request) 사용한 협업
- UX를 고려한 validation check
  - 영화 검색 시
  - 댓글 작성 시
  - 추가 기능 구현 시
- 하기 기재된 Javascript 문법 요소를 이용하여 구현
  - const와 let만을 이용한 변수 선언
  - 형 변환
  - 연산자
  - 화살표 함수
  - 조건문
  - 반복문
  - 객체
  - 배열 메서드 사용
    - push, pop, shift, unshift, splice, slice 중 2개 이상 사용
    - forEach, map, filter, reduce, find 중 3개 이상 사용
- 자료구조(Map, Set, 리스트) 1개 이상 사용
- null과 undefined를 활용한 '없는 값' 처리
- callback 함수
- DOM 제어하기
- module(import, export)

### 선택 구현 사항

- CSS(flex, gird, 반응형 UI)
- 상세페이지 리뷰 수정 및 삭제 기능 구현
- 메인 페이지(조건에 맞는 카드 리스트 정렬 기능)
- 외부 API
- 원하는 어떤 기능이라도 ok!

---

## 프로젝트 소개

### 개발환경(기술)

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyr_YI8S4bax2nzVnRUnl51NO6aX1aYNvmK0RMCop_R4D_AG-yFiuBw6V3YNVlfOa0Opk&usqp=CAU" width="60" height="60"> <img src="https://camo.githubusercontent.com/9e30e8175154be99e32777c31d5854a0bab39e1caf6e3fa1ef6495d27366fc6f/68747470733a2f2f63646e2e69636f6e2d69636f6e732e636f6d2f69636f6e73322f323130372f504e472f3531322f66696c655f747970655f7673636f64655f69636f6e5f3133303038342e706e67" width="60" height="60">

### 팀원별 역할

- 장종호(팀장)
  - git repository 생성 후 배포
  - 검색창, Sorting, Filter
  - 상세페이지 레이아웃 및 구현
  - 헤더, 푸터
- 이윤지
  - 메뉴 페이지 구현 x 3
  - api 정리
- 한수빈
  - 댓글 기능 구현
  - 좋아요, 싫어요 구현
- 이창현
  - 메인페이지, 메뉴페이지 레이아웃
  - 메인페이지 구현(Carousel 등)

### 기능 구현 소개 및 소감

- 장종호
- 이윤지
  - 모달창 관련 - openModal 함수는 모달창의 'display' 속성을 block으로 설정해 모달창을 보이게 합니다.
    closeModal 함수는 'display' 속성을 none으로 설정해 모달창을 숨깁니다.
  - window.onclick 이벤트 핸들러를 사용해 모달 창 밖을 클릭하거나 ' x ' 버튼을 누르면
    모달창이 닫힙니다.
  - 첫 팀 프로젝트를 진행하며 git 협업에 대한 이해도를 많이 높일 수 있었던 값진 시간이었던 거 같습니다.
    처음 배워보는 JS로 검색 기능, 모달창 등을 구현해야 한다고 하니 정말 모든 게 쉽지 않았지만,
    물심양면으로 도와주신 팀원분들 튜터님들 덕에 팀 프로젝트를 잘 마무리할 수 있었던 거 같습니다. 감사합니다! 비전공자들 파이팅 :>
- 한수빈

  - 로컬스토리지를 통해 각 영화마다 좋아요&싫어요 리액션 버튼과 리뷰 작성 기능을 구현했습니다.
  - 좋아요&싫어요 리액션 버튼 - 사용자가 영화에 대해 긍정적 또는 부정적인 반응을 빠르고 직관적으로 표현할 수 있는 기능입
    니다. 이 버튼들은 사용자가 영화에 대한 개인적인 평가를 즉시 제공할 수 있도록 설계되었습니다.
  - 리뷰 작성 및 수정&삭제 기능 - 사용자는 영화에 대한 개인적인 의견을 남길 수 있는 리뷰 작성 기능을 이용할 수 있습니다. 이
    기능을 통해 리뷰를 작성하고, 필요에 따라 수정하거나 삭제할 수 있습니다. 리뷰의 수정 및 삭제
    는 보안을 위해 비밀번호 입력을 요구합니다.
  - 로컬스토리지에 대해 학습할 수 있어서 매우 유익한 시간이었고, 에러로 인한 여러 가지 문제를
    겪고 해결해 나가는 과정에서 많이 성장한 것 같습니다.

- 이창현

---
