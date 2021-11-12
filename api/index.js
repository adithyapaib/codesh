export default require('express')().set('view engine', 'ejs').get('/',(req, res)=> res.status(200).render('index').end())
