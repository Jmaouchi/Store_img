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

app.post('', (req, res) => {
  let sampleFile;
  let uploadPath;


  if(!req.files || Object.keys(req.files).length === 0){
      return res.status(400).send('no files were uploaded');
  }

  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/upload/' + 
  console.log(sampleFile);


  // use mv() to place file on the server 
  sampleFile.mv(uploadPath, function(err){
    if(err) return res.status(500).send(err);

    res.send('file is uploaded')

  })

})


app.listen(PORT, () => console.log(`litening on port ${PORT}`) )