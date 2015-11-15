var express = require('express', 'http'),
  app = express(),
  http = require('http'),
  request = require('sync-request');

  app.get('/', function(req, res) {
  res.send('Check your Console!');
  getResult('/');
  res.end();
});

function getResult(query) {
  var data = request('GET', 'http://example.com' + query, {
    'headers': {
      'Accept': 'application/json'
    }
  });
  var locals = JSON.parse(data.getBody('utf8'));
  console.log(locals);
  if(locals.next) {
    getResult(locals.next);
  }
}

app.listen(3000, function() {
  console.log('listening on port 3000');
});
