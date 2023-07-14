import React from 'react';
import { ViewProps, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ThemeProvider } from '../../assets/theme';
import { TextAtom, TouchAbleOpAtom } from '../atoms';


type CardViewProps = ViewProps & {
  title?: string
  subTitle?: string
  borderRadius?: number
  paddingVertical?: number
  paddingHorizontal?: number
  onPress?: () => void
  props?: StyleProp<ViewStyle>
};


/**
 * 제목과 부제목을 표시하는 재사용 가능한 카드 컴포넌트입니다.
 * @param {Object} props - 컴포넌트 props입니다.
 * @param {string} [props.title=''] - 카드의 제목입니다.
 * @param {string} [props.subTitle=''] - 카드의 부제목입니다.
 * @param {number} [props.borderRadius=5] - 카드의 테두리 반지름입니다.
 * @param {number} [props.paddingVertical=14] - 카드의 안쪽 여백입니다.
 * @param {number} [props.paddingHorizontal=10] - 카드의 안쪽 여백입니다.
 * @returns {JSX.Element}
*/
const CardView = ({
  title = '',
  subTitle = '',
  borderRadius = 0,
  paddingVertical = 14,
  paddingHorizontal = 10,
  onPress = () => { },
  ...props
}: CardViewProps) => {
  const theme = ThemeProvider();

  return (
    <TouchAbleOpAtom {...props} style={[styles.flex1, { backgroundColor: theme.palette.background.paper, ...theme.shadow, borderRadius: borderRadius, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical }, props.style]}
      onPress={onPress}>
      {title && <TextAtom style={[styles.fBold, { fontSize: theme.layout.h4, marginBottom: subTitle !== '' ? 3 : 10 }]}>{title}</TextAtom>}
      {subTitle && <TextAtom style={[styles.subTitle, { fontSize: theme.layout.subtitle2, color: theme.palette.text.secondary }]}>{subTitle}</TextAtom>}
      {props.children}
    </TouchAbleOpAtom>
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
