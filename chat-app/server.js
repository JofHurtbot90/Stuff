const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('@pusher/chatkit-server');
const app = express();

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:64e2f4de-4e44-411c-84a2-380a6ba4bf1b',
  key: '65b346e7-faf2-4fa4-bfb4-ff65338ba091:ZPvP19UXrVyP73tOn8zW78mRMGMqs369po1g2wza/DM=',
})
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req, res)=>{
  const { username } = req.body
  console.log(username);
  chatkit
    .createUser({
      id: username,
      name: username
    })
    .then(()=> res.sendStatus(201))
    .catch(error =>{
      if (error.error_type === 'services/chatkit/user_already_exists'){
        res.sendStatus(200)
      } else {
        res.status(error.status).json(error)
      }
    })
})

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Running on port ${PORT}`);
  }
})
