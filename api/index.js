import a from './html/index'
export default require('express')().get('/',(req, res)=> res.status(200).send(a).end())
