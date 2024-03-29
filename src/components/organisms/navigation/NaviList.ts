export type NaviItem = {
  name: string;
  icon: any;
  path: any;
  initParams: any;
  info: string;
};


export const naviList: NaviItem[] = [
  {
    name: '홈',
    icon: require('../../../assets/img/logo.png'),
    path: 'Main',
    initParams: { title: '홈' },
    info: 'React Native for Junior.',
  },
  {
    name: '프로젝트 정보',
    icon: require('../../../assets/img/logo.png'),
    path: 'ProjectIntro',
    initParams: { title: '프로젝트 정보' },
    info: '저장소 링크 및 의존 패키지.',
  },
  {
    name: '그리드 레이아웃',
    icon: require('../../../assets/img/logo.png'),
    path: 'GridSystem',
    initParams: { title: '그리드 레이아웃' },
    info: '그리드 레이아웃 예제.',
  },
  {
    name: '테마 설정',
    icon: require('../../../assets/img/logo.png'),
    path: 'ThemePage',
    initParams: { title: '테마 설정' },
    info: 'ThemeProvider를 이용한 테마 설정.',
  },
  {
    name: '이벤트 루프',
    icon: require('../../../assets/img/logo.png'),
    path: 'EventLoop',
    initParams: { title: '이벤트 루프' },
    info: 'RN의 이벤트루프 설명',
  },
  {
    name: '상태 관리 예제',
    icon: require('../../../assets/img/logo.png'),
    path: 'GlobalStatePage',
    initParams: { title: '상태 관리 예제' },
    info: 'Redux, zustand 예제',
  },
  {
    name: 'React-Query 예제',
    icon: require('../../../assets/img/logo.png'),
    path: 'RnQueryPage',
    initParams: { title: 'React-Query 예제' },
    info: 'React-Query예제',
  },
  {
    name: 'HOC 예제',
    icon: require('../../../assets/img/logo.png'),
    path: 'HocPtPage',
    initParams: { title: 'HOC 예제' },
    info: 'HOC 디자인 패턴',
  },
  {
    name: 'ObserverPattern 예제',
    icon: require('../../../assets/img/logo.png'),
    path: 'ObserverPtPage',
    initParams: { title: 'ObserverPattern 예제' },
    info: '옵저버 디자인 패턴 예제',
  },
  {
    name: 'Modal 예제',
    icon: require('../../../assets/img/logo.png'),
    path: 'ModalPage',
    initParams: { title: 'Modal 예제' },
    info: 'Modal 예제',
  },
  {
    name: 'Suspense&Skeleton',
    icon: require('../../../assets/img/logo.png'),
    path: 'SuspensePage',
    initParams: { title: 'Suspense&Skeleton 예제' },
    info: 'Suspense&Skeleton 예제',
  },
];
