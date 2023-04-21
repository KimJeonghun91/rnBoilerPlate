import React from 'react';
import { ViewProps, StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { ThemeProvider } from '../../assets/theme';
import { TextAtom } from '../atoms';


type CardViewProps = ViewProps & {
  title?: string
  subTitle?: string
  borderRadius?: number
  padding?: number
  style?: StyleProp<ViewStyle>;
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
  borderRadius = 0,
  padding = 10,
  ...props
}: CardViewProps) => {
  const theme = ThemeProvider();

  return (
    <View {...props} style={[styles.flex1, { backgroundColor: theme.palette.background.paper, ...theme.shadow, borderRadius: borderRadius, padding: padding }, props.style]}>
      {title && <TextAtom style={[styles.fBold, { fontSize: theme.layout.h4, marginBottom: subTitle ? 3 : 10 }]}>{title}</TextAtom>}
      {subTitle && <TextAtom style={[styles.subTitle, { fontSize: theme.layout.subtitle2 }]}>{subTitle}</TextAtom>}
      {props.children}
    </View>
  );
};

CardView.defaultProps = {
  style: {}, // 디폴트
};

const styles = StyleSheet.create({
  flex1: { flex: 1 },
  fBold: { fontWeight: 'bold' },
  subTitle: { fontWeight: 'bold', marginBottom: 10 },
});


export default CardView;
