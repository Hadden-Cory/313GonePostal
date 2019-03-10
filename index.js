const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


// express()
//   //.use(express.static(path.join(__dirname, 'public')))
//   .use(express.static('public'))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  //TODO: Fill this out!
  function calculateRate(){

  }

