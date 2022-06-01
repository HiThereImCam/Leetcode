var floodFill = function (image, sr, sc, newColor, oldColor = image[sr][sc]) {
  if (
    sr < 0 ||
    sr >= image.length ||
    sc < 0 ||
    sc >= image[sr].length ||
    image[sr][sc] !== oldColor ||
    image[sr][sc] === newColor
  ) {
    return image;
  }

  image[sr][sc] = newColor;

  floodFill(image, sr + 1, sc, newColor, oldColor);
  floodFill(image, sr - 1, sc, newColor, oldColor);
  floodFill(image, sr, sc + 1, newColor, oldColor);
  floodFill(image, sr, sc - 1, newColor, oldColor);

  return image;
};