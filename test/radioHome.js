require('../nightwatch.conf.js');

const pageWorld = require ('../support/pageWorld.js');

module.exports = {
    '@tags': ['radio', 'smoke'], //nightwatch --tag smoke
    '1. navigate to all stations page': function (browser) {
        pageWorld.radioPage(browser).navigate();
        pageWorld.radioPage(browser)
            .waitForElementVisible('body', 1000)
        pageWorld.listenLiveCarouselSection(browser).expect.element('@allStationsLink').to.be.visible;
        pageWorld.listenLiveCarouselSection(browser).click('@allStationsLink');
        browser.saveScreenshot('./screenshots/navigate_to_all_stations.png')
            .end()
    },
    '2. sign in': function (browser) {
        pageWorld.radioPage(browser).navigate();
        pageWorld.signIn(browser)

    },

};
