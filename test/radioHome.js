require('../nightwatch.conf.js');
require('../pages/homePage.js');
require('mocha');

// this function calls the elements in homePage.js page
function radioPage(browser) {
    return browser.page.pageRadioHome();
}

module.exports = {
    '@tags': ['radio', 'smoke'], //nightwatch --tag smoke
    '1. navigate to all stations page': function (browser) {
        radioPage(browser).navigate();
        radioPage(browser)
        .waitForElementVisible('body', 1000)
        .waitForElementVisible('@allStationsLink', 1000);
        // radioSection.expect.element('@allStationsLink').text.to.contain('All stations');
        radioPage(browser).click('@allStationsLink');
        browser.saveScreenshot('./screenshots/navigate_to_all_stations.png')
            .end()
        // var radioPage = browser.page.pageRadioHome();
        // var radioSection = radioPage.section.listenLiveCarousel;
        // //     radioPage
        // var google = browser.page.pageRadioHome();
        // google.expect.section('@listenLiveCarousel').to.be.visible;
//
//         var menuSection = google.section.listenLiveCarousel;
//         menuSection.click('allStationsLink')

    }
};


// module.exports = {
//     'Test': function (client) {
//         var google = client.page.google();
//         google.expect.section('@menu').to.be.visible;
//
//         var menuSection = google.section.menu;
//         menuSection.expect.element('@mail').to.be.visible;
//         menuSection.expect.element('@images').to.be.visible;
//
//         menuSection.click('@mail');
//
//         client.end();
//     }
// };