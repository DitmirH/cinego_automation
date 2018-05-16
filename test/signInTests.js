require('../nightwatch.conf.js');
const pageWorld = require ('../pageWorld.js');


module.exports = {
    '@tags': ['signin'], //nightwatch --tag smoke
    'sign in Via Orb': function (browser) {
        pageWorld.radioPage(browser).navigate();
        pageWorld.signIn(browser)
            .waitForElementVisible('@signInLinkViaOrb', 1000)
            .click('@signInLinkViaOrb')
            .waitForElementVisible('@emailInput', 1000)
            .setValue('@emailInput', 'abcd1234@post.com')
            .waitForElementVisible('@passwordInput', 1000)
            .setValue('@passwordInput', 'Test123.')
            .waitForElementVisible('@submitButton', 1000)
            .click('@submitButton')
    }
};