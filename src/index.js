const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8000

const app = express()
  .use(cors())
  .use(bodyParser.json());

app.get('/wx/travel/locations', (req, res, next) => {
  const payload = {
    nsw:[
      'Palm Beach',
      'Blue Mountain',
      'Laperuse',
      'Opera House',
      'Darling Harbour'
    ],
    victoria: [
      'Royal Botanic Gardens',
      'National Gallery of Victoria',
      'Federation Square'
    ]
    ,
    act: [
      'Australian War Memorial',
      'New Parliament House',
      'Lake Burley Griffin',
      'The National Science and Technology Centre'
    ]
  }
  return res.status(200).send(payload);
});

app.get('/wx/system/env', (req, res) => {
  const env = process.env.SECRET_NAME || 'not found';
  return res.status(200).send({env: env});
});

app.listen(port, () =>{
  console.log(`listening to requests on http://localhost:${port}`);
});
