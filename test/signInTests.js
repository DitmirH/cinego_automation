require('../nightwatch.conf.js');
const pageWorld = require ('../support/pageWorld.js');
const signInUsers = require('../support/signInUsers');

module.exports = {
    //
    // beforeEach : function(browser) {
    //     pageWorld.radioPage(browser).navigate();
    //     signInUsers.signInViaOrb('normal', browser);
    // },
    // afterEach : function(browser) {
    //     pageWorld.radioPage(browser).navigate();
    //     signInUsers.signInViaOrb('normal', browser);
    // },

    '@tags': ['signin'], //nightwatch --tag smoke
    'sign in Via Orb': function (browser) {
        pageWorld.radioPage(browser).navigate();
        signInUsers.signInViaOrb('normal', browser);
        browser.waitForElementVisible('.cap-c-collection-card-slice', 5000);
    }
    // 'sign in Via upsell': function (browser) {
    //     // pageWorld.radioPage(browser).navigate();
    //     // signInUsers.signInViaUpSell('normal', browser)
    //     browser.
    //         waitForElementVisible('.cap-c-collection-card-slice', 5000);
    //     browser.end()
    // }
};
