import resizeImage from '../../utilities/sharpImageResizer'
import path from 'path'

describe('resizeImage', () => {
  it("should return an error if the file name provided doesn't exist in the src/assets/source-images directory", async () => {
    const imagePath = path.join('src', 'assets', 'source-images', 'boo.jpeg')
    expect(await resizeImage('boo', 100, 100)).toEqual(
      new Error(`Input file is missing: ${imagePath}`)
    )
  })
  it('should return a relative path of the source image if the file name provided exists in the src/assets/souce-images directory', async () => {
    const imagePath = path.join('src', 'assets', 'source-images', 'fjord')
    expect(await resizeImage('fjord', 100, 100)).toEqual(imagePath)
  })
})
