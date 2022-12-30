import imageUtils from '../../utilities/imageUtils'

describe('findSourceImage', () => {
  it('should return true if the provided image name exists in the source-images folder', async () => {
    expect(await imageUtils.findSourceImage('fjord')).toBe(true)
  })
  it("should return true if the provided image name doesn't exist in the source-images folder", async () => {
    expect(await imageUtils.findSourceImage('boo')).toBe(false)
  })
})
