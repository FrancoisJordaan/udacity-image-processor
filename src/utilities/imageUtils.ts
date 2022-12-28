import { existsSync } from 'node:fs'
import express, { NextFunction } from 'express'
import sharp from 'sharp'
import path from 'path'
import { ImageProperties } from '../routes/api/images';

export const resizeImage = async (
  sourceImageTitle: string,
  width: number,
  height: number
) => {
  try {
    await findSourceImage(`${sourceImageTitle}`)
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

export const findSourceImage = async (imageTitle: string) => {
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

export const imageCache = (
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
    res.redirect(`http://localhost:4055/api/images/${filename}_${width}x${height}.jpeg`)
  } else {
    next()
  }
}