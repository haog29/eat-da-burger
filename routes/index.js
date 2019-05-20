const db = require('../config')

module.exports = app => {
  // your routes here...
  app.get('/', (req, res) => { 
    return res.render('index')
  })

  app.get('/burger/:id', (req, res) => {
    db.query('SELECT * FROM burger', (e, burger) => {
      if (e) throw e
      res.render('', { burger })
  })
})


  app.post('/burger', (req, res)=>{
    db.create(req.body.burger_name, ()=> {
    res.render('burger')
  })
})

app.put('/burger/:id', (req, res) => {
  db.query('UPDATE burger SET ? WHERE ?', [req.body, { id: req.params.id }], e => {
    if (e) throw e
    res.sendStatus(200)
  })
})


  app.delete('/burger/:id', (req, res) => {
    db.query('DELETE FROM burger WHERE ?', { id: req.params.id }, e => {
      if (e) throw e
      res.sendStatus(200)
  })
  })
}