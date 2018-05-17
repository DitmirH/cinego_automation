require('../nightwatch.conf.js');
const pageWorld = require ('../support/pageWorld.js');
const signInUsers = require('../support/signInUsers');

module.exports = {
    '@tags': ['signin'], //nightwatch --tag smoke
    'sign in Via Orb': function (browser) {
        pageWorld.radioPage(browser).navigate();
        signInUsers.signInViaOrb('normal', browser)
        browser.end()
    },
    'sign in Via upsell': function (browser) {
        pageWorld.radioPage(browser).navigate();
        signInUsers.signInViaUpSell('normal', browser)
        browser.end()
    }
};
