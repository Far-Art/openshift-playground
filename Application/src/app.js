const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

router.get('/', (req, res) => {
    res.send('Hello express!');
});

app.use('/', router);
app.listen(port);

console.log('Listening on port ' + port);