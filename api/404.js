const app   require("express")();
app.set('view engine', 'ejs');
app.get('/404', (req, res) => res.render('404'))
export default app;
