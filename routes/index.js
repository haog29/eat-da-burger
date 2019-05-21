const db = require('../config')



module.exports = app => {
  // your routes here...

  
//MAIN PAGE:

  app.get('/', (req, res) => { 
    return res.render('index')
  })

  //CREATE:POST
  app.post('/burger', (req, res)=>{
    db.query('INSERT INTO burgers SET ?', req.body, e => {
     
      // res.send(ok)
    // db.create(req.body, ()=> {
    res.render('burger')
  })
})

//READ:GET
app.get('/burger', (req, res) => {
  db.query('SELECT * FROM burgers', (e, burger) => {
   
    res.json(burger)
})
})


//UPDATE:PUT
app.put('/burger/:id', (req, res) => {
  db.query('UPDATE burgers SET ? WHERE ?', [req.body, { id: req.params.id }], e => {
    
    res.sendStatus(200)
  })
})


//DELETE

  app.delete('/burger/:id', (req, res) => {
    db.query('DELETE FROM burgerS WHERE ?', { id: req.params.id }, e => {
      
      res.sendStatus(200)
  })
  })




//   app.get('/burger/:id', (req, res) => {
//     db.query('SELECT * FROM burgers', (e, burger) => {
     
//       res.render('', { burger })
//   })
// })



}