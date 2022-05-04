const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4443;

// Setting view engine as ejs
app.set('view engine', 'ejs');

// Setting path for views

app.set('views', './views');
// Redirect all to index.js inside routes directory
app.use('/', require('./routes'));
app.use(express.static('assets'));
mongoose.connect(process.env.MONGO_URI)
        .then(data => {
          console.log('MongoDb connected....')
        })
        .catch(err => {
          console.log(err)
        })
// app.get('/', (req,res) => {
//   res.send("Hello World")
// })

app.listen(port, (err) => {
  if(err){
    console.log(err)
  }
  console.log(`Server is running on port ${port}`)
})