import React, { useMemo } from 'react';
import { ViewProps, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ThemeProvider } from '../../assets/theme';
import { TextAtom, ViewAtom } from '../atoms';


type InfoViewProps = ViewProps & {
  title?: string
  contents?: string
  style?: StyleProp<ViewStyle>;
};


/**
 * 페이지의 상단에서 페이지를 설명하는 컴포넌트 입니다.
 * @param {Object} props - 컴포넌트 props입니다.
 * @param {string} [props.title=''] - 제목.
 * @param {string} [props.contents=''] - 내용.
 * @returns {JSX.Element}
*/
const CardView = ({
  title = '',
  contents = '',
  ...props
}: InfoViewProps) => {
  const theme = ThemeProvider();
  const styles = useMemo(() =>
    StyleSheet.create({
      infoBox: { backgroundColor: theme.palette.background.neutral, width: theme.layout.window.width, paddingTop: 25, paddingBottom: 35 },
      txtTitle: { paddingHorizontal: 10, marginVertical: 10, fontSize: theme.layout.h5, color: theme.palette.text.primary, textAlign: 'left', fontWeight: 'bold', width: '100%' },
      txtContents: { paddingHorizontal: 10, marginTop: 3, fontSize: theme.layout.body1, color: theme.palette.text.primary, textAlign: 'left', width: '100%', lineHeight: theme.layout.body1 + 7 }
    }), [theme]
  );

  return (
    <ViewAtom {...props} style={styles.infoBox}>
      <TextAtom style={styles.txtTitle}>{title}</TextAtom>
      <TextAtom style={styles.txtContents}>{contents}</TextAtom>
      {props.children}
    </ViewAtom>
  );
};

CardView.defaultProps = {
  style: {}, // 디폴트
};


export default CardView;
