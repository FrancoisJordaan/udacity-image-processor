import express from 'express'
import routes from './routes/index'

const PORT = 4055
const app = express()

app.get('/', (req, res) => {
  res.send(
    'Welcome to the image resizing API. You can access it via the GET api/images endpoint.'
  )
})

app.use('/api', routes)

app.listen(PORT, () =>
  console.log(`The server is listening on http://localhost:${PORT}`)
)

export default app
