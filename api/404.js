import a from './html/404'
export default require('express')().get('/', (req, res) => res.status(200).send(a).end())