const cheerio = require('cheerio');
const fetch = require("node-fetch");



module.exports = (async function() {
const res = await fetch('https://dailyverses.net/kjv')
const text = await res.text();
const $ = cheerio.load(text);
let verseText = $('.v1').text();
let verseChapter = $('.vc').first() .text();

const finalVerse = verseText + verseChapter

console.log(finalVerse);
// exports.verse = finalVerse.toString();


})();

