let app = require('express')();

let htpp = require('http').Server(app);

app.get('/', (req, res) => {
  res.send('its working');
});

htpp.listen(3000, () => {
  console.log('Connected');
});

