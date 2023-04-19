import React, { useCallback, useState } from 'react';
import { ViewProps, Platform, LayoutChangeEvent } from 'react-native';
import { ThemeProvider } from '../../assets/theme';
import { TextAtom, ViewAtom } from '../atoms';


type CardViewProps = ViewProps & {
  title?: string
  subTitle?: string
  borderRadius?: number
  padding?: number
};


/**
 * 제목과 부제목을 표시하는 재사용 가능한 카드 컴포넌트입니다.
 * @param {Object} props - 컴포넌트 props입니다.
 * @param {string} [props.title=''] - 카드의 제목입니다.
 * @param {string} [props.subTitle=''] - 카드의 부제목입니다.
 * @param {number} [props.borderRadius=5] - 카드의 테두리 반지름입니다.
 * @param {number} [props.padding=10] - 카드의 안쪽 여백입니다.
 * @returns {JSX.Element}
*/
const CardView = ({
  title = '',
  subTitle = '',
  borderRadius = 5,
  padding = 10,
  ...props
}: CardViewProps) => {
  const theme = ThemeProvider();
  const [borderR, setBorderR] = useState(0);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
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
  );
};

CardView.defaultProps = {
  style: {}, // 디폴트
};

export default CardView;
