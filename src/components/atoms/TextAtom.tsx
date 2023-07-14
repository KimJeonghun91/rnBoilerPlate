import React from 'react';
import { Text, TextProps, TextStyle, StyleProp } from 'react-native';
import { ThemeProvider } from '../../assets/theme';

type TextAtomProps = TextProps & {
  // style?: TextStyle | any
};

const TextAtom = ({ ...props }: TextAtomProps) => {
  const theme = ThemeProvider();
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
  const fontWeight = fontFmlB === undefined ? style.fontWeight
    : (fontFamily === fontFmlB || fontFamily === fontFmlR) ? 'normal'
      : style && style.fontWeight === 'bold' ? 'bold' : 'normal';

  return (
    <Text allowFontScaling={false} {...props} style={[{ color: theme.palette.text.primary, fontFamily: fontFamily }, style, { fontWeight: fontWeight }]}>{props.children}</Text>
  );
};

TextAtom.defaultProps = {
  style: {}, // style props가 전달되지 않았을 경우 디폴트 값
};

export default TextAtom;
