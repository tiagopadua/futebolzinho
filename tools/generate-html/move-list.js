'use strict'

const fs = require('fs');

const rawData = fs.readFileSync('move-list.json');
const moves = JSON.parse(rawData);

moves.forEach(move => {
  console.log(move.title);
});
