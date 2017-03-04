'use strict';

let jsf = require('json-schema-faker');
let schema = require('./videos-schema.json');
let sample = jsf(schema);
let fs = require('fs');
let path = require('path');
let filename = path.resolve(__dirname, 'videos.json');
fs.writeFileSync(filename, JSON.stringify(sample, null, 4));
