const db = require('../config')

module.exports = app => {
  // your routes here...
  app.get('/', (req, res) => { 
    // if (e) throw e
    return res.render('index')
  })

  app.post('/make', (req, res)=>{
    res.render('burger')
  })


  app.delete('/make/:id', (req, res) => {
    
  })

}