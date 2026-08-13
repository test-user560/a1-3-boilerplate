# AI 웹 서비스 빌딩

HTML, CSS, JavaScript가 함께 웹 서비스를 만드는 과정을 실습합니다.

## 데모 코드 읽기

`src/demo.html`에는 완성된 예시가 들어 있습니다. 각 코드 블록 위의 주석에서 해당 코드가 하는 일과 AI 요청 예시를 확인할 수 있습니다.

AI에게 기능 구현을 요청할 때는 아래 순서로 말해보세요.

1. **어떤 동작을 할 때**: 버튼 클릭처럼 기능이 시작되는 상황
2. **무엇을 하고 싶은지**: 숫자를 더하거나 데이터를 가져오는 처리
3. **어떤 결과를 보여줄지**: 화면에 바뀐 숫자, 이미지, 로딩 상태 등을 표시하는 방법

예시:

> `src/js/demo.js`에서 사용자가 버튼을 클릭하면 현재 숫자에 1을 더하고, 바뀐 숫자가 화면에 표시되도록 작성해줘.
> `src/js/demo.js`에서 사용자가 버튼을 클릭하면 PokeAPI에 랜덤 포켓몬 정보를 요청하고, 받은 이름과 이미지를 화면에 표시해줘. 요청 중에는 스켈레톤 UI를 보여줘.

## 폴더 구조

```text
src/
├── index.html          # 실습할 기본 화면
├── demo.html           # 완성된 예시 화면
├── api/
│   └── index.py        # /api 주소에서 실행되는 서버리스 함수
├── js/
│   ├── app.js          # 기본 화면의 JavaScript
│   └── demo.js         # 예시 화면의 JavaScript
└── styles/
    ├── styles.css      # 기본 화면의 CSS
    └── demo.css        # 예시 화면의 CSS
```

`vercel.json`은 브라우저 주소와 `src/` 안의 파일을 연결합니다. 예를 들어 `/api`로 요청하면 `src/api/index.py`가 실행됩니다.

## 저장할 때 코드 정리하기

코드를 저장할 때 들여쓰기와 줄바꿈을 자동으로 정리하고 싶다면 VS Code의 Extensions에서 `Oxc`를 검색해 **Oxc Formatter** 확장을 설치하세요. 이 프로젝트는 저장할 때 HTML, CSS, JavaScript, JSON 코드를 정리하도록 설정되어 있습니다.

## 실행하기

### 크롬으로 열기

`src/demo.html` 파일을 Chrome으로 열어볼 수 있어요. 다만 코드를 변경한 뒤에는 브라우저를 직접 새로고침해야 합니다.

### Live Server 사용하기

1. VS Code 왼쪽의 **Extensions**에서 `Live Server`를 검색해 설치합니다.
2. 실행할 HTML 파일을 엽니다.
   - 실습: `src/index.html`
   - 예시: `src/demo.html`
3. 다음 방법 중 하나로 실행합니다.
   - VS Code 오른쪽 아래의 **Go Live**를 누릅니다.
   - HTML 파일을 우클릭한 뒤 **Open with Live Server**를 누릅니다.
4. 브라우저가 열리면 결과를 확인합니다. 코드를 저장할 때마다 화면이 자동으로 새로고침됩니다.

## 서버리스 함수 실행하기

`src/api/index.py`는 Vercel에서 서버처럼 실행되는 서버리스 함수입니다. 이 코드는 Live Server가 아니라 Vercel 개발 서버로 실행해야 합니다.

화면의 HTML, CSS, JavaScript만 수정할 때는 Live Server를 사용해도 됩니다. `/api` 요청까지 확인할 때만 `vercel dev`를 실행하세요.

`vercel dev`는 파일을 저장해도 브라우저 화면을 자동으로 새로고침하지 않습니다. HTML, CSS, JavaScript를 수정한 뒤에는 브라우저를 직접 새로고침하세요.

### 1. 필요한 도구 확인하기

`vercel dev`를 실행하려면 Node.js와 Vercel CLI가 필요합니다.

- Node.js가 없다면 [Node.js](https://nodejs.org/)를 먼저 설치합니다.
- Vercel CLI를 전역으로 설치했다면 바로 다음 단계로 넘어갑니다.
- 전역 설치를 하지 않았다면, 이 프로젝트 폴더에서 처음 한 번만 아래 명령어를 실행합니다.

```bash
npm install
```

`npm install`은 프로젝트 안에 Vercel CLI를 설치합니다. 관리자 권한 없이 사용할 수 있고, 다른 사람도 같은 버전을 사용할 수 있습니다.

### 2. 개발 서버 실행하기

Vercel CLI를 전역으로 설치했다면:

```bash
vercel dev
```

프로젝트에 설치한 Vercel CLI를 사용한다면:

```bash
npx vercel dev
```

둘 중 하나만 실행하세요. `src/`의 HTML, CSS, JavaScript와 `src/api/index.py`를 함께 테스트할 수 있습니다.

터미널에 표시된 주소(보통 `http://localhost:3000`)를 브라우저에서 엽니다. `http://localhost:3000/api`로 접속하면 서버가 돌려주는 더미 데이터를 확인할 수 있습니다.

개발 서버를 멈추려면 실행 중인 터미널에서 `Ctrl + C`를 누릅니다.
