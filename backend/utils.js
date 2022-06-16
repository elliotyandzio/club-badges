const updateImageSize = (url, size) => {
  if (size !== 'tiny') {
    const splitUrl = url.split('tiny');
    const newImageUrl = `${splitUrl[0]}${size}${splitUrl[1]}`;
    return newImageUrl;
  }
  return url;
}

const getAllBadgeSizes = (url, size) => {
  let images = {}
  size.forEach(imgSize => {
    const newImgUrl = {
      [imgSize]: updateImageSize(url, imgSize)
    }
    images = { ...images, ...newImgUrl }
  })
  return images;
}

module.exports = {
  getAllBadgeSizes
}