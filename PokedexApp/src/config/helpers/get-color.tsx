import ImageColors from 'react-native-image-colors';

export const getColorFromImage = async (image: string): Promise<string> => {
  const fallbackColor = 'grey';
  const colors = await ImageColors.getColors(image, {
    fallback: fallbackColor,
  });

  switch (colors.platform) {
    case 'ios':
      return colors.background ?? fallbackColor;
    case 'android':
      return colors.dominant ?? fallbackColor;
    default:
      return fallbackColor;
  }
};
