import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test endpoint responses', () => {
  it('expects the / endpoint to return a 200 response code', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
  it("expects the api/images endpoint to return a fail message if the filename provided doesn't exist in the source-images folder", async () => {
    const response = await request.get(
      '/api/images/?filename=boo&width=300&height=300'
    )
    expect(response.text).toEqual(
      'Sorry, there is no image with a file name of boo'
    )
  })
})
