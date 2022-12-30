import sharp from 'sharp'
import path from 'path'
import imageUtils from './imageUtils'

const resizeImage = async (
  sourceImageTitle: string,
  width: number,
  height: number
): Promise<string | unknown> => {
  try {
    await imageUtils.findSourceImage(`${sourceImageTitle}`)
    const sourceImageRelativePath = path.join(
      'src',
      'assets',
      'source-images',
      sourceImageTitle
    )
    const resizedImageRelativePath = path.join(
      'src',
      'assets',
      'resized-images',
      sourceImageTitle
    )

    await sharp(`${sourceImageRelativePath}.jpeg`)
      .resize({
        width: width,
        height: height,
      })
      .toFile(`${resizedImageRelativePath}_${width}x${height}.jpeg`)

    return sourceImageRelativePath
  } catch (error) {
    return error
  }
}

export default resizeImage
