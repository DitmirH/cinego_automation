var conf = require('../nightwatch.conf.js');

module.exports = {
    'check page load': function (browser) {
        browser
            .url('http://www.cinego.uk/')   // visit the url
            .waitForElementVisible('body');
        }
    }
// testing
// var i;
// for (i = 1000;i > 0 ; i --) {
//     browser.url('https://cinego.uk/news-updates/10-must-see-movies-in-2018/')
//     console.log(i)
