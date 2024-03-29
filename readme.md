## 네비게이션

![navigation](https://github.com/KimJeonghun91/rnBoilerPlate/assets/39161206/a46e77eb-48d5-4d76-b2fa-94a1bbf0e692)

<br/>

## DayNight / Theme

![theme](https://github.com/KimJeonghun91/rnBoilerPlate/assets/39161206/a9e83665-e6fa-4920-86b7-aec43f91e856)

<br/>

## Atomic Design Pattern

```yaml
src
├── components
│   ├── atoms
│   ├── molecules
└── └── organisms
```

```tsx
<RootViewMlc>
    <InfoView title={'React Native for Junior'} />

    <ViewAtom style={styles.mainView}>
        <TextAtom>본 프로젝트는 RN 초보자를 위해 제작되었습니다.</TextAtom>
    </ViewAtom>
</RootViewMlc>
```

<br/>
<br/>

## 할일

- [ ] ThemeProvider, auth 리덕스로 제작된 것 context, recoil 예제 추가하기.
- [ ] 비동기 처리 예제 페이지 만들기.
- [ ] NativeBridge 예제 페이지 만들기.
- [ ] 커스텀훅 예제 페이지 만들기.
- [x] 전역 상태 관리 예제 만들기.
- [x] Modal 예제 페이지 만들기.

<br/>

## esLint

npx eslint src

GithubAction : eslint.yml

- camelcase : 객체, 함수, 변수 카멜 케이스 사용

- no-color-literals : 색상 하드코딩 금지

<br/>

## 참고 사이트

- https://toss.im/slash-21/sessions/3-4
