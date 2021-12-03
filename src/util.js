//RESIZE MEDIA IMAGES

export const smallImage = (imagePath, size) => {
  let image;
  if (imagePath) {
    image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          'media/screenshots',
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`);
  }
  return image;
};
