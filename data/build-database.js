'use strict';

const fs = require('fs');
const path = require('path');
const jsf = require('json-schema-faker');
const DATABASE_SCHEME = require('./database-schema.json');

const sample = jsf(DATABASE_SCHEME);
const filename = path.resolve(__dirname, 'database.json');

fs.writeFileSync(filename, JSON.stringify(sample, null, 4));
