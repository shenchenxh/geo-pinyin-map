'use strict';

var geoip = require('geoip-lite');
var console = require('console');
var fs = require('fs');
var pinyin = require('pinyin');
var area = require('./provinces.json');

// 对外暴露的API
