import { useCallback, useState } from 'react';
import { ViewProps, Platform } from "react-native";
import { ThemeProvider } from "../../assets/theme";
import { TextAtom, ViewAtom } from '../atoms';


type RootViewMlcProps = ViewProps & {
  title?: string
  subTitle?: string
  borderRadius?: number
  padding?: number
};

const RootViewMlc = ({
  title = '',
  subTitle = '',
  borderRadius = 5,
  padding = 10,
  ...props
}: RootViewMlcProps) => {
  const theme = ThemeProvider();
  const [borderR, setBorderR] = useState(0);

  const handleLayout = useCallback((event: any) => {
    const { width, height } = event.nativeEvent.layout;

    // calculateBorderRadius
    const aspectRatio = width / height;
    const adjustedRadius = borderRadius * Math.min(1, aspectRatio);

    // 2보다 작은 값은 안드로이드에서 동작하지 않기 때문에 최소 2를 리턴합니다.
    setBorderR(Platform.OS === 'android' ? Math.max(adjustedRadius, 2) : adjustedRadius);
  }, [borderRadius]);


  return (
    <ViewAtom {...props} style={[{ flex: 1, backgroundColor: theme.palette.background.paper, ...theme.shadow, borderRadius: borderR, padding: padding }, props.style]}
      onLayout={handleLayout}>
      {title && <TextAtom style={{ fontSize: theme.layout.h4, fontWeight: 'bold', marginBottom: subTitle ? 3 : 10 }}>{title}</TextAtom>}
      {subTitle && <TextAtom style={{ fontSize: theme.layout.subtitle2, fontWeight: 'bold', marginBottom: 10 }}>{subTitle}</TextAtom>}
      {props.children}
    </ViewAtom>
  )
};

RootViewMlc.defaultProps = {
  style: {}, // 디폴트
};

export default RootViewMlc;