import express from 'express'
import { resizeImage, findSourceImage, imageCache } from '../../utilities/imageUtils'

const images = express.Router()

export interface ImageProperties {
  filename?: string
  height?: string
  width?: string
}

images.use(express.static('src/assets/source-images'))
images.use(express.static('src/assets/resized-images'))

images.get('/', imageCache, async (req, res) => {
  const { filename, height, width }: ImageProperties = req.query
  if (await findSourceImage(filename as string)) {
    await resizeImage(String(filename), Number(width), Number(height))
    res.send(`<img src=${filename}_${width}x${height}.jpeg alt=${filename}>`)
  } else {
    res.send(`Sorry, there is no image with a file name of ${filename}`)
  }
})

export default images
