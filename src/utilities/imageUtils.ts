import { existsSync } from 'node:fs'
import express, { NextFunction } from 'express'

import path from 'path'
import { ImageProperties } from '../routes/api/images'

const findSourceImage = async (
  imageTitle: string
): Promise<boolean | undefined> => {
  try {
    const imageRelativePath = path.join(
      'src',
      'assets',
      'source-images',
      imageTitle
    )
    const imageAbsolutePath = path.resolve(`${imageRelativePath}`)
    if (existsSync(`${imageAbsolutePath}.jpeg`)) {
      return true
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}

const imageCache = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
): void => {
  const { filename, height, width }: ImageProperties = req.query
  const resizedFileName = `${filename}_${width}x${height}`
  const resizedFileRelativePath = path.join(
    'src',
    'assets',
    'resized-images',
    resizedFileName
  )
  const resizedFileAbsolutePath = path.resolve(resizedFileRelativePath)
  if (existsSync(`${resizedFileAbsolutePath}.jpeg`)) {
    res.redirect(
      `http://localhost:4055/api/images/${filename}_${width}x${height}.jpeg`
    )
  } else {
    next()
  }
}

export default { findSourceImage, imageCache }
