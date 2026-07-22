const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

// Default values for init status values
const liveliness_new = 200
const readiness_new = 200

// router.get('/', (req, res) => {
//     res.send('Hello express!');
// });

// Route application to index.html file.
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/html/index.html'));
  //__dirname : It will resolve to your project folder.
});

// Health Probe - Application Liveliness
router.get('/health/liveliness',function(req,res){
    console.log(`code ----> ${liveliness_new}`)
    res.status(parseInt(liveliness_new))
      if (liveliness_new > 399){
        res.send('Not Healthy')
      }
      else{ res.send('Healthy')}
  });

// Health Probe - Application Readiness
router.get('/health/readiness',function(req,res){
  console.log(`code ----> ${readiness_new}`)
  res.status(parseInt(readiness_new))
    if (readiness_new > 399){
      res.send('Not Ready')
    }
    else{ res.send('Ready')}
    
  });  

app.use('/', router);
app.listen(port);

console.log('Listening on port ' + port);
