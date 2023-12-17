const express = require('express');
const fileUpload = require('express-fileUpload')
const app = express();
const PORT = process.env.PORT || 3000;

// default option
app.use(fileUpload())

// set up Handlebars.js as your app's template engine
// set up Handlebars.js as your app's template engine
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// turn on routes, and make sure that this is always after the creation of your session. if you declare this befor the declaration of your session, it wont work 
app.get('', (req,res) => {
  res.render('home')
});


app.listen(PORT, () => console.log(`litening on port ${PORT}`) )