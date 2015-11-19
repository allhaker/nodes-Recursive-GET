var express = require('express', 'http'),
  app = express(),
  http = require('http'),
  request = require('sync-request');

getResult('/');

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
