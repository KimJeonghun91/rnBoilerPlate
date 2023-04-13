import { useCallback } from 'react';
import { ViewProps, Platform } from "react-native";
import { ThemeProvider } from "../../assets/theme";
import { ViewAtom } from '../atoms';


type RootViewMlcProps = ViewProps & {
  pSize?: string
};

const RootViewMlc = ({
  pSize = '',
  ...props
}: RootViewMlcProps) => {
  const theme = ThemeProvider();

  // * radius 는 컴포넌트의 크기와 모양에 따라 각도가 달라지기 때문에 동일한 각도를 위해 함수 사용
  const calculateBorderRadius = useCallback((width: number, height: number, radius: number) => {
    const aspectRatio = width / height;
    const adjustedRadius = radius * Math.min(1, aspectRatio);

    // 2보다 작은 값은 안드로이드에서 동작하지 않기 때문에 최소 2를 리턴합니다.
    return Platform.OS === 'android' ? Math.max(adjustedRadius, 2) : adjustedRadius;
  }, []);


  return (
    <ViewAtom {...props} style={[{ flex: 1, backgroundColor: theme.palette.background.paper, ...theme.shadow }, props.style]}>
      {props.children}
    </ViewAtom>
  )
};

RootViewMlc.defaultProps = {
  style: {}, // 디폴트
};

export default RootViewMlc;