require('../nightwatch.conf.js');
require('mocha');

// this function calls the elements in homePage.js page
function homepageModel(browser) {
    return browser.page.homePage();
}

module.exports = {
    '@tags': ['homepage', 'smoke'], //nightwatch --tag smoke
    '1. navigate to try prime page': function (browser) {
        browser.url('http://www.amazon.co.uk');
        homepageModel(browser)
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('.a-aui_51744-c', 1000)
            .click('@navTryPrimeLink')
            .waitForElementVisible('.primedetailpage-content-hero-box')
            .expect.element('.primedetailpage-content-hero-box').text.to.contain('Unlimited One-Day Delivery and more')
        browser.saveScreenshot('./screenshots/navigate_to_try_prime_page.png')
            .end()
    },
    '2. navigate to my list': function (browser) {
        browser.url('http://www.amazon.co.uk');
        homepageModel(browser)
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('.a-aui_51744-c', 1000)
            .click('@navWishList')
            .waitForElementVisible('.a-section.al-intro-banner')
            .expect.element('.a-section.al-intro-banner').text.to.contain('Lists' && 'for all your shopping needs')
        browser.saveScreenshot('./screenshots/navigate_to_my_list.png')
            .end()
    },
    '3. navigate to your account': function (browser) {
        browser.url('http://www.amazon.co.uk');
        homepageModel(browser)
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('.a-aui_51744-c', 1000)
            .click('@navYourAccount');
        browser.saveScreenshot('./screenshots/navigate_to_my_account.png')
            .end()
    }
};