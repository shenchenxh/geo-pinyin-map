'use strict';

var geoip = require('geoip-lite');
var console = require('console');
var fs = require('fs');
var pinyin = require('pinyin');
var area = require('./provinces.json');
area = area.provinces;

 
var ip = "103.37.140.14";
var geo = geoip.lookup(ip);
 
console.log(geo);


var data = {};

area.forEach(function (pro) {
    data[getpy(pro.name)] = pro.citys.map(function (obj) { 
        return Object.keys(obj).map(function (key) { return getpy(obj[key]);}).join();
    });
});

fs.writeFile(__dirname + "/data.json", JSON.stringify(data), 'utf-8', function (err) {
    if (err) {
        console.log(err);
    }
});

function getpy (name) {
    return (pinyin(name, {
        style: pinyin.STYLE_NORMAL
    }).join(''));
}

