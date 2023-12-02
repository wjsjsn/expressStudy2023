const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('Successful response.');
  });

app.get('/hi', (req, res) => {   
    if(req.query.name) {
      res.send('Successful response. '+ req.query.name);
    } else {
      res.send('Successful response. HI');
    }   
  });
  
app.post("/hi",(req,res)=> {
  console.log(req.body)
  const name =  req.body.name;  
  res.send('received===>' + name);
})

app.get('/hihi', (req, res) => {
    res.send('Successful response. HIhi');
  });

app.listen(3000, () => console.log('express running on 3000'))


