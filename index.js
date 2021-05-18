let app = require('express')();
let port = 3000;
let htpp = require('http').Server(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html');
});

htpp.listen(port, () => {
  console.log('Connected');
});

