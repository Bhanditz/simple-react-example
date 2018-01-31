const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const app = express()

const publicPath = '/'
const outputPath = path.resolve(process.cwd(), 'build')

app.use(publicPath, express.static(outputPath))
app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')))

app.listen(PORT, (err) => {
  if (err) {
    return err.message
  } else {
    console.log(`Server started at http://localhost:${PORT}`)
  }
})
