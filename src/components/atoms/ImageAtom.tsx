import React, { useState, useMemo } from 'react';
import { Image, ImageProps, View, StyleSheet } from 'react-native';
import { ThemeProvider } from '../../assets/theme';

interface ImageAtomProps extends ImageProps {
  errorImage: ImageProps['source'];
}

const ImageAtom = ({ style, source, errorImage, resizeMode, ...rest }: ImageAtomProps) => {
  const [imgError, setImgError] = useState(false);
  const theme = ThemeProvider();
  const styles = useMemo(() =>
    StyleSheet.create({
      rootView: { justifyContent: 'center', alignItems: 'center', backgroundColor: theme.palette.grey[200], overflow: 'hidden' },
      errorStyle: { width: '55%', height: '55%', opacity: 0.5 },
    }), [theme]
  );


  const onError = () => {
    if (errorImage) {
      setImgError(true);
    }
  };

  const imageSource = imgError ? errorImage : source;

  return (
    !imgError ? (
      <Image
        style={[{}, style]}
        resizeMode={resizeMode ? resizeMode : 'cover'}
        source={imageSource}
        onError={onError}
        {...rest}
      />
    ) : (
      <View style={[style, styles.rootView]}>
        <Image
          style={styles.errorStyle}
          resizeMode={resizeMode ? resizeMode : 'cover'}
          source={imageSource}
          onError={onError}
          {...rest}
        />
      </View>
    )
  );
};

ImageAtom.defaultProps = {
  resizeMode: 'cover',
  errorImage: require('../../assets/img/logo.png'),
};

export default ImageAtom;
