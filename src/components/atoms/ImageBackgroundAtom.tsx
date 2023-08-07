import React, { useState, useMemo } from 'react';
import { Image, ImageProps, View, ImageBackground, ImageBackgroundProps, StyleSheet } from 'react-native';
import { ThemeProvider } from '../../assets/theme';

interface ImageBackgroundAtomProps extends ImageBackgroundProps {
  errorImage: ImageProps['source'];
}

const ImageBackgroundAtom = ({ style, source, errorImage, resizeMode, imageStyle, ...rest }: ImageBackgroundAtomProps) => {
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
      <ImageBackground
        style={[{}, style]}
        imageStyle={imageStyle}
        resizeMode={resizeMode ? resizeMode : 'contain'}
        source={imageSource}
        onError={onError}
        {...rest}>{rest.children}</ImageBackground>
    ) : (
      <View style={[style, styles.rootView]}>
        <Image
          style={styles.errorStyle}
          resizeMode={resizeMode ? resizeMode : 'contain'}
          source={imageSource}
          onError={onError}
        />
        {rest.children}
      </View>


    )
  );
};

ImageBackgroundAtom.defaultProps = {
  resizeMode: 'contain',
  errorImage: require('../../assets/img/logo.png'),
};

export default ImageBackgroundAtom;
