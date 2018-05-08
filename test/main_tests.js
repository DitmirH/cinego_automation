require('../nightwatch.conf.js');
require('mocha');

module.exports = {
    'check page load': function (browser) {
        browser
            .url('http://www.amazon.co.uk')
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('.a-aui_51744-c', 1000)
            .click('#nav-link-prime')
            .waitForElementVisible('.primedetailpage-content-hero-box')
            .expect.element('.primedetailpage-content-hero-box').text.to.contain('Unlimited One-Day Delivery and more')
            browser.saveScreenshot('./screenshots/screenshot.png')
            .end()
        // a-spacing-small
    }
};

