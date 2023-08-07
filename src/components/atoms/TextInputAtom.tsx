import React, { useMemo } from 'react';
import { Platform, TextInput, TextInputProps, TextStyle, StyleProp, StyleSheet } from 'react-native';
import { ThemeProvider } from '../../assets/theme';

type TextInputAtomProps = TextInputProps & {
  // style?: TextStyle | any
};

const TextInputAtom = ({ ...props }: TextInputAtomProps) => {
  const theme = ThemeProvider();
  const styles = useMemo(() =>
    StyleSheet.create({
      ipStyle: { color: theme.palette.text.primary, paddingVertical: Platform.OS === 'ios' ? 8 : 5 },
    }), [theme]
  );

  const styleArray: StyleProp<TextStyle> | undefined = props.style;
  let style: TextStyle = {};
  const fontFmlR = theme.layout.fontfml.regular; // undefined
  const fontFmlB = theme.layout.fontfml.bold; // undefined




  // style props는 배열일 수 있음.
  if (Array.isArray(styleArray)) {
    for (let value of styleArray) {
      if (typeof value === 'object') { style = { ...style, ...value }; }
    }
  } else {
    if (typeof styleArray === 'object') { style = { ...styleArray }; }
  }


  // fontWeight 적용시 커스텀 폰트가 안먹혀서 아래와 같이 처리
  const fontFamily = style && style.fontWeight && style.fontWeight === 'bold' ? fontFmlB : fontFmlR;
  const fontWeight = (fontFamily === fontFmlB || fontFamily === fontFmlR) ? 'normal'
    : style && style.fontWeight === 'bold' ? 'bold' : 'normal';

  return (
    <TextInput allowFontScaling={false} {...props} style={[styles.ipStyle, style, { fontFamily: fontFamily, fontWeight: fontWeight }]}>{props.children}</TextInput>
  );
};

TextInputAtom.defaultProps = {
  style: {
    color: '#000000',
  }, // style props가 전달되지 않았을 경우 디폴트 값
};

export default TextInputAtom;
