import { resizeImage, findSourceImage } from '../../utilities/imageUtils'

describe('resizeImage', () => {
  it("should return an error if the file name provided doesn't exist in the src/assets/source-images directory", async () => {
    expect(await resizeImage('boo', 100, 100)).toEqual(
      new Error('Input file is missing: src/assets/source-images/boo.jpeg')
    )
  })
  it('should return a relative path of the source image if the file name provided exists in the src/assets/souce-images directory', async () => {
    expect(await resizeImage('fjord', 100, 100)).toEqual(
      'src/assets/source-images/fjord'
    )
  })
})

describe('findSourceImage', () => {
  it('should return true if the provided image name exists in the source-images folder', async () => {
    expect(await findSourceImage('fjord')).toBe(true)
  })
  it("should return true if the provided image name doesn't exist in the source-images folder", async () => {
    expect(await findSourceImage('boo')).toBe(false)
  })
})
