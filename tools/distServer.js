/*eslint-disable no-console*/
import express from 'express';
import path from 'path';
import open from 'open';

const port = 80;
const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
  if(err){
    console.log(err);
  }
  else{
    open(`http://localhost:${port}`);     //open the browser and load localhost:{port}
  }
});
