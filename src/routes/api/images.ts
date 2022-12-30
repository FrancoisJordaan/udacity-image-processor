import express from 'express'
import imageUtils from '../../utilities/imageUtils'
import resizeImage from '../../utilities/sharpImageResizer'

const images = express.Router()

export interface ImageProperties {
  filename?: string | undefined
  height?: string
  width?: string
}

images.use(express.static('src/assets/source-images'))
images.use(express.static('src/assets/resized-images'))

images.get('/', imageUtils.imageCache, async (req, res) => {
  try {
    const { filename, height, width }: ImageProperties = req.query

    if (filename === undefined || width === undefined || height === undefined) {
      res.send('Please provide a file name, width and heigt for the image')
    } else if (
      Number(width) <= 0 ||
      Number(height) <= 0 ||
      isNaN(Number(width)) ||
      isNaN(Number(height))
    ) {
      res.send(
        'Unable to process the image resizing. Please provide a height and width as a numerical value larger than 0.'
      )
    } else if (await imageUtils.findSourceImage(filename as string)) {
      await resizeImage(String(filename), Number(width), Number(height))
      res.send(`<img src=${filename}_${width}x${height}.jpeg alt=${filename}>`)
    } else {
      res.send(`Sorry, there is no image with a file name of ${filename}`)
    }
  } catch (err) {
    console.error(err)
  }
})

export default images
