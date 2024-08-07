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

### 배포 링크

https://movie-team-project.vercel.app/

### 개발환경(기술)

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyr_YI8S4bax2nzVnRUnl51NO6aX1aYNvmK0RMCop_R4D_AG-yFiuBw6V3YNVlfOa0Opk&usqp=CAU" width="60" height="60"> <img src="https://camo.githubusercontent.com/9e30e8175154be99e32777c31d5854a0bab39e1caf6e3fa1ef6495d27366fc6f/68747470733a2f2f63646e2e69636f6e2d69636f6e732e636f6d2f69636f6e73322f323130372f504e472f3531322f66696c655f747970655f7673636f64655f69636f6e5f3133303038342e706e67" width="60" height="60">

### 팀원별 역할

- 장종호(팀장)
  - Git repository 생성, 배포
  - Figma 와이어 프레임 제작
  - 헤더, 푸터 제작
  - 영화 상세 페이지 제작
  - 메뉴 페이지에서 장르 별 필터링 기능 구현
- 이윤지
  - 메뉴 페이지 구현 x 3
  - api 정리
  - 검색 시 모달창 구현
- 한수빈
  - 댓글 기능 구현
  - 좋아요, 싫어요 구현
- 이창현
  - 메인페이지, 메뉴페이지 레이아웃
  - 메인페이지 구현(Carousel 등)
  - 리드미(README) 작성

### 기능 구현 소개 및 소감

- 장종호

  - 상세페이지
    - 영화카드를 클릭 하는 경우 보여지는 영화 상세 정보를 보여주는 페이지입니다.
    - 쿼리스트링
      - 상세 페이지는 영화 카드를 선택할 때 영화의 id 값을 URL의 쿼리스트링으로 받아오는 방식으로 구현했습니다. 이를 통해 상세 페이지에서는 해당 id를 사용하여 API에서 영화 정보를 쉽게 가져올 수 있었습니다.
    - 영화 정보 API 통합
      - 영화 정보 api, 영화 장르 api, 영화 크리딧 api 등을 이용해서 상세 페이지를 작성했습니다. 기본적인 영화 정보 API에는 영화 장르의 이름(ID 값만 제공), 감독 이름, 배우 이름 등이 포함되어 있지 않기 때문에 각각의 다른 API를 호출하여 필요한 정보를 결합했습니다.
    - 비슷한 장르의 영화 추천 기능
      - 상세 페이지에서는 사용자가 보고 있는 영화와 비슷한 장르의 영화를 추천하는 기능이 있습니다. 영화 장르는 객체로 제공되기 때문에 배열 메서드를 활용하기 위해 먼저 변환 작업을 수행했습니다. 그 후, map, filter, slice 등의 배열 메서드를 활용하여 장르를 필터링하고 비슷한 영화를 추천했습니다.
  - 메뉴 페이지의 장르별 영화 필터링 기능
    - 메뉴 페이지에서는 사용자가 선택한 장르에 따라 영화를 필터링하는 기능을 구현했습니다.
    - active, setAttribute
      - 각 장르 버튼에는 클릭 이벤트를 추가하여 active 클래스를 토글하며, setAttribute 메서드를 사용해 렌더링된 모든 영화 카드에 장르 값을 저장했습니다.
    - 클릭 이벤트와 영화 카드 필터링
      - 각 버튼의 클릭 이벤트는 active 클래스를 토글하며, 이 클래스를 가진 버튼들의 텍스트 콘텐츠(장르 이름)를 배열로 수집합니다. 그런 다음, 수집된 장르를 기준으로 영화 카드를 필터링합니다.
    - 다중 장르 필터링
      - 다중 장르가 선택된 경우, 모든 선택된 장르를 포함하는 영화만 표시하도록 Array.every 메서드와 includes 메서드를 사용했습니다. 이 방식은 선택된 모든 장르를 포함하는 영화만 화면에 표시할 수 있도록 합니다.
  - 이번 프로젝트를 통해 여러 API를 조합하여 데이터를 통합하고, 사용자 인터페이스에서의 복잡한 필터링 로직을 구현하는 경험을 할 수 있었습니다. 특히, 배열 메서드를 활용하여 데이터를 조작하고, 여러 조건을 만족하는 데이터를 효율적으로 필터링하는 기술을 익혔습니다. 아직은 많이 부족하고 혼자서는 해결할 수 없는 부분들이 많았지만 이러한 경험은 향후 더욱 복잡한 데이터 처리와 사용자 맞춤형 기능 구현에 큰 도움이 될 것이라 생각합니다.

- 이윤지
  - 모달창 관련
    - openModal 함수는 모달창의 'display' 속성을 block으로 설정해 모달창을 보이게 합니다.
      closeModal 함수는 'display' 속성을 none으로 설정해 모달창을 숨깁니다.
  - window.onclick 이벤트 핸들러를 사용해 모달 창 밖을 클릭하거나 ' x ' 버튼을 누르면
    모달창이 닫힙니다.
  - 첫 팀 프로젝트를 진행하며 git 협업에 대한 이해도를 많이 높일 수 있었던 값진 시간이었던 거 같습니다.
    처음 배워보는 JS로 검색 기능, 모달창 등을 구현해야 한다고 하니 정말 모든 게 쉽지 않았지만, 물심양면으로 도와주신 팀원분들 튜터님들 덕에 팀 프로젝트를 잘 마무리할 수 있었던 거 같습니다. 감사합니다! 비전공자들 파이팅 :>
- 한수빈

  - 로컬스토리지를 통해 각 영화마다 좋아요&싫어요 리액션 버튼과 리뷰 작성 기능을 구현했습니다.
  - 좋아요&싫어요 리액션 버튼
    - 사용자가 영화에 대해 긍정적 또는 부정적인 반응을 빠르고 직관적으로 표현할 수 있는 기능입니다. 이 버튼들은 사용자가 영화에 대한 개인적인 평가를 즉시 제공할 수 있도록 설계되었습니다.
  - 리뷰 작성 및 수정&삭제 기능
    - 사용자는 영화에 대한 개인적인 의견을 남길 수 있는 리뷰 작성 기능을 이용할 수 있습니다. 이 기능을 통해 리뷰를 작성하고, 필요에 따라 수정하거나 삭제할 수 있습니다. 리뷰의 수정 및 삭제는 보안을 위해 비밀번호 입력을 요구합니다.
  - 로컬스토리지에 대해 학습할 수 있어서 매우 유익한 시간이었고, 에러로 인한 여러 가지 문제를 겪고 해결해 나가는 과정에서 많이 성장한 것 같습니다.

- 이창현
  - 최상단의 캐러셀은 가로로 긴 영화 포스터 api를 불러와서 구현했습니다. 마우스가 올라가면 멈추고 수동으로 한 장씩 넘길 수 있습니다. 캐러셀 기능의 핵심 원리는 원본 요소 앞, 뒤로 복제본을 만들어서 붙이고, 이 복제본들의 부모 요소인 ul 태그를 통째로(left 값을 이용해서)움직이는 것이었습니다.
  - 아래쪽 나우 플레잉 섹션은 현재 상영중인 영화라는 느낌을 살리기 위해서 한쪽으로 흐르듯이 구현을 해보았습니다. 이 코드에는 requestAnimationFrame이라는 자바스크립트 내장함수를 사용했습니다. 이 함수는 매 프레임마다 호출이 되는데, 인수로 이 카드들을 움직이게하는 함수를 받아서 재귀적으로 계속 작동되도록 구현했습니다.
  - 아래 popular, top rated 섹션은 자동으로 넘어가지는 않고 사용자가 수동으로 조작할 수 있게 했습니다. 버튼을 누르면 5장씩 넘어가는 것을 볼 수 있습니다.
  - 평소 인터렉티브한 웹페이지나 움직이는 요소를 만드는 것에 관심이 많았습니다. 캐러셀과 관련된 기능들을 구현하며 만드는 과정에서 재미를 느끼고 결과물을 보며 성취감을 느낀 좋은 기회였습니다.

---
