
const getScreen1Styles = (animation, width) => {
  const image2TranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });
  const imageScale = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return {
    Image2: {
      transform: [
        {
          translateX: image2TranslateX,
        },
        {
          scale: imageScale,
        },
      ],
    },
  };
};

const getScreen3Styles = (animation, width, index) => {
  const inputRange = [width * (index - 1), width * index, width * (index + 2)];
  const imageScale = animation.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });
  return {
    Image1: {
      transform: [
        {
          scale: imageScale,
        },
      ],
    },
  };
};
export {getScreen1Styles, getScreen3Styles};
