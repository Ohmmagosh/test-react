const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');

const test =[
  {
    name: "phatcharaphol",
    surname: "suanprom",
    nickname: "OHM",
  },
  {
    name: "pranitran",
    surname: "uthaithummarat",
    nickname: "PUK",
  },
  {
    name: "narutchai",
    surname: "wonkjiek",
    nickname: "BOOM",
  },
]

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
  res.status(200).json(test)
})
app.listen(PORT,() => {console.log("server is running...")})
