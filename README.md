# analog-clock

아날로그 시계로 시계에 마우스 오버시 정확한 시간이 툴팁으로 나타납니다.
![아날로그시계](https://github.com/Seulji-jo/analog-clock/assets/70743542/34dff1c2-af23-4b8b-923d-5e0372c4bc8a)


## Project Stack

Following items are core frontend technologies used in this project:

- React.ts
- Zustand
- Immer
- Tailwind CSS

## What it does

해당페이지의 아날로그 시계는 현재 지역의 시간을 실시간으로 보여줍니다.

- 시계는 시침, 분침, 초침으로 이루어져있고 현 위치의 시간을 반영합니다.
- 시계에 마우스 오버시 현재 시간을 툴팁으로 표시했습니다.
  - 툴팁은 마우스 커서 우상단에 위치하며 마우스 움직임에 따라 같이 움직입니다.

## How it works

<img width="1174" alt="스크린샷 2024-01-23 오후 9 15 35" src="https://github.com/Seulji-jo/analog-clock/assets/70743542/84957321-5572-4449-9424-3fa76375a1c7">
SPA framework로는 React.ts, Statement magement 라이브러리로는 zustand를 사용해 개발했습니다.
빠른 시간내에 개발을 해야해서 익숙한 React를 사용하였고, 하나의 스토어를 두고 flux패턴으로 redux보다 간편하고 쉽게 사용할 수 있어 Zustand를 사용해 상태관리를 했습니다.

- App.tsx파일에는 시계 컴포넌트가 포함되어있는 ClockPage외에 portal이라는 아이디를 가진 div태그가 있습니다. 해당 태그는 툴팁이 createPortal을 써서 렌더링 될 태그입니다.
- Zustand store에는 date, 시, 분, 초를 가진 time객체와 해당 상태를 변경할 수 있는 action함수가 있습니다.
  - AnalogClock 컴포넌트에서 zustand action함수인 setDate와 setTime으로 1초씩 새 값이 할당되게하여 해당 time이 바뀔때마다 degree값을 계산해 시침, 분침, 초침이 변경될 수 있도록 개발했습니다.
- 툴팁 컴포넌트는 자식을 프로퍼티로 받은 후 감싸 마우스오버 이벤트가 실행되게 설정했고, 툴팁 박스는 analog clock의 자식 컴포넌트이지만 독립적인 구조로 렌더링되게 createPortal을 사용했다.

## How to install & run locally

1. Clone the repo

```
git clone https://github.com/Seulji-jo/analog-clock.git
```

2. Install dependencies

```
npm install
```

3. Run it
   Development mode

```
npm run start
```
